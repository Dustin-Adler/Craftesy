# frozen_string_literal: true

# Adds discount column to carts table with default value of 1.0 (no discount)
class AddDiscountsToCarts < ActiveRecord::Migration[5.2]
  def change
    add_column :carts, :discount, :decimal, null: false, default: 1.0
  end
end
