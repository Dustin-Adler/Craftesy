require "test_helper"

class Api::GuestsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_guests_show_url
    assert_response :success
  end

  test "should get create" do
    get api_guests_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_guests_destroy_url
    assert_response :success
  end
end
