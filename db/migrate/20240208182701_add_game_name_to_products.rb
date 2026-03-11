# frozen_string_literal: true

# Adds game_name column to products table and indexes it for faster queries
class AddGameNameToProducts < ActiveRecord::Migration[7.1]
  def change
    add_column :products, :game_name, :string
    add_index :products, :game_name
  end
end
