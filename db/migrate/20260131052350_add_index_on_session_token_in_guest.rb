class AddIndexOnSessionTokenInGuest < ActiveRecord::Migration[7.1]
  def change
    remove_index :users, :email
    remove_index :users, :session_token
    remove_index :products, :name
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
    add_index :products, :name, unique: true
    add_index :guests, :session_token, unique: true
  end
end
