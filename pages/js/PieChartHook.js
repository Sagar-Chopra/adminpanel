import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js/auto";

const usePieChart = () => {
  const pieChartRef = useRef(null);

  useEffect(() => {
    const loadPieChart = async () => {
      if (typeof window !== "undefined") {
        Chart.defaults.defaultFontFamily =
          '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
        Chart.defaults.defaultFontColor = "#292b2c";

        const ctx = pieChartRef.current.getContext("2d");

        new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["Blue", "Red", "Yellow", "Green"],
            datasets: [
              {
                data: [12.21, 15.58, 11.25, 8.32],
                backgroundColor: ["#007bff", "#dc3545", "#ffc107", "#28a745"],
              },
            ],
          },
        });
      }
    };

    loadPieChart();
  }, []);

  return pieChartRef;
};

export default usePieChart;
