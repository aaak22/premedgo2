$(function() {
    /* ChartJS
     * -------
     * Data and config for chartjs
     */
    'use strict';
    var data = {
      labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [{
        label: '# of Votes',
        data: [10, 19, 3, 5, 2, 3, 20, 12, 32, 15, 25, 30],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255,99,132,1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        fill: true
      }]
    };
    
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
      }
  
    };
    if ($("#lineChart").length) {
        var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
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
