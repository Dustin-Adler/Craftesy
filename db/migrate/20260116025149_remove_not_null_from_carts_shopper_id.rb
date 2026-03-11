# frozen_string_literal: true

# Removes not null constraint from shopper_id column in carts table
class RemoveNotNullFromCartsShopperId < ActiveRecord::Migration[7.1]
  def change
    change_column_null :carts, :shopper_id, true
  end
end
