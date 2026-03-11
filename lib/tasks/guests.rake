# frozen_string_literal: true

namespace :guests do
  desc 'Delete all guest records older than 90 days'
  task cleanup: :environment do
    stale_guests = Guest.stale
    guest_count = stale_guests.count
    stale_guests.delete_all
    puts "Deleted #{guest_count} stale guest records."
  end
end
