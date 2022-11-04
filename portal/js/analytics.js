$(function() {
    /* ChartJS
     * -------
     * Data and config for chartjs
     */
    'use strict';
    
    
    var data2 = {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [{
        label: '# of Votes',
        data: [10, 19, 3, 5, 2, 3, 20],
        backgroundColor:'#91A4F6',
        barRoundness: 20,
        fill: true
      }]
    };
    
    var options = {
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            display:false
          }          
        }],
        xAxes: [{
          maxBarThickness: 10,
          gridLines: {
            display:false
          }
        }],
      },
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        }
      },
      fill: true,
    };
    if ($("#lineChart").length) {
        var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
        
        const gradientBg =  lineChartCanvas.createLinearGradient(0,0,0,200);
        gradientBg.addColorStop(0,'#4162EF');
        gradientBg.addColorStop(0.3,'#7F95F4AC');
        gradientBg.addColorStop(1,'#FFFFFF00');

        var data = {
          labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: [{
            label: '# of Votes',
            data: [35, 28, 45, 15, 20, 43, 20, 12, 32, 15, 32, 40],
            backgroundColor: gradientBg,
            borderWidth: 3,
            borderColor: '#4162EF',
            pointStyle: 'circle',
          }]
        };

        var lineChart = new Chart(lineChartCanvas, {
          type: 'line',
          data: data,
          options: {
            responsive: true,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                },
                gridLines: {
                  display:false
                }          
              }],
              xAxes: [{
                maxBarThickness: 10,
                gridLines: {
                  display:false
                }
              }],
            },
            legend: {
              display: false
            },
            elements: {
              point: {
                radius: 0
              }
            },
            fill: true,
        
          }
        });
    }
    
    if ($("#barChart").length) {
      var barChartCanvas = $("#barChart").get(0).getContext("2d");
      var barChart = new Chart(barChartCanvas, {
        type: 'bar',
        data: data2,
        options: {
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display:false
              },
              display: false,    
            }],
            xAxes: [{
              maxBarThickness: 10,
              gridLines: {
                display:false
              }
            }],
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          },
          fill: true,
      
        }
      });
  }
});
