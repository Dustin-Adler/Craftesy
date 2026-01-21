# frozen_string_literal: true

module ProductsHelper
  def average_rating(reviews, review_count)
    return 0 unless review_count.positive?

    average_rating = reviews.reduce(0) do |ratings, review|
      ratings + review.rating
    end / review_count
    average_rating.round(1)
  end
end
