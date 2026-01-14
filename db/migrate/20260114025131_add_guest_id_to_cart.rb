class AddGuestIdToCart < ActiveRecord::Migration[7.1]
  def change
    add_column :carts, :guest_id, :string
  end
end
