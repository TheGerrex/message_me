import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import '@doabit/semantic-ui-sass'


$(document).on("turbolinks:load", function() {
  $(".ui.dropdown").dropdown();
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
}) 

