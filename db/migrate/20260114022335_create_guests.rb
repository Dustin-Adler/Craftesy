class CreateGuests < ActiveRecord::Migration[7.1]
  def change
    create_table :guests do |t|
      t.string :session_token
      t.string :guest_id

      t.timestamps
    end
  end
end
