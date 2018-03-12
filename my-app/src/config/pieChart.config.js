
const SalesChart = {
    chart: {
        type: 'pie',
        height: '300',
    },
    plotOptions: {
        pie: {
            shadow: false,
            borderWidth: 0,
            colors: ['#213161','#304b99', '#3959bb', '#4068dc', '#4a7afe', '#5584ff']
        }
    },
    title: {
        text: '',
        verticalAlign: 'middle',
        floating: true,
        x: -65,
        y: 0
    },
    legend: {
        align: 'right',
        layout: 'vertical',
        verticalAlign: 'middle',
        itemMarginTop: 5,
        itemMarginBottom: 5
    },
    series: [{
        name:'Sales',
        innerSize: '60%',
        showInLegend:true,
        dataLabels: {
            enabled: false
        }
    }],
    credits: {
        enabled: false
    }
};
export default SalesChart;