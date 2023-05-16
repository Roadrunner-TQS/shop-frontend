import {Navbar} from "@/components/navbar";
import {Link} from "react-router-dom";

interface CartProps {
}

export const Cart: React.FunctionComponent<CartProps> = (props) => {
    return <>
        <Navbar/>
        <div className="overflow-x-auto w-9/12 mx-auto mt-5">
            <h1 className={"text-5xl font-bold text-primary mb-3"}>Cart</h1>
            <div className="grid grid-cols-4 w-full">
                <div>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://picsum.photos/seed/5/400/300"
                                     alt="Avatar Tailwind CSS Component"/>
                            </div>
                        </div>
                        <div className="font-bold">Hart Hagerty</div>
                    </div>
                </div>
                <div><input type={"text"} className={"input input-bordered w-10"} value={"1"}/></div>
                <div>12.5€</div>
                <div>
                    <button className={"btn btn-primary"}>Remove</button>
                </div>

            </div>
            <div className={"divider"}></div>
            <div className="flex flex-col items-end space-y-4">
                <div className="flex flex-row align-bottom">
                    <div className={"text-xl font-bold"}>Subtotal:</div>
                    <div className={"text-xl font-extralight"}>12.5€</div>
                </div>

                <div className="flex flex-row align-bottom">
                    <div className={"text-xl font-bold"}>Tax:</div>
                    <div className={"text-xl font-extralight"}>23%</div>
                </div>

                <div className="flex flex-row align-bottom">
                    <div className={"text-xl font-bold"}>Total:</div>
                    <div className={"text-xl font-extralight"}>13.5€</div>
                </div>

                <Link to={"/payment"} className={"btn btn-primary mt-5"}>Checkout</Link>
            </div>

        </div>
    </>;
};

