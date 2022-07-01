# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Todo.destroy_all

Todo.create!(title: "watch the clippers not make playoffs", body: "imagine having a team where luke kennard is a star player", done: true)
Todo.create!(title: "free miles bridges", body: "miles bridges is drinking lean in prison", done: false)
Todo.create!(title: "finish my fullstack project", body: "work on this stuff fr", done: false)
Todo.create!(title: "study about react and redux", body: "you really need to study this stuff", done: false)
Todo.create!(title: "hate on the warriors", body: "warriors are the worst franchise in the world", done: false)
Todo.create!(title: "realize that the warriors are the greatest franchise in NBA history", body: "the warriors are about to have a 6-peat", done: true)