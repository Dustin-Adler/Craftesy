# frozen_string_literal: true

class Cart < ApplicationRecord
  validates :quantity, :product_id, presence: true
  validate :belongs_to_shopper_or_guest

  belongs_to :guest_shopper,
             foreign_key: :guest_id,
             class_name: :Guest,
             optional: true

  belongs_to :shopper,
             foreign_key: :shopper_id,
             class_name: :User,
             optional: true

  belongs_to :product,
             foreign_key: :product_id,
             class_name: :Product

  has_many :images,
           through: :product,
           source: :images_attachments

  def belongs_to_shopper_or_guest
    return unless shopper_id || guest_id

    return unless shopper_id.nil? && guest_id.nil?

    errors.add(:base, 'Cart object must have an owner, either a User or a Guest.')
  end
end
