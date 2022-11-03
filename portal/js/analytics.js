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
        backgroundColor: [
          '#91A4F6',
          '#91A4F6',
          '#91A4F6',
          '#91A4F6',
          '#91A4F6',
          '#91A4F6',
          '#91A4F6',
        ],
        borderColor: [
          '#91A4F6',
          '#91A4F6',
          '#91A4F6',
          '#91A4F6',
          '#91A4F6',
          '#91A4F6',
          '#91A4F6',
        ],
        borderWidth: 1,
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
          
        }],
        x: {
          maxBarThickness: 10
        },
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

        
        const gradientBg =  lineChartCanvas.createLinearGradient(0,0,0,400);
        gradientBg.addColorStop(0,'#4162EF');
        gradientBg.addColorStop(0.5,'#7F95F4AC');
        gradientBg.addColorStop(1,'#FFFFFF00');

        var data = {
          labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: [{
            label: '# of Votes',
            data: [10, 19, 3, 5, 2, 3, 20, 12, 32, 15, 25, 30],
            backgroundColor: gradientBg,
            borderWidth: 3,
            borderColor: '#4162EF',
            pointStyle: 'circle',
          }]
        };



        var lineChart = new Chart(lineChartCanvas, {
          type: 'line',
          data: data,
          options: options
        });
    }
    
    if ($("#barChart").length) {
      var barChartCanvas = $("#barChart").get(0).getContext("2d");
      var barChart = new Chart(barChartCanvas, {
        type: 'bar',
        data: data2,
        options: options
      });
  }
});
