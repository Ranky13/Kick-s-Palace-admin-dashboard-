import React from 'react'
import './ChannelPerformance.css'
import { Chart, registerables } from 'chart.js';
import { useEffect, useRef } from 'react';


Chart.register(...registerables);


const ChannelPerformance = () => {

 const ChannelchartRef = useRef(null);
     const ChannelchartInstance = useRef(null); 
 
     useEffect(() => {
         if (ChannelchartRef.current) {
             const ctx = ChannelchartRef.current.getContext('2d');
             
             // Destroy previous chart if it exists
             if (ChannelchartInstance.current) {
                 ChannelchartInstance.current.destroy();
             }
             
             
             ChannelchartInstance.current = new Chart(ctx, {
                 type: 'pie',
                 data: {
                     labels: ['Paid Ads', 'Organic Ads', 'Social Medias', 'Direct', 'Referrals', 'Emails'],
                     datasets: [{
                         label: 'Channel Performance', 
                         data: [77, 67, 45, 54, 42, 15 ],
                         backgroundColor: [
                             '#61db61',
                             '#3cff00',
                             '#31f35b',
                             '#0bf003',
                             '#10af10',
                             '#8fe7a9'    
                         ],
                         borderColor: [
                             '#208502',

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
             if (ChannelchartInstance.current) {
                 ChannelchartInstance.current.destroy();
                 ChannelchartInstance.current = null;
             }
         };
     }, []); 
  
  return (
    <div className='Customers-Performance'>
      <h2>Customers Performance</h2>
      <canvas ref={ChannelchartRef} />
    </div>
  )
}

export default ChannelPerformance
