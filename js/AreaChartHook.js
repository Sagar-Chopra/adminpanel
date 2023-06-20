import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js/auto";

const useChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    
    const handleResize = (chart) => {
      chart.resize();
    };

    const loadChart = async () => {
      if (typeof window !== "undefined") {
        Chart.defaults.font.family =
          '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
        Chart.defaults.font.color = "#292b2c";

        const ctx = chartRef.current.getContext("2d");

        new Chart(ctx, {
          type: "line",
          data: {
            labels: [
              "Mar 1",
              "Mar 2",
              "Mar 3",
              "Mar 4",
              "Mar 5",
              "Mar 6",
              "Mar 7",
              "Mar 8",
              "Mar 9",
              "Mar 10",
              "Mar 11",
              "Mar 12",
              "Mar 13",
            ],
            datasets: [
              {
                label: "Sessions",
                tension: 0.3,
                backgroundColor: "rgba(2,117,216,0.2)",
                borderColor: "rgba(2,117,216,1)",
                pointRadius: 5,
                pointBackgroundColor: "rgba(2,117,216,1)",
                pointBorderColor: "rgba(255,255,255,0.8)",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(2,117,216,1)",
                pointHitRadius: 50,
                pointBorderWidth: 2,
                data: [
                  10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849,
                  24159, 32651, 31984, 38451,
                ],
                fill: "start",
              },
            ],
          },
          options: {
            responsive: true,
            onResize: handleResize,
            maintainAspectRatio: true,
            scales: {
              x: {
                time: {
                  unit: "date",
                },
                grid: {
                  display: false,
                },
                ticks: {
                  maxTicksLimit: 7,
                },
              },
              y: {
                ticks: {
                  min: 0,
                  max: 40000,
                  maxTicksLimit: 5,
                },
                grid: {
                  color: "rgba(0, 0, 0, .125)",
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });
      }
    };

    loadChart();
  }, []);

  return chartRef;
};

export default useChart;
