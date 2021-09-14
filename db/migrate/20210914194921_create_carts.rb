class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :shopper_id
      t.integer :product_id

      t.timestamps
    end
  end
end
