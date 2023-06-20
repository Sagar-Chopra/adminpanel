import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js/auto";

const useBarChart = () => {
  const barChartRef = useRef(null);

  useEffect(() => {
    const loadBarChart = async () => {
      if (typeof window !== "undefined") {
        Chart.defaults.defaultFontFamily =
          '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
        Chart.defaults.defaultFontColor = "#292b2c";

        const ctx = barChartRef.current.getContext("2d");

        new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                label: "Revenue",
                backgroundColor: "rgba(2,117,216,1)",
                borderColor: "rgba(2,117,216,1)",
                data: [4215, 5312, 6251, 7841, 9821, 14984],
              },
            ],
          },
          options: {
            scales: {
              xAxes: [
                {
                  time: {
                    unit: "month",
                  },
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    maxTicksLimit: 6,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    min: 0,
                    max: 15000,
                    maxTicksLimit: 5,
                  },
                  gridLines: {
                    display: true,
                  },
                },
              ],
            },
            legend: {
              display: false,
            },
          },
        });
      }
    };

    loadBarChart();
  }, []);

  return barChartRef;
};

export default useBarChart;
