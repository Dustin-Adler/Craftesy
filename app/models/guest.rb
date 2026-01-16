class Guest < ApplicationRecord
    before_validation :ensure_uuid, on: :create
    validates :session_token, :uuid, presence: true, uniqueness: true
    after_initialize :ensure_session_token

    attr_readonly :uuid

    has_many :cart_items,
        foreign_key: :guest_id,
        class_name: :Cart

    has_many :items_in_cart,
        through: :cart_items,
        source: :product

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def self.generate_uuid
        SecureRandom.uuid
    end

    def ensure_uuid
        self.uuid ||= Guest.generate_uuid
    end
  
    def ensure_session_token
        self.session_token ||= Guest.generate_session_token
    end

    def reset_session_token!
        self.session_token = Guest.generate_session_token
        self.save! 
        self.session_token 
    end
end
