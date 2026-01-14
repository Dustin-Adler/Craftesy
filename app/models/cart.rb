class Cart < ApplicationRecord
    validates :belongs_to_shopper_or_guest
    validates :quantity, :product_id, presence: true

    belongs_to :guest_shopper, 
        foreign_key: :guest_id,
        class_name: :Guest

    belongs_to :shopper, 
        foreign_key: :shopper_id, 
        class_name: :User

    belongs_to :product, 
        foreign_key: :product_id, 
        class_name: :Product

    has_many :images, 
        through: :product,
        source: :images_attachments

    def belongs_to_shopper_or_guest
        if self.shopper_id.nil? && self.guest_id.nil?
            errors.add(:base, "No guest or user to associate with cart item")
        end
    end

end
