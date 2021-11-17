json.extract! @cart_item, :id, :quantity, :discount
json.partial! "api/carts/cart_item", cart_item: @cart_item.product