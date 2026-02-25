# frozen_string_literal: true

# products table with name, description, price, seller_id, and optional game_name
class Product < ApplicationRecord
  validates :name, :description, :price, :seller_id, presence: true

  has_many_attached :images

  has_many :reviews,
           foreign_key: :product_id,
           class_name: :Review

  has_many :carts,
           foreign_key: :product_id,
           class_name: :Cart

  has_many :buyers,
           through: :carts,
           source: :shopper

  has_many :guest_buyers,
           through: :carts,
           source: :guest_shopper

  scope :search_by_name, lambda { |search_string|
    where('name ILIKE :search OR game_name ILIKE :search', search: "%#{search_string}%")
      .with_attached_images
      .includes(:reviews)
  }

  scope :search_assist, lambda { |search_string|
    from("(
      SELECT name AS suggestion,
      SIMILARITY(name, '#{search_string}') +
        (CASE WHEN name ILIKE '#{search_string}%' THEN 0.5 ELSE 0 END) AS score
      FROM products
      WHERE name ILIKE '%#{search_string}%'
      UNION ALL
      SELECT game_name AS suggestion,
      SIMILARITY(game_name, '#{search_string}') +
        (CASE WHEN game_name ILIKE '#{search_string}%' THEN 0.5 ELSE 0 END) AS score
      FROM products
      WHERE game_name ILIKE '%#{search_string}%'
    ) suggestions")
      .select('suggestion, MAX(score) AS max_score')
      .group('suggestion')
      .order('MAX(score) DESC')
      .limit(7)
      .pluck(:suggestion)
  }
end
