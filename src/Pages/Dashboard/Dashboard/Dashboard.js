import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ManageOrders from '../../ManageOrders/ManageOrders';
import MyOrders from '../../MyOrders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AddReview from '../../AddReview/AddReview';
import Payment from '../Payment/Payment';
import Welcome from '../Welcome/Welcome';
import AdminRoute from '../../../routes/AdminRoute';
import AddProduct from '../../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';

const Dashboard = () => {
    let { path, url } = useRouteMatch();

    return (
        <>
            <Row>
                <Col xs={12} sm={12} md={2} lg={2} style={{ borderRight: '3px solid gray', paddingTop: '30px'}}>
                    <ul style={{listStyle: 'none', textAlign: 'left'}}>
                        <Link style={{color: '#000'}} to={`${url}`}><li>Dashboards</li></Link>
                        <Link style={{color: '#000'}} to={`${url}/admin`}><li>MakeAdmin</li></Link>
                        <Link style={{color: '#000'}} to={`${url}/manageOrders`}><li>Manage Orders</li></Link>
                        <Link style={{color: '#000'}} to={`${url}/addReview`}><li>AddReview</li></Link>
                        <Link style={{color: '#000'}} to={`${url}/payment`}><li>Pay</li></Link>
                        <Link style={{color: '#000'}} to={`${url}/myOrders`}><li>MyOrders</li></Link>
                        <Link style={{color: '#000'}} to={`${url}/addProduct`}><li>AddProduct</li></Link>
                        <Link style={{color: '#000'}} to={`${url}/manageProduct`}><li>Manage Product</li></Link>
                    </ul>
                </Col>
                <Col xs={12} sm={12} md={10} lg={10}>
                    <Switch>
                        <Route exact path={path}>
                            <Welcome></Welcome>
                        </Route>
                        <Route path={`${path}/addReview`}>
                            <AddReview></AddReview>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>

                        <Route path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <AdminRoute path={`${path}/manageOrders`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/admin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProduct`}>
                            <ManageProduct></ManageProduct>
                        </AdminRoute>
                      
                        
                    </Switch>
                </Col>
            </Row>

        </>
    );
};

export default Dashboard;
