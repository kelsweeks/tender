Plant.destroy_all
Appointment.destroy_all
PlantTender.destroy_all
User.destroy_all

puts "🧑‍🌾 Seeding Users..."
user1 = User.create(username: "jcsn", name: "Jose Simosa", email: "josecarlossimosa@gmail.com")
user2 = User.create(username: "kelsweeks", name: "Kelsey Weeks", email: "kelsey@kelseyweeks.com")
user3 = User.create(username: "potato", name: "Mr. Potato Head", email: "spud@gmail.com")
user4 = User.create(username: "sqlhaha", name: Faker::Name.name, email: Faker::Internet.email)
user5 = User.create(username: "postgreswho", name: Faker::Name.name, email: Faker::Internet.email)
user6 = User.create(username: "reactnerd", name: Faker::Name.name, email: Faker::Internet.email)
user7 = User.create(username: "rubylvr", name: Faker::Name.name, email: Faker::Internet.email)
user8 = User.create(username: "flatirongroupie", name: Faker::Name.name, email: Faker::Internet.email)
user9 = User.create(username: "onlydevallthetime", name: Faker::Name.name, email: Faker::Internet.email)
user10 = User.create(username: "builder", name: Faker::Name.name, email: Faker::Internet.email)

puts "🧑‍🌾 Seeding Plants..."
Plant.create!([
    { name: 'Ageratum',location: Faker::Address.full_address, plant_type: "Annual", care: "water once a week", user_id: user1.id},
    { name: 'Kalanchoe',location: Faker::Address.full_address, plant_type: "Succulent", care: "water when soil is dry", user_id: user1.id},
    { name: 'Alocasia Silver Dragon',location: Faker::Address.full_address, plant_type: "House Plant", care: "needs indirect sunlight", user_id: user2.id},
    { name: 'Bird of Paradise',location: Faker::Address.full_address, plant_type: "Tropical", care: "requires lots of light", user_id: user2.id},
    { name: 'Areca Palm',location: Faker::Address.full_address, plant_type: "House Plant", care: "if you can get this to live please stay forever", user_id: user3.id},
    { name: 'Philodendron Birkin',location: Faker::Address.full_address, plant_type: "House Plant", care: "indirect light and moist soil", user_id: user4.id},
    { name: 'Parlour Palm',location: Faker::Address.full_address, plant_type: "Indoor Plant", care: "just make sure she lives", user_id: user5.id},
    { name: 'Philodendron',location: Faker::Address.full_address, plant_type: "Tropical", care: "moist soil", user_id: user6.id},
    { name: 'Aspidistra elatior',location: Faker::Address.full_address, plant_type: "House Plant", care: "does not require much care", user_id: user7.id},
    { name: 'Bromeliad',location: Faker::Address.full_address, plant_type: "House Plant", care: "lots of natural light and keep the soil moist", user_id: user8.id}
])

puts "🧑‍🌾 Seeding PlantsTenders..."
plant_tender1 = PlantTender.create(name: "Michael Ortiz", phone: "222-232323")
plant_tender2 = PlantTender.create(name: Faker::Name.name, phone: Faker::PhoneNumber.cell_phone)
plant_tender3 = PlantTender.create(name: Faker::Name.name, phone: Faker::PhoneNumber.cell_phone)
plant_tender4 = PlantTender.create(name: Faker::Name.name, phone: Faker::PhoneNumber.cell_phone)
plant_tender5 = PlantTender.create(name: Faker::Name.name, phone: Faker::PhoneNumber.cell_phone)


puts "🧑‍🌾 Seeding Appointments..."
Appointment.create([
    { date: Faker::Date.in_date_period(month: 11), user_id:user1.id, plant_tender_id: plant_tender1.id },
    { date: Faker::Date.in_date_period(month: 11), user_id:user2.id, plant_tender_id: plant_tender2.id },
    { date: Faker::Date.in_date_period(month: 11), user_id:user3.id, plant_tender_id: plant_tender3.id },
    { date: Faker::Date.in_date_period(month: 11), user_id:user4.id, plant_tender_id: plant_tender4.id },
    { date: Faker::Date.in_date_period(month: 11), user_id:user5.id, plant_tender_id: plant_tender5.id },
    { date: Faker::Date.in_date_period(month: 11), user_id:user6.id, plant_tender_id: plant_tender1.id },
    { date: Faker::Date.in_date_period(month: 11), user_id:user7.id, plant_tender_id: plant_tender2.id },
    { date: Faker::Date.in_date_period(month: 11), user_id:user1.id, plant_tender_id: plant_tender3.id },
    { date: Faker::Date.in_date_period(month: 11), user_id:user8.id, plant_tender_id: plant_tender4.id },
    { date: Faker::Date.in_date_period(month: 11), user_id:user9.id, plant_tender_id: plant_tender5.id },
    { date: Faker::Date.in_date_period(month: 11), user_id:user10.id, plant_tender_id: plant_tender1.id },
    { date: Faker::Date.in_date_period(month: 11), user_id:user2.id, plant_tender_id: plant_tender4.id }
])

puts "🌱 Done Seeding!"