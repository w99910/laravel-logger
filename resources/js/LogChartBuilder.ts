import Chart from "chart.js/auto"

export default class LogChartBuilder {
    protected canvas: HTMLCanvasElement;
    protected chart;

    constructor(dom: HTMLElement) {
        const height = 400;
        const chartContainer = document.createElement('div');
        dom.appendChild(chartContainer)
        chartContainer.style.width = `80%`;
        chartContainer.style.height = `${height}px`;
        chartContainer.style.marginBottom = `40px`;
        this.canvas = document.createElement('canvas');
        chartContainer.appendChild(this.canvas);
        this.canvas.style.width = `100%`;
        this.canvas.style.height = `100%`;
    }

    formatData(data: Array<any>) {
        const infoLogData = [];
        const errorLogData = [];
        for (let datum of data) {
            let date = (new Date(datum.date)).toLocaleString();
            if (datum.statusCode && datum.statusCode >= 200 && datum.statusCode < 300) {
                let entries = infoLogData.filter((entry) => entry.index === date);
                // @ts-ignore
                entries.length > 0 ? entries[0].y += 1 : infoLogData.push({
                    x: new Date(datum.date),
                    index: date,
                    y: 1
                });
            } else {
                let entries = errorLogData.filter((entry) => entry.index === date);
                // @ts-ignore
                entries.length > 0 ? entries[0].y += 1 : errorLogData.push({
                    x: new Date(datum.date),
                    index: date,
                    y: 1
                });
            }
        }
        return {
            datasets: [
                {
                    label: 'Info',
                    data: infoLogData,
                    yAxisID: 'y',
                },
                {
                    label: 'Error',
                    data: errorLogData,
                    yAxisID: 'y1',
                }
            ]
        }
        // define properties

    }

    build(data) {
        const formattedData = this.formatData(data);
        console.log(formattedData)
        this.chart = new Chart(this.canvas, {
            type: 'line',
            data: formattedData,
            options: {
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                stacked: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Log Chart'
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            // Luxon format string
                            // tooltipFormat: 'DD T'
                        },
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    },
                    y: {
                        display: true,
                        position: 'left',
                        beginAtZero: true,
                    },
                    y1: {
                        display: true,
                        position: 'right',
                        beginAtZero: true,

                        // grid line settings
                        grid: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                    },
                }
            },
        });
    }

    update(data) {
        this.chart.data = this.formatData(data);
        this.chart.update();
    }
}
