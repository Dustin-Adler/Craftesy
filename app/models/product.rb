class Product < ApplicationRecord
    validates :name, :description, :price, :seller_id, presence: true
    
    has_many_attached :images

    has_many :reviews, 
        foreign_key: :product_id, 
        class_name: :Review

    has_many :buyers, 
        foreign_key: :product_id, 
        class_name: :Cart
        
end
