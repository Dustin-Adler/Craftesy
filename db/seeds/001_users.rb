# frozen_string_literal: true

puts 'Seeding Users...'

any_users = User.first

User.delete_all if any_users

%w[Demo Mario Luigi Link Zelda Tails Sonic Ash Misty Lux Ezreal Peely Midas Cloud Tifa].each do |name|
  User.create({
                email: "#{name.downcase}@account.id",
                password: 'password',
                first_name: name
              })
end

puts 'Users Seeded Successfully!'
