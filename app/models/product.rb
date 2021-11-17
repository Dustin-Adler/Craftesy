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
        
end
