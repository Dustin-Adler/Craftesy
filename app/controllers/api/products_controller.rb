class Api::ProductsController < ApplicationController

    def index
        @products = Product.all.with_attached_images
        render "api/products/index"
    end

    def show
        @product = Product.find_by(id: params[:id])
        render "api/products/show"
    end

    def create
        
    end

    def update
        
    end

    def delete
        
    end

    private

    def product_params
        params.require(:product).permit(:name, :description, :price)
    end
end
