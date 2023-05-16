import React from "react";
import {Link} from "react-router-dom";

interface NavbarProps {
    drawer?: boolean
}

export const Navbar: React.FunctionComponent<NavbarProps> = (props) => {

    return <div className="navbar bg-neutral">
        <div className="flex-1">
            {props.drawer &&
            <label htmlFor="sidebar" className="btn btn-primary drawer-button lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </label>
            }
            <Link to={"/"} className="btn btn-ghost normal-case text-3xl text-neutral-content"><span className={"text-primary"}>Just</span>Fish</Link>
        </div>
        <div className="flex-none">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator text-neutral-content">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                        <span className="badge badge-sm indicator-item bg-primary">8</span>
                    </div>
                </label>
                <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div className="card-body">
                        <span className="font-bold text-lg">8 Items</span>
                        <span className="text-info">Subtotal: 999€</span>
                        <div className="card-actions">
                            <Link to={"/cart"} className="btn btn-primary btn-block">View cart</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://picsum.photos/seed/5/400/300" alt={"user-image"}/>
                    </div>
                </label>
                <ul tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to={"/orders"}>Orders</Link></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>;
};

