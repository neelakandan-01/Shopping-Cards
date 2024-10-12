import React, { useState, useEffect } from 'react';
import './Fetch.css';

export default function Fetch() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchCarts = async () => {
        try {
            const response = await fetch("https://dummyjson.com/carts");
            if (!response.ok) {
                throw new Error("Data not found");
            }
            const data = await response.json();
            setItems(data.carts); // Set the carts data
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCarts();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const filteredItems = Array.isArray(items) ? items.filter(item =>
        item.products.some(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    ) : [];

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search products in carts..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                style={{ marginBottom: '20px', padding: '10px', width: '300px' }} 
            />
            <div className="vertical-container">
                {filteredItems.map((cart) => (
                    <div  key={cart.id} onClick={() => alert(`Viewing Cart ID: ${cart.id}`)}>
                        <div>
                            {cart.products.map(product => (
                                <div className="card" key={product.id} >
                                    <div className="product-info">
                                    {product.thumbnail && <img src={product.thumbnail} alt={product.title} className="card-img" />}
                                    <p className="product-title">{product.title}</p>
                                    <p className="product-price">${product.price}</p>
                                    <p>Quantity : {product.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>  
    );
}
