# frozen_string_literal: true

json.extract! review, :id, :rating, :body, :author_id, :product_id, :created_at
json.author review.author.first_name
