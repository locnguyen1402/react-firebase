import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import Home from './home/index'
import Detail from './detail/index'
import Products from './products/index'

import Nav from 'react-bootstrap/Nav';

const routing = (
    <Router>
        <div>
          {/*<ul>*/}
            {/*<li>*/}
              {/*<Link to="/">Home</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<Link to="/products">Products</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<Link to="/detail">Detail</Link>*/}
            {/*</li>*/}
          {/*</ul>*/}
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/products" href="/products">Products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/detail" href="/detail" disabled>
                Detail
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Route exact path={"/"} component={Home}/>
          <Route path={"/products"} component={Products}/>
          <Route path={"/detail"} component={Detail}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
