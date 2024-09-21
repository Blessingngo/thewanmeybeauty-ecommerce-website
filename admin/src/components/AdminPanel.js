import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AddProduct from './AddProduct';
import ProductList from './ProductList';

const AdminPanel = () => {
  return (
    <Router>
      <div>
        <h1>Admin Panel</h1>
        <nav>
          <Link to="/admin/products">View Products</Link>
          <Link to="/admin/add-product">Add Product</Link>
        </nav>
        <Switch>
          <Route path="/admin/products" component={ProductList} />
          <Route path="/admin/add-product" component={AddProduct} />
        </Switch>
      </div>
    </Router>
  );
};

export default AdminPanel;
