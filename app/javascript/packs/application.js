require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import AOS from 'aos';

AOS.init();

let searchInputTimeout;
const searchForm = document.querySelector("#book-search-form");
const input = searchForm.querySelector("#search_query");

input.addEventListener("keyup", () => {
  clearTimeout(searchInputTimeout)
  searchInputTimeout = setTimeout(
    () => {
      console.log('triggering')
      searchForm.dispatchEvent(new Event('submit', { bubbles: true }))
    },
    300
  )
});
