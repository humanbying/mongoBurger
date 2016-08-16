$(() => {
  $('#inputForm').submit(saveData);

});

function saveData(event){
  event.preventDefault();

  let order = {
    name: $("#name").val(),
    weight: $("#weight").val(),
    meat: $("#meat").val(),
    cheese: $("#cheese").val()
  };

  $.ajax({
    method: "POST",
    url: "/burgers",
    data: order
  })
  .done(function( msg ) {
    alert( "Data Saved" + msg);
  });

  fetch( '/burgers' )
  .then(response => {
    return response.json()
  })
  .then(data => {
    data = showData(data);
    $('#output').append(data);
  })
  .catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
  });
}

function showData(burgers){
  burgers.map(something => {
    let newObj = $(`#template`).clone()
    newObj.removeAttr('id')
    $('.name').text(something.name)
  })
}
