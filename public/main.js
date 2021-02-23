// Form submit event
const form = document.getElementById("score-form");
form.addEventListener('submit', (e) => {
    const choice = document.querySelector('input[name=as]:checked').value;

    const data = {as: choice};

    fetch('http://localhost:5000/poll', {
        method: 'post',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
    

    e.preventDefault();
})


let dataPoints = [
    {label: 'Adegbite', y: 0},
    {label: 'Fuad', y: 0},
    {label: 'Idris', y: 0},
    {label: 'Michael', y: 0},
    {label: 'Mohammed', y: 0},
    {label: 'Oladeji', y: 0}
];

const chartContainer = document.querySelector('#chartContainer');

if(chartContainer) {
    const chart = new CanvasJS.Chart('chartContainer', {
        animationEnabled: true,
        theme: 'theme1',
        title: {
            text: 'Assessment results'
        },
        data: [
            {
                type: 'column',
                dataPoints: dataPoints
            }
        ]
    });

    chart.render();

    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('a29727e57463a5749bcf', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('as-grid');
    channel.bind('as-score', function(data) {
      dataPoints = dataPoints.map(x => {
          if(x.label == data.as) {
              x.y += data.points;
              return x;
          } else {
              return x;
          }
      });
      chart.render();
    });
}

