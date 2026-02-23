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
    where('name ILIKE :search OR game_name ILIKE :search', search: "%#{search_string}%")
      .order(Arel.sql(<<~SQL))
        GREATEST(
          similarity(game_name, '#{search_string}') * 0.8,
          similarity(name, '#{search_string}')
        ) DESC
      SQL
      .limit(7)
      .pluck(:game_name, :name)
      .flatten
      .uniq
      .first(7)
  }
end
