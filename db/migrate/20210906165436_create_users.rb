# frozen_string_literal: true

# Creates users table with session token, password digest, email, and first name
class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :email, null: false
      t.string :first_name, null: false

      t.timestamps
    end
    add_index :users, :session_token
    add_index :users, :email
  end
end
