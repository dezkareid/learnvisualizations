var x = [], y = [];

dataSet.forEach(function (item) {
    x.push(item[0]);
    y.push(item[1]);
});

var ctx = document.getElementById("bar");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: x,
        datasets: [{
            data: y
        }]
    }
});