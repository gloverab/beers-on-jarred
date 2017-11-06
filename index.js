$(document).ready(function() {
  $("nav a").on('click', function(event) {
    if (this.hash !== "10") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 550, function(){
        window.location.hash = hash;
      });
    }
  });

  $('#add-beer-btn').on('click', function() {
    addBeer()
  })

  localBeers = 0
  currentColumn = 0
})


function addBeer() {
  localBeers += 1;
  currentColumn < 11 ? currentColumn += 1 : currentColumn = 1
  $('#local-number')[0].innerText = localBeers;
  dropBeer()
}

function dropBeer() {
  var beerNode = document.createTextNode('🍺')
  const columnDiv = document.getElementById(`beer-column-${currentColumn}`)
  columnDiv.insertBefore(beerNode, columnDiv.firstChild)
  // $(`#beer-column-${currentColumn}`)[0].innerText += "🍺"
}
