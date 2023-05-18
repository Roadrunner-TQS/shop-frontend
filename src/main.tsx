import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {QueryClient, QueryClientProvider} from "react-query";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "@/pages/home";
import {Product} from "@/pages/product";
import {Cart} from "@/pages/cart";
import {Payment} from "@/pages/payment";
import {SignUp} from "@/pages/sign-up";
import {SignIn} from "@/pages/sign-in";
import {Orders} from "@/pages/orders";
import {PaymentStatus} from "@/pages/payment-status";
import {AuthProvider} from "@/contexts/auth";

const queryClient = new QueryClient()

const router = createBrowserRouter([{
    path: '/', element: <Home/>,
}, {
    path: '/product', element: <Product/>,
}, {
    path: '/cart', element: <Cart/>
}, {
    path: '/payment', element: <Payment/>
}, {
    path: '/signup', element: <SignUp/>
}, {
    path: '/signin', element: <SignIn/>
}, {
    path: '/orders', element: <Orders/>
}, {
    path: '/payment/status', element: <PaymentStatus/>
}, {
    path: '*', element: <div>404</div>,
}])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <RouterProvider router={router}/>
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>,)
