import React from 'react';
import ReactApexChart from 'react-apexcharts'

class BarChart extends React.Component {
      
    constructor(props) {
      super(props);

      this.state = {
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'	
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            type: 'datetime'
          },
          
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return " " + val + ""
              }
            }
          }
        },
        series: [{
            name: "Session Duration",
            data: this.generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 10, {
              min: 30,
              max: 90
            })
        },
        {
            name: "Page Views",
            data: this.generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 10, {
              min: 30,
              max: 90
            })
        }],
      }
    }

    generateDayWiseTimeSeries (baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
          var x = baseval;
          var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  
          series.push([x, y]);
          baseval += 86400000;
          i++;
        }
  
        return series;
      }

    render() {
      return (
        

        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="350" />
        </div>


      );
    }
  }

  
export default BarChart