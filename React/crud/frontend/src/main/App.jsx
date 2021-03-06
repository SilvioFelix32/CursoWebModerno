import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import { HashRouter } from 'react-router-dom'

import Logo from '../components/templates/Logo'
import Nav from '../components/templates/Nav'
import Routes from './Routes'
import Footer from '../components/templates/Footer'

export default props =>
    <HashRouter>
        <div className="app">
            <Logo></Logo>
            <Nav></Nav>
            <Routes></Routes>
            <Footer></Footer>
        </div>
    </HashRouter>
