import React from 'react';
import { Chart, registerables } from 'chart.js';
import { useEffect, useRef } from 'react';
import './CustomersStatistics.css';
import { data } from 'react-router-dom';


Chart.register(...registerables);

const CustomersStatistics = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null); 

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            
            // Destroy previous chart if it exists
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            
            
            chartInstance.current = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Active', 'Inactive', 'Passive'],
                    datasets: [{
                        label: 'Customer Statistics', 
                        data: [300, 50, 100],
                        backgroundColor: [
                            '#3ad83a',
                            '#a6e5a6',
                            '#9aec9a'    
                        ],
                        borderColor: [
                            'rgb(16, 109, 16)',
                            'rgb(156, 218, 156)',
                            'rgb(131, 226, 75)',
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
    }, []); 

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
                    <span className="pending">Passive: 100</span>
                </li>
            </ul>
        </div>
    );
}

export default CustomersStatistics;