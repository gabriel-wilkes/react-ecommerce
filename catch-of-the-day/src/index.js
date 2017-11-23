import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const host = window.location.hostname;
var path = "/";
if (host === "gabriel-wilkes.github.io") {
  path = "/react-ecommerce/";
}

const Root = () => {
  return (
    <BrowserRouter basename={path}>
      <div>
        <Switch>
          <Route exact path="/" component={StorePicker} />
          <Route path="/store/:storeId" component={App} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));