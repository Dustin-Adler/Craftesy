module UserTrackable
    extend ActiveSupport::Concern

    included do
      helper_method :current_user, :user?
    end

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def user?
        current_user.present?
    end
end