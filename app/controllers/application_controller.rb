class ApplicationController < ActionController::Base
    helper_method :ongoing_session?, :current_user, :current_guest, :current_actor


    def current_guest
        @current_guest ||= Guest.find_by(session_token: session[:session_token])
    end

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def current_actor
        @current_actor ||= current_user || current_guest
    end

    def ensure_session_token
        redirect_to new_session_url unless ongoing_session?
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

    def guest?
        !!current_guest
    end

    def user?
        !!current_user
    end

    def ongoing_session?
        !!current_actor
    end
end
