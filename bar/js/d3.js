var margin = {top: 20, right: 20, bottom: 70, left: 40},
  width = 600 - margin.left - margin.right,
  height = 300 - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width],.05).padding(0.2);

var y = d3.scaleLinear().rangeRound([ 0, height]);

x.domain(dataSet.map(function(d) { return d[0]; }));
y.domain([d3.max(dataSet, function(d) { return d[1]; }), 0]);

var xAxis = d3.axisBottom()
  .scale(x);

var yAxis = d3.axisLeft()
  .scale(y);

var svg = d3.select("body").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);

svg.append("g")
  .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6);

var bars = svg.selectAll("rect")
  .data(dataSet)
  .enter().append("rect")
  .style("fill", "steelblue")
  .attr("x", function (d) { 
    return x(d[0]);
  })
  .attr('y', function (d) {
    return y(d[1]);
  })
  .attr("width", x.bandwidth())
  .attr('height', function (d) {
    return height - y(d[1]);
  });