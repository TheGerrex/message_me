import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import '@doabit/semantic-ui-sass'

let submit_message = function() {
  $("#message_body").on("keyup", function(e) {
    if (e.keyCode == 13) {
      e.target.value = ""
      $("button").click();
    }

  })
}

window.scroll_bottom = function() {
  if ($("#messages").length > 0) {
    $("#messages").scrollTop($("#messages")[0].scrollHeight);
  }
}

$(document).on("turbolinks:load", function() {
  $(".ui.dropdown").dropdown();
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  submit_message();
  scroll_bottom();
}) 

