window.AppChart = function(_labels, _data) {

    this.config = {
        type: 'line',
        data: {
            labels: _labels,
            datasets: [{
                backgroundColor: '#666',
                borderColor: '#000',
                data: _data,
                fill: false
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            legend: {
                display: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true
                }],
                yAxes: [{
                    display: true,
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: (value) => `$${value}`
                    }
                }]
            }
        }
    };
}

AppChart.prototype.update = function(_labels, _data) {
    // this.chartInstance.config.data.labels = _labels;
    // this.chartInstance.config.data.datasets.data = _data;
    // this.chartInstance.update();
}

AppChart.prototype.init = function(el, _labels, _data) {
    this.config.data.labels = _labels;
    this.config.data.datasets[0].data = _data;

    var ctx = el.getContext('2d');
    this.chartInstance = new Chart(ctx, this.config);
}
