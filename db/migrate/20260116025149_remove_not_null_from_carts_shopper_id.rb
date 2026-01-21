# frozen_string_literal: true

class RemoveNotNullFromCartsShopperId < ActiveRecord::Migration[7.1]
  def change
    change_column_null :carts, :shopper_id, true
  end
end
