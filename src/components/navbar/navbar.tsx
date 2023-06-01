import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "@/contexts/auth";
import axios from "axios";
import {LOGOUT, ORDERS} from "@/urls";
import {useQuery, useQueryClient} from "react-query";
import {Order} from "@/types";

interface NavbarProps {
    drawer?: boolean
}

export const Navbar: React.FunctionComponent<NavbarProps> = (props) => {

    const {user, logout, token, cart} = useAuth()

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const logoutTrigger = async () => {
        const response = await axios.put(LOGOUT, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (response.status === 200) {
            await queryClient.invalidateQueries({queryKey: ['user']})
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

    const {data: ordersData, status} = useQuery<Order[]>({
        queryKey: 'ordersNotification',
        queryFn: async () => {
            const {data} = await axios.get(ORDERS, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return data;
        },
        refetchInterval: 10000,
        enabled: !!token
    })

    const countThePackagesAvailable = (orders: Order[]) => {
        let count = 0
        orders.forEach(order => {
            if (order.status === "AVAILABLE") {
                count++
            }
        })

        return count
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-bell" viewBox="0 0 16 16">
                                <path
                                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                            </svg>
                            {status === "success" && countThePackagesAvailable(ordersData) > 0 &&
                                <span className="badge badge-sm indicator-item bg-primary">{countThePackagesAvailable(ordersData)}</span>}
                        </div>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {status === "success" && countThePackagesAvailable(ordersData) > 0 ?
                            <li>You have {countThePackagesAvailable(ordersData)} packages available</li>
                            :
                            <li>You have no packages available</li>
                        }

                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator text-neutral-content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-cart" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            {cart.length > 0 &&
                                <span className="badge badge-sm indicator-item bg-primary">{calculateQuantity()}</span>}
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
                        <li><a onClick={() => logoutTrigger()}>Logout</a></li>
                        {status === "success" &&
                            <li>You have {countThePackagesAvailable(ordersData)} packages available</li>}
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

