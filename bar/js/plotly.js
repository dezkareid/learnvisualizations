var x = [], y = [];

dataSet.forEach(function (item) {
	x.push(item[0]);
	y.push(item[1]);
});

var data = [
  {
    x: x,
    y: y,
    type: 'bar'
  }
];

Plotly.newPlot('bar', data);