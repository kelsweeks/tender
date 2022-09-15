Plant.destroy_all
Appointment.destroy_all
PlantTender.destroy_all
User.destroy_all

puts "seeding"

user1 = User.create(username: "jcsn", name: "Jose Simosa", email: "josecarlossimosa@gmail.com",password: "123")
user2 = User.create(username: "juanjcc", name: "Juan Schutlze", email: "juansimosa@gmail.com",password: "1468")

Plant.create!(name: 'Ageratum',location: "6304 kaiwiki Pl", plant_type: "Annual", care: "water once a week", user_id: user1.id)
Plant.create!(name: 'American Marigold',location: "3844 Keanu St", plant_type: "Annual", care: "water every day", user_id: user2.id)


plant_tender1 = PlantTender.create(name: "Michael Ortiz", phone: "222-232323")
plant_tender2 = PlantTender.create(name: "Fernando Ortiz", phone: "555-565656")

Appointment.create(date: "sep/19/2022", user_id:user1.id, plant_tender_id: plant_tender1.id)
Appointment.create(date: "jan/10/2023", user_id:user2.id, plant_tender_id: plant_tender2.id)


puts "done seeding"