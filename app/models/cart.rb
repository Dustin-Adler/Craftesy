class Cart < ApplicationRecord
    validates :shopper_id, :product_id, presence: true
    validates :quantity, presence: true
    # validates :shopper_id, uniqueness:{ 
    #     scope: :product_id, message: "Item already in cart"
    # }

    belongs_to :shopper, 
        foreign_key: :shopper_id, 
        class_name: :User

    belongs_to :product, 
        foreign_key: :product_id, 
        class_name: :Product

    has_many :images, 
        through: :product,
        source: :images_attachments

end
