# frozen_string_literal: true

class AddGameNameToProducts < ActiveRecord::Migration[7.1]
  def change
    add_column :products, :game_name, :string
    add_index :products, :game_name
  end
end
