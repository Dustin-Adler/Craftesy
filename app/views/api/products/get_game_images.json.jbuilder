@products.each do |product| 
    json.set! product.id do
        json.name product.name
        json.game_name product.game_name
        json.images product.images do |image|
            json.url url_for(image)
        end
    end
end