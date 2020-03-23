require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import AOS from 'aos';

AOS.init();

// AJAX on the book search result
let searchInputTimeout;
const searchForm = document.querySelector("#book-search-form");
const input = searchForm.querySelector("#search_query");
const searchResults = document.querySelector('#search-results');

input.addEventListener("keyup", () => {

  clearTimeout(searchInputTimeout);
  searchInputTimeout = setTimeout(
    () => {
      console.log('triggering')
      if (input.value === "") {
        searchResults.innerHTML = "";
      } else {
        searchForm.dispatchEvent(new Event('submit', { bubbles: true }));
      }
    },
    300
  )
});
