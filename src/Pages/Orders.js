import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import OrdersRow from './OrdersRow';

const Orders = () => {
    const { user,logOut } = useContext(AuthContext);
    
    const[orders,setOrders]=useState([])


    useEffect(() => {
        if(!user?.email)return
      fetch(`http://localhost:5000/orders?email=${user?.email}`, {
        headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
        }
        })
        .then(res => {
          if (res.status === 401 || res.status === 403) {
            return logOut();
          }
         return res.json()
        })
        .then(data => {
          console.log(data)
          setOrders(data)
        })
    },[user?.email,logOut])

   const handleDelete = id => {
    const proceed = window.confirm('Ate you sure');
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: 'DELETE',
        headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
        }
        
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('deleted Successfully');
            const remaining = orders.filter(odr => odr._id !== id);
            setOrders(remaining)

          }
      })
    }
  }

  const handleUpdate = id => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
        }
       
      },
      body: JSON.stringify({ status: 'approved' })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter(odr => odr._id !== id);
          const approving = orders.find(odr => odr._id === id);
          approving.status = 'Approved';
          const newOrders=[approving,...remaining]
            setOrders(newOrders)

        }
      })
  }

    return (
        <div>
            <h2 className="text-5xl">{orders.length}</h2>
            
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
 
    <tbody>
 
     {
                orders.map(order => <OrdersRow order={order} handleDelete={handleDelete} handleUpdate={ handleUpdate }></OrdersRow>)                     
     }
    </tbody>
 
    
    
  </table>
            </div>
        </div>
    );
};

export default Orders;