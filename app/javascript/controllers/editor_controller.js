import { Controller } from "@hotwired/stimulus"
import * as marked from "marked"
import autosize from 'autosize'

window.marked = marked
window.autosize = autosize

export default class extends Controller {
    connect() {
        autosize(document.getElementById('content'));
    }
}
