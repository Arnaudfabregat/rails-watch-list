

import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Let's watch movies!", "Martine est trop couleuh!"],
      typeSpeed: 50,
      loop: true
    })
  }
}
