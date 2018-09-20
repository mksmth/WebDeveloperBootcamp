var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function() {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    // number 1
    myHistory.unshift(searchInput.value);
    console.log(myHistory);

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.innerHTML = '';

  // loop through the array, and display all the search terms in the list: forEach
    myHistory.forEach(function(itemText) {
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }
    );


    // // loop through the array, and display all the search terms in the list ***
    // for (var i = 0; i < myHistory.length; i++) {
    //   itemText = myHistory[i];
    //   var listItem = document.createElement('li');
    //   listItem.textContent = itemText;
    //   list.appendChild(listItem);
    // } ***
    

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
      // number 2
      myHistory.pop();

    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
}
