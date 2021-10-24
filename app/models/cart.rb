class Cart < ApplicationRecord
    validates :shopper_id, :product_id, presence: true

    belongs_to :shopper, 
        foreign_key: :shopper_id, 
        class_name: :User

    belongs_to :product, 
        foreign_key: :product_id, 
        class_name: :Product

    
end
