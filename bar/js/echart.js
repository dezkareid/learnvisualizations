var x = [], y = [];

dataSet.forEach(function (item) {
    x.push(item[0]);
    y.push(item[1]);
});
var bar = echarts.init(document.getElementById('bar'));
var option = {
    xAxis: {
        data: x
    },
    yAxis: {
    },
    series : [
        { data : y, type : 'bar'}
    ]
};
bar.setOption(option);