
@products.each do |product| 
    json.set! product.id do
        json.id product.id
        json.name product.name
        json.description product.description 
        json.price product.price
        json.seller product.seller_id 
        json.images product.images do |image|
            json.url url_for(image)
        end
    end
end