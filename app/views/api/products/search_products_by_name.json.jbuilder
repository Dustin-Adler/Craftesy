# frozen_string_literal: true

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
end
