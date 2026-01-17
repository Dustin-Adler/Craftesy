module GuestTrackable
  extend ActiveSupport::Concern

  included do
    helper_method :current_guest, :guest?, :ensure_guest
  end

  def current_guest
      @current_guest ||= Guest.find_by(session_token: session[:session_token])
  end

  def ensure_guest
    return if current_guest.present?
    guest = Guest.create!
    set_guest_cookie(guest)
    @current_guest = guest
  end

  def set_guest_cookie(guest)
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