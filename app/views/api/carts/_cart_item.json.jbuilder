json.extract! cart_item, :name, :description, :price, :seller_id
json.product_id cart_item.id
json.popularity (cart_item.carts.group(:shopper_id).pluck(:shopper_id).length - 1)
# json.popularity_quantity cart_item.carts.calculate(:sum, :quantity)
json.images cart_item.images do |image|
    json.url url_for(image)
end