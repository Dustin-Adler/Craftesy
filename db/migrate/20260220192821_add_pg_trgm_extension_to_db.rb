# frozen_string_literal: true

# Adds the pg_trgm extension for fuzzy search on product fields.
class AddPgTrgmExtensionToDb < ActiveRecord::Migration[7.1]
  def change
    enable_extension 'pg_trgm' unless extension_enabled?('pg_trgm')

    remove_index :products, :name if index_exists?(:products, :name)
    remove_index :products, :game_name if index_exists?(:products, :game_name)

    add_index :products, :name, using: :gin, opclass: :gin_trgm_ops
    add_index :products, :game_name, using: :gin, opclass: :gin_trgm_ops
  end
end
