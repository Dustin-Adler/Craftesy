# frozen_string_literal: true

# Adds quantity column to carts table
class AddQuantityToCart < ActiveRecord::Migration[5.2]
  def change
    add_column :carts, :quantity, :integer
  end
end
