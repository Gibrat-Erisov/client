import React from 'react';
import ReactApexChart from 'react-apexcharts'

class LineChart extends React.Component {
    
    constructor(props) {
      super(props);

      this.state = {
        options: {
          chart: {
            shadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 7,
              blur: 10,
              opacity: 1
            },
            toolbar: {
              show: true
            }
          },
          colors: ['#77B6EA', '#545454'],
          dataLabels: {
            enabled: true,
          },
          stroke: {
            curve: 'smooth'
          },
          
          grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          markers: {
            size: 6
          },
          xaxis: {
            type: 'datetime'
          },
        
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
          }
        },
        series: [
            {
                name: "Session Duration",
                data: this.generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 185, {
                  min: 30,
                  max: 90
                })
            },
            {
                name: "Page Views",
                data: this.generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 185, {
                  min: 30,
                  max: 90
                })
            }
        ]
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
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="350" />
          </div>
  

      );
    }
  }
  
  export default LineChart