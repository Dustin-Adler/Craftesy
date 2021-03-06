class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :author_id
      t.integer :product_id
      t.integer :rating
      t.text :body

      t.timestamps
    end
    add_index :reviews, :author_id
    add_index :reviews, :product_id
  end
end
