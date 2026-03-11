# frozen_string_literal: true

# Concern to handle guest session management, including tracking guest users, ensuring guest sessions,
# and managing guest cookies
module GuestTrackable
  extend ActiveSupport::Concern

  included do
    helper_method :current_guest, :guest?, :ensure_guest
  end

  def current_guest
    @current_guest ||= Guest.find_by(session_token: session[:session_token])
  end

  def returning_guest
    @returning_guest ||= Guest.find_by(uuid: cookies.signed[:guest_uuid])
    create_guest_cookie(@returning_guest) if @returning_guest
    @returning_guest
  end

  def ensure_guest
    return @current_guest if current_guest.present?
    return @returning_guest if returning_guest.present?

    guest = Guest.create!
    create_guest_cookie(guest)
    @current_guest = guest
  end

  def create_guest_cookie(guest)
    cookies.signed[:guest_uuid] = {
      value: guest.uuid,
      httponly: true,
      same_site: :lax,
      secure: Rails.env.production?,
      expires: 1.month.from_now
    }
  end

  def guest?
    current_guest.present?
  end
end
