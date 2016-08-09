class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :name
      t.date :event_date
      t.text :description
      t.string :place

      t.timestamps
    end
  end
end
