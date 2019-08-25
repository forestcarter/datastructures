import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

const routing = (
	<Router>
		<App />
	</Router>
  )

ReactDOM.render(routing , document.getElementById('root'));
