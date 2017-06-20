('use strict');

var productVotes = new Chart(document.getElementById('productVotes').getContext('2d'), {
  type: 'bar',
  data:{
    labels:['boots', 'chair', 'scissors', 'waterCan', 'wineGlass'],
    datasets: [{
      backgroundColor: ['#8e5ea2', '#8e5ea2','#8e5ea2','#8e5ea2','#8e5ea2'],
      label: 'Votes',
      data:[5, 7, 4, 7, 8],
    }]
  }
});
