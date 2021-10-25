json.extract! cart_item, :id, :name, :description, :price, :seller_id
json.images cart_item.images do |image|
    json.url url_for(image)
end