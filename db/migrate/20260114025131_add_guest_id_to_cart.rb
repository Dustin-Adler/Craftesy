class AddGuestIdToCart < ActiveRecord::Migration[7.1]
  def change
    add_column :carts, :guest_id, :integer
    add_index :carts, :guest_id
    add_index :carts, :shopper_id
  end
end
