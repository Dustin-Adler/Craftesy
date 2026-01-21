class StaticPagesController < ApplicationController
    def root
        @actor = current_actor.present? ? current_actor : ensure_guest
        start_session(@actor)
    end
end  