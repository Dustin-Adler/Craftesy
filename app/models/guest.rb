# frozen_string_literal: true

class Guest < ApplicationRecord
  include SessionTokenable

  before_validation :ensure_uuid, on: :create
  validates :uuid, presence: true, uniqueness: true

  attr_readonly :uuid

  scope :stale, -> { where('created_at < ?', 30.days.ago) }

  has_many :cart_items,
           foreign_key: :guest_id,
           class_name: :Cart,
            dependent: :destroy

  has_many :items_in_cart,
           through: :cart_items,
           source: :product

  def self.generate_uuid
    SecureRandom.uuid
  end

  def ensure_uuid
    self.uuid ||= Guest.generate_uuid
  end

  def transfer_items_to_user(user)
    cart_items.each do |cart_item|
      cart_item.update(guest_id: nil, shopper_id: user.id)
    end
  end
end
