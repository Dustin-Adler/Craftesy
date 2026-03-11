# frozen_string_literal: true

# Adds null constraint to quantity column in carts table
class AddNullToCarts < ActiveRecord::Migration[5.2]
  def change
    change_column_null :carts, :quantity, false
  end
end
