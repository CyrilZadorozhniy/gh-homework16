const gradientSplineChart = {
    chart: {
        type: 'spline',
        height: '291',
        width: 500
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    xAxis: {
        labels: {
            enabled: false
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        color: {
            linearGradient: { x1: 0, x2: 1, y1: 0, y2: 1 },
            stops: [
                [0, '#5883fd'],
                [1, '#f73d7c']
            ]
        },
        lineWidth: 5,
        showInLegend: false,
        name: 'Reports',
        marker: {
            enabled: false,
        },
    }]
};
export default  gradientSplineChart;