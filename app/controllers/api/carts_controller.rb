class Api::CartsController < ApplicationController

    def index
        # debugger
        @cart = current_user.items_in_cart

        if @cart 
            render "api/carts/show"
        else 
            render json: @cart.errors.full_messages
        end
    end

    def create
        # debugger
        @cart_item  = Cart.new()
        @cart_item.shopper_id = current_user.id
        @cart_item.product_id = params[:cart][:product_id]
        # debugger
        if @cart_item.save
            @cart = current_user.items_in_cart
            # debugger
            render "api/carts/show"
        else 
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def delete
        @cart_item = Cart.find_by(id: params[:id])

        if @cart_item 
            @cart_item.delete
        else  
            render json: @cart_item.errors.full_messages, status: 404
        end
    end

    private

    # def cart_params
    #     params.require(:cart).permit( :product_id )
    # end
end
