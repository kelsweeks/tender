Plant.destroy_all
Appointment.destroy_all
PlantTender.destroy_all
User.destroy_all

puts "🧑‍🌾 Seeding Users..."
user1 = User.create(username: "jcsn", name: "Jose Simosa", email: "josecarlossimosa@gmail.com",password:'123')
user2 = User.create(username: "kelsweeks", name: "Kelsey Weeks", email: "kelsey@kelseyweeks.com", password: '456')


puts "🧑‍🌾 Seeding Plants..."

Plant.create!([
    { name: 'Ageratum',location: Faker::Address.full_address, plant_type: "Annual", care: "water once a week", user_id: user1.id},
    { name: 'Kalanchoe',location: Faker::Address.full_address, plant_type: "Succulent", care: "water when soil is dry", user_id: user1.id},
    { name: 'Alocasia Silver Dragon',location: Faker::Address.full_address, plant_type: "House Plant", care: "needs indirect sunlight", user_id: user2.id},
    { name: 'Bird of Paradise',location: Faker::Address.full_address, plant_type: "Tropical", care: "requires lots of light", user_id: user2.id},
    { name: 'Areca Palm',location: Faker::Address.full_address, plant_type: "House Plant", care: "if you can get this to live please stay forever", user_id: user1.id},
    { name: 'Philodendron Birkin',location: Faker::Address.full_address, plant_type: "House Plant", care: "indirect light and moist soil", user_id: user2.id},
    { name: 'Parlour Palm',location: Faker::Address.full_address, plant_type: "Indoor Plant", care: "just make sure she lives", user_id: user2.id},
    { name: 'Philodendron',location: Faker::Address.full_address, plant_type: "Tropical", care: "moist soil", user_id: user2.id},
    { name: 'Aspidistra elatior',location: Faker::Address.full_address, plant_type: "House Plant", care: "does not require much care", user_id: user1.id},
    { name: 'Bromeliad',location: Faker::Address.full_address, plant_type: "House Plant", care: "lots of natural light and keep the soil moist", user_id: user2.id}
])

plant_tender1 = PlantTender.create(name: "Michael Ortiz", phone: "222-232323")
plant_tender2 = PlantTender.create(name: "Fernando Ortiz", phone: "555-565656")

Appointment.create(date: "sep/19/2022", user_id:user1.id, plant_tender_id: plant_tender1.id)
Appointment.create(date: "jan/10/2023", user_id:user2.id, plant_tender_id: plant_tender2.id)


puts "done seeding"