
function update() {
  $('#clock').html(moment().format("MMM Do YYYY, h:mm:ss a"));
}

setInterval(update, 1000);


