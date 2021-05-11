import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ViewportProvider } from './utils/useViewportHook';

ReactDOM.render(
	<ViewportProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ViewportProvider>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
