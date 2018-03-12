import React from 'react';
import Box from '../ui/atoms/Box';
import '../ui/statistic/Statistics.css'
import BlueChartPng from '../assets/img/blue-chart.png';
import PinkChartPng from '../assets/img/pink-chart.png';
import Select from '../ui/atoms/Select';

import CircularProgress from 'material-ui/CircularProgress';


import ReactHighcharts from 'react-highcharts';
import GradientSplineChart from "../config/gradientSplineChart.config";

let chart = true ;

class Statistics extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
        }
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
                    loading: false
                });
                let reportsChart = this.refs.reportsChart.getChart();
                reportsChart.series[0].setData(this.state.charts.reportsChart.lastYear,true);
                reportsChart.setSize((document.getElementsByClassName("main")[0].clientWidth / 2),null);
                console.log(this.state.charts.salesChart)
            });
    }
    componentDidUpdate() {
        let setWidthChart = (a , call) => {
            let reportsChart = this.refs.reportsChart.getChart();
            chart = false;
            reportsChart.setSize((document.getElementsByClassName(a)[0].clientWidth / 2) - 30,null);
            call()
        };
        if (chart) {
            setTimeout(()=>{
                setWidthChart("main",()=> {
                    chart = true
                })
            },200);
        }

    }

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
    chartTitleCount = () => {
        let a = 0;
        for (let i = 0; i < this.state.charts.salesChart.lastYear.length; i++) {
            a+= this.state.charts.salesChart.lastYear[i][1];
        }
        return a
    };
    render() {
        const selects = ["Last Year", "Last Month", "Last Week"];
        if (this.state.loading) {
        return(
            <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center', height: '100vh'}}>
                <CircularProgress size={60} thickness={7} />
            </div>
        )
        } else {
            return(
                <div className="section-statistics">
                    <header style={{display:'flex', justifyContent:'space-between', marginBottom: 20}}>
                        <h2>Lorem Ipsum Stats</h2>
                        <Select data={selects} onChangeSelect={this.filterReportsChart}/>
                    </header>
                    <div className="box-wrap">
                        <Box>
                            <div className="sales-number" style={{borderBottom:'1px solid #d4d9e3'}}>
                                <p>{this.chartTitleCount()} <span>Sales</span></p>
                                <div className="wrap-img">
                                    <img src={BlueChartPng} alt="BlueChartPng"/>
                                </div>
                            </div>
                            <div className="sales-number">
                                <p>1560 <span>Views</span></p>
                                <div className="wrap-img">
                                    <img src={PinkChartPng} alt="PinkChartPng"/>
                                </div>
                            </div>
                        </Box>
                        <Box>
                            <div className="padding">
                                <ReactHighcharts config={ GradientSplineChart } ref='reportsChart'/>
                            </div>
                        </Box>
                    </div>
                </div>
            )
        }
    }
}
export default Statistics