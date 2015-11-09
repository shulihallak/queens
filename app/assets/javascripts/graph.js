// ajax request for json data for d3 graph
$.ajax({
  type: "GET",
  contentType: "application/json; charset=utf-8",
  url: 'data',
  dataType: 'json',
  success: function(data) {
    draw(data);
  },
  error: function(result){
    error();
  }
});


// d3 code

function draw(data) {



  function error() {
    console.log('error');
  }
}
