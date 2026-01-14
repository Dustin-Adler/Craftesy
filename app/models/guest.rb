class Guest < ApplicationRecord
    validates :session_token, presence: true, uniqueness: true
    after_initialize :ensure_session_token

    has_many :cart_items,
        foreign_key: :guest_id,
        class_name: :Cart 

    has_many :items_in_cart,
        through: :cart_items,
        source: :product

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
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
