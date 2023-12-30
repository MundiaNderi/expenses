// Fetch the data
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const days = data.map(item => item.day);
    const amounts = data.map(item => item.amount);

    // Create the chart
    const ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: days,
        datasets: [{
          data: amounts,
          backgroundColor: 'hsla(10, 79%, 64%, 1)',
          hoverBackgroundColor: 'hsla(186, 49%, 80%, 1)',
          borderRadius: 5,
          id: 'my-red-bars'
        }]
      },
      options: {
        scales: {
          y: {
            display: false 
          },
          x: {
            grid: {
              display: false // Hide x-axis grid lines
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'hsla(25, 47%, 15%, 1)',
            titleFont: {
              size: 18,
            },
        },
      },
    }
    });
  })
  .catch(error => console.log('Error fetching data:', error));


