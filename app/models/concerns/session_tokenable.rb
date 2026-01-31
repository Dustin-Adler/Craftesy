# frozen_string_literal: true

module SessionTokenable
  extend ActiveSupport::Concern

  included do
    after_initialize :ensure_session_token
    validates :session_token, presence: true, uniqueness: true
  end

  class_methods do
    # This currently checks both User and Guest to ensure uniqueness across both models, in the future it would
    # be better to have a separate table for session tokens if we plan to have more models using session tokens.
    def generate_session_token
      loop do
        token = SecureRandom.urlsafe_base64(16)
        break token unless User.exists?(session_token: token) || Guest.exists?(session_token: token)
      end
    end
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    save!
    self.session_token
  end
end
