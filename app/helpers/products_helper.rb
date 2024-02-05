module ProductsHelper

    def average_rating(reviews, review_count)
        return 0 unless review_count > 0
        average_rating = reviews.reduce(0){ |ratings, review|
            ratings += review.rating} / review_count
        average_rating.round(1)
    end

end
