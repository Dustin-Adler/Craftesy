# frozen_string_literal: true

module Api
  # Handles cart-related API actions for the current actor (user or guest),
  # including listing cart items, creating new entries, updating quantities/details,
  # and removing items from the cart.
  class CartsController < ApplicationController
    def index
      @cart = current_actor.cart_items.includes({ product: [:carts] }, :images)

      if @cart
        render 'api/carts/index'
      else
        render json: @cart.errors.full_messages
      end
    end

    def create
      @cart_item = Cart.new(cart_params)
      user? ? @cart_item.shopper_id = current_actor.id : @cart_item.guest_id = current_actor.id
      if @cart_item.save
        @cart = current_actor.items_in_cart
        render 'api/carts/show'
      else
        render json: @cart_item.errors.full_messages, status: 422
      end
    end

    def update
      @cart_item = Cart.find_by(id: params[:id])

      if @cart_item.update(cart_params)
        render 'api/carts/show'
      else
        render json: @cart_item.errors.full_messages, status: 422
      end
    end

    def destroy
      @cart_item = Cart.find_by(id: params[:id])

      if @cart_item
        @cart_item.delete
      else
        render json: @cart_item.errors.full_messages, status: 404
      end
    end

    private

    def cart_params
      params.require(:cart).permit(:product_id, :quantity, :discount)
    end
  end
end
