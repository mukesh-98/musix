import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import { BrowserRouter as Router} from 'react-router-dom';
import { createBrowserHistory as history} from 'history';
import Nav from './Component/Navigation';

ReactDOM.render(
    <Router>
        <Nav />
    </Router>,
  document.getElementById('root')
);

export default history();