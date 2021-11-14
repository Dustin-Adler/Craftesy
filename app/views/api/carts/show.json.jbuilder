json.extract! @cart_item, :id, :quantity
json.partial! "api/carts/cart_item", cart_item: @cart_item.product