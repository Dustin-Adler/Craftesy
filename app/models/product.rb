class Product < ApplicationRecord
    validates :name, :description, :price, :seller_id, presence: true
    
    has_many_attached :images
end
