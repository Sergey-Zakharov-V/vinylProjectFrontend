import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from "./HomePage/HomePage";
import ContactsPage from "./ContactsPage/ContactsPage";
import DeliveryPage from "./DeliveryPage/DeliveryPage";
import PaymentPage from "./PaymentPage/PaymentPage";
import GeneralTermsPage from "./GeneralTermsPage/GeneralTermsPage";
import TrackInformationPage from "./TrackInformationPage/TrackInformationPage";
import OrderInformationPage from "./OrderInformationPage/OrderInformationPage";

const App = () => {
return (
<BrowserRouter>
	<Routes>
		<Route path="/" element={<HomePage />} />
		<Route path="/contacts" element={<ContactsPage/>} />
		<Route path="/delivery" element={<DeliveryPage/>} />
		<Route path="/payment" element={<PaymentPage/>} />
		<Route path="/general-terms" element={<GeneralTermsPage/>} />
		<Route path="/track-information" element={<TrackInformationPage/>} />
		<Route path="/order-information" element={<OrderInformationPage/>} />

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