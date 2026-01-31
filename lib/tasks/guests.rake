namespace :guests do
  desc "Delete all guest records older than 90 days"
  task cleanup: :environment do
    stale_guests = Guest.stale
    count = stale_guests.count
    stale_guests.delete_all
    puts "Deleted #{count} stale guest records."
  end
end
