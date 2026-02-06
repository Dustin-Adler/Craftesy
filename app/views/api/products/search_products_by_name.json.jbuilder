# frozen_string_literal: true

prod_arr = []

json.products do
  @products.each do |product|
    json.set! product.id do
      json.id product.id
      json.name product.name
      json.description product.description
      json.price product.price
      json.seller product.seller_id
      json.game_name product.game_name
      json.images product.images do |image|
        json.url url_for(image)
      end
      review_count = product.reviews.length
      json.review_count review_count
      json.average_rating average_rating(product.reviews, review_count)
    end
    prod_arr << product.id
  end
end

json.ui do
  json.product_ids prod_arr
end
