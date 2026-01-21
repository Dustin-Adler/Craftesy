# frozen_string_literal: true

class User < ApplicationRecord
  validates :session_token, :email, presence: true, uniqueness: true
  validates :password_digest, :first_name, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :reviews,
           foreign_key: :author_id,
           class_name: :Review

  has_many :cart_items,
           foreign_key: :shopper_id,
           class_name: :Cart

  has_many :items_in_cart,
           through: :cart_items,
           source: :product

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user&.is_password?(password)

    user
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    save!
    self.session_token
  end
end
