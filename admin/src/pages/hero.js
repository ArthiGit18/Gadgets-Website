import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Hero = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts (empty dependency array ensures it runs only once)
  useEffect(() => {
    axios.get('http://localhost:3001/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array to avoid continuous fetch loop

  // Handle image change
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  // Handle form submission (create new product)
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:3001/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product added:', response.data);
      setProducts([...products, response.data]); // Update the products list with the new product

      // Clear the form fields after successful submission
      setName('');
      setDescription('');
      setImage(null); // Clear the image input

      // Optionally, you can hide the form after submission
      document.getElementById('product-form').style.display = 'none'; 

    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Handle product deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/products/${id}`);
      console.log('Product deleted');
      setProducts(products.filter(product => product._id !== id)); // Remove the deleted product from the list
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <button className="add-btn" onClick={() => document.getElementById('product-form').style.display = 'block'}>
        Add Product
      </button>

      <div id="product-form" style={{ display: 'none' }}>
        <form onSubmit={handleSubmit}>
          <h3>Add New Product</h3>
          <div>
            <label>Product Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div>
            <label>Image</label>
            <input type="file" onChange={handleImageChange} required />
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>

      <h2>Product List</h2>
      <div>
        {products.map(product => (
          <div key={product._id} className="product">
            <img src={`http://localhost:3001/${product.image}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
