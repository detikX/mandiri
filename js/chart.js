const labels = ["2021", "2022"];

const data = {
    labels: labels,
    datasets: [
        {
            label: "Pertumbuhan DPK",
            backgroundColor: "#28B7FC",

            // backgroundColor: [
            //   "rgb(255, 99, 132)",
            //   "rgb(54, 162, 235)",
            //   "rgb(255, 205, 86)",
            //   "rgb(255, 99, 132)",
            //   "rgb(54, 162, 235)",
            //   "rgb(255, 205, 86)",
            // ],
            borderColor: "royalblue",
            color: "black",
            data: [1291, 77],
        },
        {
            label: "Rasio DPK",
            backgroundColor: "#ccc",

            // backgroundColor: [
            //   "rgb(255, 99, 132)",
            //   "rgb(54, 162, 235)",
            //   "rgb(255, 205, 86)",
            //   "rgb(255, 99, 132)",
            //   "rgb(54, 162, 235)",
            //   "rgb(255, 205, 86)",
            // ],
            borderColor: "royalblue",
            color: "white",
            data: [1490, 85],
        }
    ],
};

const config = {
    type: "bar",
    data: data,
    options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "UMP Era Anies Baswedan",
                color: "black",
                font: {
                    family: "'Montserrat'", // Your font family
                    size: 20,
                    weight: "bold",
                },

                padding: {
                    top: 10,
                    bottom: 30,
                },
            },
            legend: {
                position: "bottom",
                labels: {
                    font: {
                        family: "'Montserrat'",
                    },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    color: "black",
                    text: "Tahun",
                    font: {
                        family: "'Montserrat'", // Your font family
                        size: 14,
                        weight: "bold",
                    },
                },
                ticks: {
                    color: "black",
                    font: {
                        family: "'Montserrat'", // Your font family
                        size: 14,
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    color: "black",
                    text: "Gaji",
                    font: {
                        family: "'Montserrat'", // Your font family
                        size: 14,
                        weight: "bold",
                    },
                    padding: 20,
                },
                ticks: {
                    color: "black",
                    font: {
                        family: "'Montserrat'", // Your font family
                        size: 14,
                    },
                },
            },
        },
        animations: {
            backgroundColor: {
                duration: 2500,
                easing: "linear",
                to: "blue",
                from: "#28B7FC",
                type: "color",
                loop: true,
            },
        },
    },
};
const myChart = new Chart(document.getElementById("myChart"), config);
