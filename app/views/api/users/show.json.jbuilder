# frozen_string_literal: true

json.user do
  json.partial! 'api/users/user', user: @user
end

json.cart do
  if @cart.present?
    @cart.each do |cart_item|
      json.set! cart_item.id do
        json.extract! cart_item, :id, :quantity, :discount
        json.partial! 'api/carts/cart_item', cart_item: cart_item.product
      end
    end
  else
    {}
  end
end
