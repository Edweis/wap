//@flow
import React, { Component } from 'react';
import {useRoutes} from 'hookrouter';
import logo from './logo.svg';
import './App.css';

const routes = {
    '/': () => <HomePage />,
    '/about': () => <AboutPage />,
    '/products': () => <ProductOverview />,
    '/products/:id': ({id}) => <ProductDetails id={id} />
};


const MyApp = () => {
	const routeResult = useRoutes(routes)
	return routeResult ||  <NotFoundPage />;
}

export default App;
