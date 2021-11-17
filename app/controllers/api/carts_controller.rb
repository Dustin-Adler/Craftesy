class Api::CartsController < ApplicationController

    def index

        @cart = current_user.cart_items.includes( { product: [:carts] }, :images)
        # debugger

        if @cart 
            render "api/carts/index"
        else 
            render json: @cart.errors.full_messages
        end
    end

    def create
        @cart_item  = Cart.new(cart_params)
        @cart_item.shopper_id = current_user.id
        if @cart_item.save
            @cart = current_user.items_in_cart
            render "api/carts/show"
        else 
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def update
        @cart_item = Cart.find_by(id: params[:id])

        if @cart_item.update(cart_params)
            render "api/carts/show"
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
        params.require(:cart).permit( :product_id, :quantity, :discount )
    end
end
