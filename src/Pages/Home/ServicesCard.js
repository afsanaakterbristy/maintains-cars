import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const {_id, img, price, title } = service;
    return (
        <>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
                <h2 className="card-title">{ title }</h2>
                <p>Price:${price}</p>
                    <Link to={`/checkout/${_id}`}>
                       <div className="card-actions justify-end mb-4">
            <button className="btn btn-primary">Buy Now</button>
            </div>
                    </Link>
            </div>
          
    </div>
         
            </>
    );
};

export default ServicesCard;