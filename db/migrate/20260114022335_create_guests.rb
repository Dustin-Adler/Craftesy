# frozen_string_literal: true

# Creates guests table with session token and uuid, and indexes uuid for faster queries
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
