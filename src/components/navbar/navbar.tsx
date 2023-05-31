import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "@/contexts/auth";
import axios from "axios";
import {LOGOUT} from "@/urls";
import {useQueryClient} from "react-query";

interface NavbarProps {
    drawer?: boolean
}

export const Navbar: React.FunctionComponent<NavbarProps> = (props) => {

    const {user,logout,token,cart} = useAuth()

    const queryClient = useQueryClient()
    const navigate = useNavigate()


    const logoutTrigger = async ()=> {
        const response = await axios.put(LOGOUT,{}, {
            headers : {
                Authorization: `Bearer ${token}`
            }
        })

        if (response.status === 200) {
            await queryClient.invalidateQueries({ queryKey: ['user'] })
            logout()
            navigate("/")
        }
    }

    const calculateTotal = () => {
        let total = 0
        cart.forEach(item => {
            total += item.quantity * item.book.price
        })
        return total
    }

    const calculateQuantity = () => {
        let total = 0
        cart.forEach(item => {
            total += item.quantity
        })
        return total
    }


    return <div className="navbar bg-neutral">
        <div className="flex-1">
            <Link to={"/"} className="btn btn-ghost normal-case text-3xl text-neutral-content"><span
                className={"text-primary"}>Book</span>It</Link>
        </div>
        {user ? <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator text-neutral-content">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                            {cart.length > 0 && <span className="badge badge-sm indicator-item bg-primary">{calculateQuantity()}</span>}
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">{calculateQuantity()} Items</span>
                            <span className="text-info">Subtotal: {calculateTotal()}€</span>
                            <div className="card-actions">
                                <Link to={"/cart"} className="btn btn-primary btn-block">View cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={`https://robohash.org/${user?.email}`} alt={"user-image"}/>
                        </div>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={"/orders"}>Orders</Link></li>
                        <li><a onClick={()=> logoutTrigger()}>Logout</a></li>
                    </ul>
                </div>
            </div>
            : <div className={"flex-none"}>
                <Link to={"/signin"} className={"btn btn-primary"}>
                    Sign In
                </Link>
            </div>
        }
    </div>;
};

