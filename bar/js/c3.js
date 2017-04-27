var x = [], y = [];

dataSet.forEach(function (item) {
    x.push(item[0]);
    y.push(item[1]);
});
y.unshift("Lenguages")
var chart = c3.generate({
    bindto: '#bar',
    data: {
        columns: [
            y
        ],
        type: 'bar'
    },
    axis: {
        x: {
            type: 'category',
            categories: x
        }
    }
});