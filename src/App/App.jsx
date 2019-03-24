// @flow
import React from 'react';
import { useRoutes } from 'hookrouter';
import './App.css';
import HomePage from '../HomePage/HomePage';

const routes = {
    '/': () => <HomePage />,
};

const MyApp = () => {
    const routeResult = useRoutes(routes);
    return routeResult || 'Page not found';
};

export default MyApp;
