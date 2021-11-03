class AddNullToCarts < ActiveRecord::Migration[5.2]
  def change
    change_column_null :carts, :quantity, false
  end
end
