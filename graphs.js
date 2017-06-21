('use strict');
Chart.defaults.global.defaultFontFamily = 'Palanquin Dark';
Chart.defaults.global.defaultFontSize = 20;
var productVotes = new Chart(document.getElementById('productVotes').getContext('2d'), {
  type: 'horizontalBar',
  data:{
    labels:['boots', 'chair', 'scissors', 'waterCan', 'wineGlass'],
    datasets: [{
      backgroundColor: '#E2231A',
      label: 'Votes',
      data:[5, 7, 4, 7, 8],
    }],
    options:{
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }
  }
});
