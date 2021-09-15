class Api::ReviewsController < ApplicationController

    def index
        @reviews = Product.find_by(id: params[:product_id]).reviews
    end

    def show

    end

    def create
        
        @review = Review.new(review_params)
        @review.author_id = current_user.id
        @review.product_id = params[:product_id]
        @product = Product.find_by(id: params[:product_id])
        debugger
        if @review.save
            debugger
            render "api/products/show"
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        
    end

    def delete
        
    end

    private

    def review_params
        params.require(:review).permit(:rating, :body)
    end
end
