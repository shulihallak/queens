// ajax request for json data for d3 graph
$.ajax({
  type: "GET",
  contentType: "application/json; charset=utf-8",
  url: 'moods_path',
  dataType: 'json',
  data: {},
  success: function(data) {
    draw(data);
    console.log(data);
  },
  error: function(result){
    error();
  }
});


// d3 code

function draw(data) {
  //setting up margins for graph
  var margin = {top: 30, right: 20, bottom: 30, left: 50}, width = 600 - margin.left - margin.right,
  height = 270 - margin.top - margin.bottom;

  var histogram = d3.layout.histogram() (data);
         //var neg_histogram = d3.layout.histogram()(neg_data);

         var x = d3.scale.ordinal()
             .domain(histogram.map(function(d) { return d.x; }))
             .rangeRoundBands([0, width]);

         var xAxis = d3.svg.axis()
         .scale(x)
         .orient("bottom");


         var y = d3.scale.linear()
             .domain([0, d3.max(histogram.map(function(d) { return d.y; }))])
             .range([0, height]);

         //var ny = d3.scale.linear()
         //    .domain([0, d3.max(neg_histogram.map(function(d) { return d.y; }))])
         //    .range([0, height]);

         var svg = d3.select(reference).append("svg")
             .attr("width", width)
             .attr("height", height + 20);



         svg.selectAll("rect")
             .data(histogram)
           .enter().append("rect")
             .attr("width", x.rangeBand())
             .attr("x", function(d) { return x(d.x); })
             .attr("y", function(d) { return height - y(d.y); })
             .attr("height", function(d) { return y(d.y); });


         svg.append("line")
             .attr("x1", 0)
             .attr("x2", width)
             .attr("y1", height)
             .attr("y2", height);

         svg.append("g")
             .attr("class", "x axis")
             .attr("transform", "translate(0," + (height)  + ")")
             .call(xAxis);
     };

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
