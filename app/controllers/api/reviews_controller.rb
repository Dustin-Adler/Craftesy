class Api::ReviewsController < ApplicationController

    def index
        # @reviews = Review.find_by(id: )

    end

    def show

    end

    def create
        
    end

    def update
        
    end

    def delete
        
    end

    private

    def review_params
        params.require(:review).permit(:rating, :body )
    end
end
