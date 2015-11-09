// ajax request for json data for d3 graph
$.ajax({
  type: "GET",
  contentType: "application/json; charset=utf-8",
  url: 'moods_path',
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
  var color = d3.scale.category20b();
  var width = 420,
      barHeight = 20;

  var x = d3.scale.linear()
      .range([0, width])
      .domain([0, d3.max(data)]);

  var chart = d3.select("#graph")
      .attr("width", width)
      .attr("height", barHeight * data.length);

  var bar = chart.selectAll("g")
      .data(data)
      .enter().append("g")
      .attr("transform", function (d, i) {
                return "translate(0," + i * barHeight + ")";
            });

  bar.append("rect")
      .attr("width", x)
      .attr("height", barHeight - 1)
      .style("fill", function (d) {
                 return color(d)
             })

  bar.append("text")
      .attr("x", function (d) {
                return x(d) - 10;
            })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .style("fill", "white")
      .text(function (d) {
                return d;
            });

  function error() {
    console.log('error');
  }
}


// structure of json object at moods/index 'moods_path'
// {
// user: "shuli@shuli.com",
// moods: [
// {
// id: 7,
// happiness: 7,
// created_at: "2015-11-07T22:59:18.691Z",
// factors: [
// {
// id: 4,
// mood_id: 7,
// blurb: "woohooo",
// created_at: "2015-11-08T20:13:57.491Z"
// }
// ]
// },
// {
// id: 8,
// happiness: 8,
// created_at: "2015-11-07T23:01:11.490Z",
// factors: [ ]
// },
// {
// id: 14,
// happiness: 4,
// created_at: "2015-11-08T02:07:59.589Z",
// factors: [ ]
// }] }
