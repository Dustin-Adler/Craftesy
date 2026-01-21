# frozen_string_literal: true

module Api
  class GuestsController < ApplicationController
    def show
      # gets all of the items in the guest's cart
    end

    def create
      @guest = ensure_guest
      if @guest.present?
        start_session(@guest)
        render 'api/guests/show'
      else
        render json: @guest.errors.full_messages, status: 422
      end
    end

    def upgrade_guest_to_user
      # logic to upgrade guest to user including updating cart items with new user id
    end
  end
end
