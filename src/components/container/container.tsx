import React from "react";
import {Navbar} from "@/components/navbar";

interface ContainerProps {
}

export const Container: React.FunctionComponent<ContainerProps> = (props: React.PropsWithChildren) => {
    const sidebarContent = [
        {"name": "Salmon"},
        {"name": "Tuna"},
        {"name": "Cod"},
        {"name": "Haddock"},
        {"name": "Trout"},
        {"name": "Sardines"},
        {"name": "Mackerel"},
        {"name": "Catfish"},
        {"name": "Bass"},
        {"name": "Halibut"},
        {"name": "Snapper"},
        {"name": "Mahi-mahi"},
        {"name": "Swordfish"},
        {"name": "Crab"},
        {"name": "Shrimp"},
        {"name": "Lobster"},
        {"name": "Scallops"},
        {"name": "Clams"},
        {"name": "Oysters"}
    ]



    return <>
        <Navbar drawer={true}/>
        <div className="drawer drawer-mobile">
            <input id="sidebar" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content">
                {props.children}
                {/*<Footer/>*/}
            </div>
            <div className="drawer-side">
                <label htmlFor="sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-56 bg-base-200 text-base-content">
                    {sidebarContent.map((item, index) => {
                        return <li className={"text-sm"} key={item.name}>
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-boxes" viewBox="0 0 16 16">
                                    <path
                                        d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/>
                                </svg>
                                {item.name}
                            </a>
                        </li>
                    })
                    }
                </ul>

            </div>
        </div>
    </>
};

