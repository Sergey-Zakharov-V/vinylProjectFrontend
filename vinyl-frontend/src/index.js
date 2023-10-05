import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from "./HomePage/HomePage";

const App = () => {
return (
<BrowserRouter>
	<Routes>
		<Route path="/" element={<HomePage />} />
		<Route path="*" element={<div>Error Page</div>} />
	</Routes>
</BrowserRouter>
);
};

ReactDOM.createRoot(document.getElementById('main')).render(
<React.StrictMode>
<App />
</React.StrictMode>
);

reportWebVitals();