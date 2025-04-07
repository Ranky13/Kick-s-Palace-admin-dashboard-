import React from 'react'
import './TopProductsPerformance.css'
import { Chart, registerables } from 'chart.js';
import { useEffect, useRef } from 'react';


Chart.register(...registerables);
const TopProductsPerformance = () => {
    const PerformanceChartRef = useRef(null);
    const PerformanceChartInstance = useRef(null); 

    useEffect(() => {
            if (PerformanceChartRef.current) {
                const ctx = PerformanceChartRef.current.getContext('2d');
                
                // Destroy previous chart if it exists
                if (PerformanceChartInstance.current) {
                    PerformanceChartInstance.current.destroy();
                }
                
                
                PerformanceChartInstance.current = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Nike', 'Puma', 'New Balance', 'Reebok', 'Louis Vulton', 'Boots'],
                        datasets: [
                            {
                                lable: 'Sales',
                                data: [5000, 8000, 6000, 9000, 10000, 10000],
                                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                                borderColor: 'rgba(52, 152, 219, 1)',
                                borderWidth: 2,
                                tension: 0.4,
                                fill: true
                            },
                            {
                                lable: 'Revenue',
                                data: [4000, 6000, 8000, 3000, 12000, 8000],
                                backgroundColor: 'rgb(25, 168, 6)',
                                borderColor: 'rgb(9, 114, 5)',
                                borderWidth: 2,
                                tension: 0.4,
                                fill: true
                            },
                            {
                                lable: 'Profits',
                                data: [5000, 5000, 6500, 9500, 2000, 10000],
                                backgroundColor: 'rgb(29, 219, 203)',
                                borderColor: 'rgb(71, 226, 200)',
                                borderWidth: 2,
                                tension: 0.4,
                                fill: true
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true, 
                        plugins: {
                            legend: { position: 'top' }
                        }
                    }
                });
            }  
            
            // Cleanup function to destroy chart when component unmounts
        return () => {
            if (PerformanceChartInstance.current) {
                PerformanceChartInstance.current.destroy();
                PerformanceChartInstance.current = null;
            }
        };
            
        }, []);   
    
  return (
    <div className='ProductsPerformance'>
        <h2>Revenue vs Target</h2>
        <canvas ref={PerformanceChartRef} />
    </div>
  )
}

export default TopProductsPerformance
