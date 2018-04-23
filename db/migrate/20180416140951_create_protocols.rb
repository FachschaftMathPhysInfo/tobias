class CreateProtocols < ActiveRecord::Migration[5.1]
  def change
    create_table :protocols do |t|
      t.text :content
      t.string :result
      t.bigint :status

      t.timestamps
    end
  end
end