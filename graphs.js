('use strict');
Chart.defaults.global.defaultFontFamily = 'Palanquin Dark';
Chart.defaults.global.defaultFontSize = 15;

function chartBuild(){
  var votedGraph = productArray.map(function(item) {
    return item.vote;
  });
  var totalGraph = productArray.map(function(item) {
    return item.shown;
  });
  var namesGraph = productArray.map(function(item) {
    return item.name;
  });
  var productVotes = new Chart(document.getElementById('productVotes').getContext('2d'), {
    type: 'horizontalBar',
    data: {
      labels: namesGraph,
      datasets: [{
        label: 'Number of Votes',
        data: votedGraph,
        backgroundColor: '#E2231A',
      },
      {
        label: 'Number of Times Shown',
        data: totalGraph,
        backgroundColor: '#87CEEB',
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
}
