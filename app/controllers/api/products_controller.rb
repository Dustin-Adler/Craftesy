class Api::ProductsController < ApplicationController

    def index
        @products = Product.all.with_attached_images
        render "api/products/index"
    end

    def show
        @product = Product.find_by(id: params[:id])
        render "api/products/show"
    end

    def search_products_by_name
        search_string = product_search_params.strip.downcase
        @products = Product.where("lower(name) LIKE (?) OR lower(game_name) LIKE (?)", "%#{search_string}%", "%#{search_string}%")
            .with_attached_images
            .includes(:reviews)
        render "api/products/search_products_by_name"
    end

    def create
        
    end

    def update
        
    end

    def delete
        
    end

    private

    def product_params
        params.require(:product).permit(:name, :description, :price, :game_name)
    end

    def product_search_params
        params.require(:search_string)
    end
end
