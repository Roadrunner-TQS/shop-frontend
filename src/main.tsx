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
import {ProtectedRoute} from "@/components/protected-route";

const queryClient = new QueryClient()

const router = createBrowserRouter([{
    path: '/', element: <Home/>,
}, {
    path: '/product/:id', element: <Product/>,
}, {
    path: '/cart', element: <ProtectedRoute page={Cart}/>
}, {
    path: '/payment', element: <ProtectedRoute page={Payment}/>
}, {
    path: '/signup', element: <SignUp/>
}, {
    path: '/signin', element: <SignIn/>
}, {
    path: '/orders', element: <ProtectedRoute page={Orders}/>
}, {
    path: '/payment/status', element: <ProtectedRoute page={PaymentStatus}/>
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
    </React.StrictMode>)
