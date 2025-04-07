import React from 'react';
import { Chart, registerables } from 'chart.js';
import { useEffect, useRef } from 'react';

Chart.register(...registerables);

const RevenueChart = () => {

     const RevenueChartRef = useRef(null);
      const RevenueChartInstance = useRef(null); 
  
      useEffect(() => {
          if (RevenueChartRef.current) {
              const ctx = RevenueChartRef.current.getContext('2d');
              
              // Destroy previous chart if it exists
              if (RevenueChartInstance.current) {
                RevenueChartInstance.current.destroy();
              }

              RevenueChartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                  {
                    label: 'Actual Revenue',
                    data: [12500, 14000, 16800, 18200, 19500, 21300, 22700, 24500, 26300, 28400, 30200, 32500],
                    borderColor: '#4BC0C0',
                    backgroundColor: 'rgba(75, 192, 192, 0.1)',
                    borderWidth: 3,
                    tension: 0.3,
                    fill: true
                  },
                  {
                    label: 'Target Sales',
                    data: [15000, 15500, 16500, 18000, 19500, 21000, 22500, 24000, 25500, 27000, 28500, 30000],
                    borderColor: '#FF6384',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    tension: 0.1
                  }
                ]
              },

              options: {
              responsive: true,
              maintainAspectRatio: true, 
              plugins: {
                legend: { position: 'top' }
              },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    callback: (value) => `$${value.toLocaleString()}`
                  }
                }
              }
            }
          });
        }


  
 // Cleanup  function to destroy chart when component unmounts
 return () => {
  if (RevenueChartInstance.current) {
      RevenueChartInstance.current.destroy();
      RevenueChartInstance.current = null;
  }
};
}, []); 


return (
  <div className='RevenueCharts'>
    <div className="revenue">
      <h2>Revenue vs Target</h2>
      <canvas ref={RevenueChartRef} />
    </div>
    
  </div>
);
}
export default RevenueChart;