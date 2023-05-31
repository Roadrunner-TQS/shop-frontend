import {Navbar} from "@/components/navbar";
import {Link} from "react-router-dom";
import {useAuth} from "@/contexts/auth";
import {OrderItem} from "@/types";

interface CartProps {
}

export const Cart: React.FunctionComponent<CartProps> = (props) => {
    const {cart, setCart} = useAuth()

    function changeItemQuantity(item: OrderItem) {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            const newCart = cart.map((cartItem) => {
                if (cartItem.book.id === item.book.id) {
                    return {
                        ...cartItem, quantity: parseInt(e.target.value)
                    }
                }
                return cartItem
            })
            setCart(newCart)

        };
    }

    function removeItem(item: OrderItem) {
        return () => {
            const newCart = cart.filter((cartItem) => {
                return cartItem.book.id !== item.book.id
            })
            setCart(newCart)
        };
    }

    const calculateTotal = () => {
        let total = 0
        cart.forEach(item => {
            total += item.quantity * item.book.price
        })
        return total
    }

    return <>
        <Navbar/>
        <div className="overflow-x-auto w-9/12 mx-auto mt-5">
            <h1 className={"text-5xl font-bold text-primary mb-3"}>Cart</h1>
            <div className="grid grid-cols-5 w-full gap-y-2">

                {cart.map((item) => <>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={item.book.imageUrl}
                                     alt="Avatar Tailwind CSS Component"/>
                            </div>
                        </div>
                        <div className="font-bold">{item.book.title}</div>
                    </div>

                    <div><input type={"number"} className={"input input-bordered w-16"} min={1}
                                value={item.quantity}
                                onChange={changeItemQuantity(item)}
                    /></div>
                    <div>{item.quantity} x {item.book.price}€</div>
                    <div>{item.quantity * item.book.price}€</div>
                    <div>
                        <button className={"btn btn-primary"}
                                onClick={removeItem(item)}
                        >Remove
                        </button>
                    </div>
                </>)}


            </div>
            <div className={"divider"}></div>
            <div className="flex flex-col items-end space-y-4">
                <div className="flex flex-row align-bottom">
                    <div className={"text-xl font-bold"}>Total:</div>
                    <div className={"text-xl font-extralight"}>
                        {calculateTotal()}€
                    </div>
                </div>
                <Link to={"/payment"} className={"btn btn-primary mt-5"}>Checkout</Link>
            </div>

        </div>
    </>;
};

