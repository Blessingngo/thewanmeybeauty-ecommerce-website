import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PrivateRoute from './components/Layout/PrivateRoute';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/products" component={ProductsPage} />
                <PrivateRoute path="/cart" component={CartPage} />
                <PrivateRoute path="/orders" component={OrderPage} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
