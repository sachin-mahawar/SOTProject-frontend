import React, { useState } from 'react';
import Header from "../../layouts/header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payments = () => {
    const [paymentMode, setPaymentMode] = useState('');

    const handlePaymentChange = (event) => {
        setPaymentMode(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!paymentMode) {
            toast.error("Please select a payment mode.");
            return;
        }
        toast.success(`Payment mode selected: ${paymentMode}`);
    };

    return (
        <>
            <Header />
            <ToastContainer />
            <div className="container mx-auto p-4 bg-gray-100 h-700 mt-6">
                <h1 className="text-3xl font-bold mb-6">Payment Page</h1>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                            <input
                                type="radio"
                                value="convenience_store"
                                checked={paymentMode === 'convenience_store'}
                                onChange={handlePaymentChange}
                                className="mr-2"
                            />
                            Convenience Store Payment
                        </label>
                        {paymentMode === 'convenience_store' && (
                            <div className="mt-2 pl-4">
                                <p className="text-gray-700">Select Store:</p>
                                <label className="block">
                                    <input type="radio" name="store" value="7-11" className="mr-2" />
                                    7-11
                                </label>
                                <label className="block">
                                    <input type="radio" name="store" value="Family Mart" className="mr-2" />
                                    Family Mart
                                </label>
                                <label className="block">
                                    <input type="radio" name="store" value="Lawson" className="mr-2" />
                                    Lawson
                                </label>
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                            <input
                                type="radio"
                                value="credit_debit"
                                checked={paymentMode === 'credit_debit'}
                                onChange={handlePaymentChange}
                                className="mr-2"
                            />
                            Credit/Debit Card
                        </label>
                        {paymentMode === 'credit_debit' && (
                            <div className="mt-2 pl-4">
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="cardNumber">
                                        Card Number
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="cardNumber"
                                        type="text"
                                        placeholder="1234 5678 9012 3456"
                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="expiryDate">
                                        Expiry Date
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="expiryDate"
                                        type="text"
                                        placeholder="MM/YY"
                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="cvv">
                                        CVV
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="cvv"
                                        type="text"
                                        placeholder="123"
                                        required
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                            <input
                                type="radio"
                                value="paypay"
                                checked={paymentMode === 'paypay'}
                                onChange={handlePaymentChange}
                                className="mr-2"
                            />
                            PayPay
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Payments;