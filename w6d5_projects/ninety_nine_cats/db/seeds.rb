# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Cat.destroy_all

green_dino = Cat.create(birth_date: '1998/05/06', color: :green, name: 'Green Dino', sex: 'M', description: "H's Cat")
purple_dino = Cat.create(birth_date: '2021/12/23', color: 'purple', name: 'Purple Dino', sex: 'F', description: "Mikes's Cat")
red_dino = Cat.create(birth_date: '1950/02/20', color: "red", name:'Red Dino', sex:'F', description:"Peter's Cat")
yellow_dino = Cat.create(birth_date: '1998/08/30', color: "yellow", name:'Yellow Dino', sex:'M', description:"Adam's Cat")
