class Message < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.text :body, null: false
      t.string :name, null: false
      t.string :email
      t.timestamps
    end
  end
end
