json.extract! cart_item, :name, :description, :price, :seller_id
json.product_id cart_item.id
json.images cart_item.images do |image|
    json.url url_for(image)
end