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
import Login from './screens/Login';
import UserScreen from './screens/UserScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import NotFound from './screens/NotFound';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={HomeScreen} exact />

                <Route path="/products" component={ProductScreen} exact />
                <Route path="/category" component={CategoriesScreen} exact />
                <Route path="/orders" component={OrderScreen} exact />
                <Route path="/order" component={OrderScreen} exact />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
};
export default App;
