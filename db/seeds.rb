# frozen_string_literal: true

puts 'Seeding Database...'

Dir[File.join(Rails.root, 'db', 'seeds', '*.rb')].sort.each do |seed_file|
  puts "Loading seed file: #{File.basename(seed_file)}"
  load seed_file
end

puts 'Seeding Complete!'
