class CreateGuests < ActiveRecord::Migration[7.1]
  def change
    create_table :guests do |t|
      t.string :session_token, null: false
      t.string :uuid, null: false

      t.timestamps
    end

    add_index :guests, :uuid
  end
end
