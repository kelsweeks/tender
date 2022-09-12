# Plant.destroy_all

# PlantTender.destroy_all
# Appointment.destroy_all

puts "seeding"

Plant.create(name: 'Ageratum',location: "6304 kaiwiki Pl", plant_type: "Annual", care: "water once a week", user_id: 1)

User.create(username: "jcsn", name: "Jose Simosa", email: "josecarlossimosa@gmail.com")

PlantTender.create(name: "Michael Ortiz", phone: "222-232323")
Appointment.create(date: "sep/19/2022", user_id:2, plant_tender_id: 1)

# Power.create([
#     { name: "super strength", description: "gives the wielder super-human strengths" },
#     { name: "flight", description: "gives the wielder the ability to fly through the skies at supersonic speed" },
#     { name: "super human senses", description: "allows the wielder to use her senses at a super-human level" },
#     { name: "elasticity", description: "can stretch the human body to extreme lengths" }
#   ])

puts "done seeding"