import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const CheckOut = () => {
    const { _id,title,price } = useLoaderData();
    const { user } = useContext(AuthContext);
    
    const handlePlaceOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregister';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message    
        }
        // if (phone.length > 10) {
        //     alert('Phone number should be 10 or more')
        // }
        //order
        fetch('http://localhost:5000/orders',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
        }
        
            },
            body:JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Order place')
                    form.reset();
                }
                console.log(data)
            })
        .catch(er=>console.error(er))
      
    }

    return (
        <div>
            <form onSubmit={handlePlaceOrder} >
                <h2 className="tex
                t-4xl">You are about to order:{title}</h2>
                <h4 className="text-3xl"> Price{price}</h4>
                <div className='grid grid-cols-2 gap-4'>
                <input type="text" name='firstName' placeholder="Type here" className="input input-bordered w-full " />
                    <input type="text" name='lastName' placeholder="Type here" className="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" name='phone' className="input input-bordered w-full " />
                    <input type="text" placeholder="Type here"name='email'  defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                </div>
                <textarea className="textarea textarea-bordered w-full my-4"name='message'  placeholder="Your Message"></textarea>
                <input type="submit" className='btn' value='Place your order' />
            </form>
        </div>
    );
};

export default CheckOut;