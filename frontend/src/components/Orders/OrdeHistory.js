import React, { useEffect, useState } from 'react';
import api from '../../api';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await api.get('/orders');
            setOrders(response.data);
        };
        fetchOrders();
    }, []);

    return (
        <div>
            <h2>Your Orders</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order._id}>
                        Order #{order._id} - Total: ${order.total} - Status: {order.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderHistory;
