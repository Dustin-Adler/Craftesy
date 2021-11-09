@cart.each do |cart_item|
    json.set! cart_item.id do
        json.partial! "api/carts/cart_item", cart_item: cart_item.product
        json.quantity cart_item.quantity
    end
end