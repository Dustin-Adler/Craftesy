class Api::ReviewsController < ApplicationController

    def index
        @reviews = Product.find_by(id: params[:product_id]).reviews
    end

    def create
        @review = Review.new(review_params)
        @review.author_id = current_user.id
        @review.product_id = params[:product_id]
        @product = Product.find_by(id: params[:product_id])
        if @review.save
            render "api/reviews/show"
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:id])

        if @review.update(review_params)
            render "api/reviews/show"
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])

        if @review 
            @review.delete
        else  
            render json: @review.errors.full_messages, status: 404
        end
        
    end

    private

    def review_params
        params.require(:review).permit(:rating, :body)
    end
end
