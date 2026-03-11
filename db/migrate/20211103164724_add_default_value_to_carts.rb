# frozen_string_literal: true

# Adds default value to carts table for quantity, and makes shopper_id and product_id not null
class AddDefaultValueToCarts < ActiveRecord::Migration[5.2]
  def change
    change_column_default :carts, :quantity, to: 1
    change_column_null :carts, :shopper_id, false
    change_column_null :carts, :product_id, false
  end
end
