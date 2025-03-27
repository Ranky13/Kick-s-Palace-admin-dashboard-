import React from 'react';
import { Chart, registerables } from 'chart.js';
import { useEffect, useRef } from 'react';
import './CustomersStatistics.css';


Chart.register(...registerables);

const CustomersStatistics = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null); // Store chart instance reference

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            
            // Destroy previous chart if it exists
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            
            // Create new chart and store the instance
            chartInstance.current = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Active', 'Inactive', 'Pending'],
                    datasets: [{
                        label: 'Customer Statistics', 
                        data: [300, 50, 100],
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 206, 85, 0.2)'    
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(255, 206, 85, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: { 
                    responsive: true, 
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: 'Customers Statistics'
                        }
                    }
                }
            });
        }

        // Cleanup function to destroy chart when component unmounts
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
                chartInstance.current = null;
            }
        };
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div className='Customers-statistics'>
            <h2>Customers Statistics</h2>
            <canvas ref={chartRef} />
            <ul>
                <li>
                    <span className='active'>Active: 300</span>
                </li>
                <li>
                    <span className="inactive">Inactive: 50</span>
                </li>
                <li>
                    <span className="pending">Pending: 100</span>
                </li>
            </ul>
        </div>
    );
}

export default CustomersStatistics;