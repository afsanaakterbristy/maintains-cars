import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
        .then(data=>setServices(data))
        
    },[])

    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className='text-5xl font-semibold'>Our services Area</h2>
                <p>Dolor sit amet consectetur adipisicing elit. Enim, nemo quibusdam ipsam quod in maiores natus non. Minima maxime impedit ipsa temporibus, culpa veritatis alias blanditiis officia minus iure esse!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 py-5'>
                {
                  services.map(service=><ServicesCard service={service}></ServicesCard>) 
                }
                
            </div>
            
        </div>
    );
};

export default Services;