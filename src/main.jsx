import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RecoilRoot } from "recoil";
const script=document.createElement("script")
script.src="https://checkout.razorpay.com/v1/checkout.js"
document.body.appendChild(script)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
    <App />
    </RecoilRoot>
  </React.StrictMode>,
)
