import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import '@doabit/semantic-ui-sass'


$(document).on("turbolinks:load", () => $(".ui.dropdown").dropdown());
