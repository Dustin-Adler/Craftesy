# frozen_string_literal: true

module SessionTokenable
  extend ActiveSupport::Concern

  included do
    after_initialize :ensure_session_token
    validates :session_token, presence: true, uniqueness: true
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = Guest.generate_session_token
    save!
    self.session_token
  end
end
