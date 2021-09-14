
@review.each do |review|
    json.set! product.id do
        json.partial! "api/reviews/review", review: {review}
    end
end