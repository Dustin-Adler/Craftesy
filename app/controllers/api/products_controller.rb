# frozen_string_literal: true

module Api
  # Controller for products, including product search functionality
  class ProductsController < ApplicationController
    def index
      @products = Product.all.with_attached_images
      render 'api/products/index'
    end

    def show
      @product = Product.find_by(id: params[:id])
      render 'api/products/show'
    end

    def search_products_by_name
      search_string = product_search_params.strip
      @products = if search_string.present?
                    Product.where('name ILIKE (?) OR game_name ILIKE (?)', "%#{search_string}%",
                                  "%#{search_string}%")
                           .with_attached_images
                           .includes(:reviews)
                  else
                    Product.all.with_attached_images.includes(:reviews)
                  end
      render 'api/products/search_products_by_name'
    end

    def get_game_images
      product_names = ['Cape Feather', "Cloud's Buster Sword", 'Speed Boots', 'Heart Container', 'Llama Pinata',
                       'Trinity Force']
      @products = Product.where(name: product_names).with_attached_images
      render 'api/products/get_game_images'
    end

    def search_assist
      search_string = product_search_params.strip
      @matched_terms = if search_string.present?
                         Product.where('name ILIKE (?) OR game_name ILIKE (?)', "%#{search_string}%", "%#{search_string}%")
                                .pluck(:name, :game_name)
                                .flatten
                                .uniq
                       else
                         []
                       end
      render 'api/products/search_assist'
    end

    private

    def product_params
      params.require(:product).permit(:name, :description, :price, :game_name)
    end

    def product_search_params
      params[:search_string].present? ? params.require(:search_string) : ''
    end
  end
end
