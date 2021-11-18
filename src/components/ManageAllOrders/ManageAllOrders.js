import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import './ManageAllOrders.css';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    const [status, setStatus] = useState("");

    const [control, setControl] = useState(false);

    const handleStatus = (e) => {
        setStatus(e.target.value);
    };
    console.log(status);
    useEffect(() => {
        fetch("http://localhost:5000/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [status,control]);

   
    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        // console.log(id);
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                }
            });
        alert('Are you sure you want to delete this item?')
        console.log(id);
    };

    return (
        <div className="table">
            <h1>All orders {orders.length}</h1>

            <Table responsive='sm' striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service Title</th>
                        <th>Event description</th>
                        <th>Image Link</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.name}</td>
                            <td>{pd.description}</td>
                            <td>{pd.image}</td>
                            <td>
                                <input
                                    onChange={handleStatus}
                                    type="text"
                                    defaultValue={pd.status}
                                />
                            </td>
                            <button 
                                onClick={() => handleDelete(pd?._id)}
                            className="btn bg-danger p-2">Delete</button>
                            <button
                                onClick={() => handleUpdate(pd._id)}
                                className="btn bg-secondary p-2"
                            >
                                Update
                            </button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageAllOrders;