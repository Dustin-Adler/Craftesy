class ApplicationController < ActionController::Base
    include GuestTrackable
    include UserTrackable

    helper_method :ongoing_session?, :current_actor, :ensure_session_token

    # An actor is either a user or a guest

    def current_actor
        @current_actor = current_user.present? ? current_user : current_guest
    end

    def ensure_session_token
        redirect_to new_api_session_url unless ongoing_session?
    end

    def start_session(actor)
        @current_actor = actor
        session[:session_token] = actor.reset_session_token!
    end

    def terminate_session!
        actor = @current_actor
        actor.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
        @current_guest = nil
        @current_actor = nil
    end

    def ongoing_session?
        !!current_actor
    end
end
