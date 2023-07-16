import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const ChartComponent = ({ currencyData, selectedCurrency }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        let chartInstance = null;

        if (currencyData && chartRef.current) {
            const chartCanvas = chartRef.current.getContext("2d");

            if (chartInstance) {
                chartInstance.destroy();
            }

            chartInstance = new Chart(chartCanvas, {
                type: "line",
                data: {
                    labels: currencyData.map(data => data.date),
                    datasets: [
                        {
                            label: selectedCurrency,
                            data: currencyData.map(data => data.rate),
                            backgroundColor: "rgba(46, 71, 101, 0.3)",
                            borderColor: "rgba(46, 71, 101, 1)",
                            borderWidth: 2,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                font: {
                                    size: 16,
                                },
                            },
                        },
                        x: {
                            ticks: {
                                font: {
                                    size: 16,
                                },
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    size: 16,
                                },
                            },
                        },
                    },
                },
            });
        }

        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [currencyData, selectedCurrency]);

    return <canvas className={"chart"} ref={chartRef} />;
};


export default ChartComponent;
