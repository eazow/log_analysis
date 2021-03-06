function draw_pie(div_id, data, title) {
    return Highcharts.chart(div_id, {
        chart: {
            type: 'pie'
        },
        title: {
            text: title
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: {
             enabled: false
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: data
        }]
    });
}


function draw_bar(div_id, data, title) {
    return Highcharts.chart(div_id, {
        chart: {
            type: 'bar'
        },
        credits: {
             enabled: false
        },
        title: {
            text: title
        },
        xAxis: {
            type: 'category',
        },
        yAxis: {
            title: {
                text: null,
            }
        },
        series: [{
            name: '访问次数',
            data: data
        }]
    });
}
