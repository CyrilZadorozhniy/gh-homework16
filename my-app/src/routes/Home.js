import React from 'react';
import Box from '../ui/atoms/Box';
import Select from '../ui/atoms/Select';
import './../ui/home/Home.css'

import CircularProgress from 'material-ui/CircularProgress';

import ReactHighcharts from 'react-highcharts';
import SelectChart from '../config/pieChart.config';
import SplineChart from '../config/splineChart.config'

const styles = {
  boxHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
  }
};

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }
    componentWillMount() {
        let data = {
            token: JSON.parse(localStorage.getItem("token"))
        };
        fetch('/api/user/charts',{
            headers: {
                'Content-type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json()
            })
            .then(res => {
                this.setState({
                    charts: res.charts,
                    loading: false,
                });
                let salesChart = this.refs.salesChart.getChart(),
                    reportsChart = this.refs.reportsChart.getChart();

                salesChart.setTitle({text: this.chartTitleCount("lastYear")});
                salesChart.series[0].setData(this.state.charts.salesChart.lastYear,true);
                reportsChart.series[0].setData(this.state.charts.reportsChart.lastYear,true);
            });
    }

    chartTitleCount = (e) => {
        let a = 0;
        for (let i = 0; i < this.state.charts.salesChart[e].length; i++) {
            a+= this.state.charts.salesChart[e][i][1];
        }
        return a
    };
    filterSalesChart = (e) => {
        let chart = this.refs.salesChart.getChart();
        // console.log(e);
        // console.log('start');
        // console.log(chart.series[0].data);
        switch(e) {
            case 'Last Year' :
                chart.series[0].setData(this.state.charts.salesChart.lastYear,true);
                chart.setTitle({text: this.chartTitleCount("lastYear")});
                // console.log('Year');
                // console.log(chart.series[0].data);
                // console.log('Year');
                break;
            case 'Last Month' :
                chart.series[0].setData(this.state.charts.salesChart.lastMonth,true);
                chart.setTitle({text: this.chartTitleCount("lastMonth")});
                // console.log('Month');
                // console.log(chart.series[0].data);
                // console.log('Month');
                break;
            case 'Last Week' :
                chart.series[0].setData(this.state.charts.salesChart.lastWeek,true);
                chart.setTitle({text: this.chartTitleCount("lastWeek")});
                // console.log('Week');
                // console.log(chart.series[0].data);
                // console.log('Week');
                break;
        }
        // console.log(chart.series[0].data);
        // console.log('end');
    };
    filterReportsChart = (e) => {
        let chart = this.refs.reportsChart.getChart();
        switch(e) {
            case 'Last Year' :
                chart.series[0].setData(this.state.charts.reportsChart.lastYear,true);
                break;
            case 'Last Month' :
                chart.series[0].setData(this.state.charts.reportsChart.lastMonth,true);
                break;
            case 'Last Week' :
                chart.series[0].setData(this.state.charts.reportsChart.lastWeek,true);
                break;
        }
    };
    componentDidUpdate() {
        const mainWidth = document.getElementsByClassName("main")[0].clientWidth ,
              leftbarWidth = document.getElementsByClassName('leftbar')[0].clientWidth;


            let salesChart = this.refs.salesChart.getChart(),
                reportsChart = this.refs.reportsChart.getChart();
            if (this.props.leftBarToggle) {
                salesChart.setSize((mainWidth /3) - leftbarWidth / 5 ,null);
                reportsChart.setSize((mainWidth /1.97) - leftbarWidth / 4,null);
                console.log('open')
            } else {
                salesChart.setSize((mainWidth /3) + leftbarWidth / 3,null);
                reportsChart.setSize((mainWidth /1.97 ) + leftbarWidth / 1.97,null);
                console.log('close')

                    };
    }
    render() {

        const userName = JSON.parse(localStorage.getItem("username"));
        const selects = ["Last Year", "Last Month", "Last Week"];
            if (this.state.loading) {
                return (
                    <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center', height: '100vh'}}>
                        <CircularProgress size={60} thickness={7} />
                    </div>
                )
            } else {
                return (
                    <div className="section-home">
                        <h2>Hello {userName}!</h2>
                        <Box>
                            <header style={styles.boxHeader}>
                                <h3>Your Sales</h3>
                                <Select data={selects} onChangeSelect={this.filterSalesChart}/>
                            </header>
                            <ReactHighcharts config={ SelectChart }  ref='salesChart'/>
                        </Box>
                        <Box>
                            <header style={styles.boxHeader}>
                                <h3>Report</h3>
                                <Select data={selects} onChangeSelect={this.filterReportsChart}/>
                            </header>
                            <ReactHighcharts config={ SplineChart } ref='reportsChart'/>
                        </Box>
                    </div>
                )
            }

    }
}
export default Home