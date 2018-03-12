const splineChart = {
    chart: {
        type: 'spline',
        height: '300',

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
        color: '#6784f4',
        lineWidth: 5,
        showInLegend: false,
        name: 'Reports',
        marker: {
            enabled: false,
        },
    }]
};
export default  splineChart;