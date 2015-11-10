angurlar.modulue('d3App')
  .directive('d3Graph', function (){


    return {
      // restrict to element only
      restrict: 'E',
      replace: true,
      // allows two-way binding between controller and directive
      scope: { val: '='},
      template: '<div id="graph"></div>',
      link: function(scope, element, attrs) {

          //d3 code - setup bar graph

          //setup margins
          var margin = { top: 10, right: 20, bottom: 10, left: 20};
          var w = 400 - margin.left - margin.right;
          var h = 300 - margin.top - margin.bottom;

          // append the svg to html element
          var svg = d3.select('#graph').append('svg')
          .attr('width', w)
          .attr('height', h)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      }
    };
  });
