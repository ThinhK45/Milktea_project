import React from 'react';
import './App.css';
import './responsive.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/productScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import OrderScreen from './screens/OrderScreen';
import OrderDetailScreen from './screens/OrderDetailScreen';
import AddProduct from './screens/AddProduct';
import Login from './screens/LoginScreen';
import UserScreen from './screens/UsersScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import NotFound from './screens/NotFound';

const App = () => {
    return (
        <Router>
            <Switch>
                <PrivateRouter path="/" component={HomeScreen} exact />

                <PrivateRouter path="/products" component={ProductScreen} />
                <PrivateRouter path="/category" component={CategoriesScreen} />
                <PrivateRouter path="/orders" component={OrderScreen} />
                <PrivateRouter path="/order" component={OrderDetailScreen} />
                <PrivateRouter path="/addproduct" component={AddProduct} />
                <PrivateRouter path="/users" component={UserScreen} />
                <PrivateRouter path="/login" component={Login} />

                <PrivateRouter
                    path="/product/:id/edit"
                    component={ProductEditScreen}
                />
                <PrivateRouter path="*" component={NotFound} />
            </Switch>
        </Router>
    );
};
export default App;
