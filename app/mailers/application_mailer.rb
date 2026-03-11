# frozen_string_literal: true

# We will not be utilizing this
class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'
end
