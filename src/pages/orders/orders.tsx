import {Navbar} from "@/components/navbar";
import {useAuth} from "@/contexts/auth";
import {useQuery} from "react-query";
import axios from "axios";
import {CANCEL, ORDERS} from "@/urls";
import {Order, OrderItem} from "@/types";
import moment from "moment";

interface OrdersProps {
}

export const Orders: React.FunctionComponent<OrdersProps> = (props) => {

    const {token} = useAuth()

    const {data, status, refetch} = useQuery<Order[]>({
        queryKey: ["orders"],
        queryFn: async () => {
            const {data} = await axios.get(ORDERS, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return data;
        }
    })

    const cancelOrder = (id: string) => async () => {
        await axios.put(CANCEL, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                id: id
            }
        })
        await refetch()
    }

    const calculateTotal = (items: OrderItem[]) => {
        let total = 0
        items.forEach((item) => {
            total += item.book.price * item.quantity
        })
        return total
    }

    const isCancellable = (status: string) => {
        return status === "SHIPPING" || status === "PENDING"
    }


    return <>
        <Navbar/>
        <div className="overflow-x-auto w-9/12 mx-auto mt-5">
            <h1 className={"text-5xl font-bold text-primary mb-3"}>My Orders</h1>
            {status === "loading" && <p>Loading...</p>}
            {status === "error" && <p>Error</p>}
            {status === "success" && data.map((order) => <>
                    <div className="card">
                        <p className={"text-2xl font-medium"}>Content</p>
                        {order.items.map((item) => (
                            <div key={item.book.id} className={"flex flex-row justify-between"}>
                                <img src={item.book.imageUrl} alt={item.book.title}
                                     className={"w-20 h-20 object-cover"}
                                />
                                <p>{item.book.title}</p>
                                <p>{item.book.author.firstName} {item.book.author.lastName}</p>
                                <p>{item.quantity}x{item.book.price}€</p>
                            </div>
                        ))}
                        <p className={"text-lg font-medium"}>Total: {calculateTotal(order.items)}€</p>
                        <hr className={"my-2"}/>
                        <p className={"text-2xl font-medium"}>Status</p>
                        {order.orderStatus.map((status) => (
                            <div key={status.status} className={"flex flex-row space-x-2 items-center"}>
                                <p>{moment(status.timestamp).format('MMMM Do YYYY h:mm:ss a')}</p>
                                <div className={"badge badge-info"}>{status.status}</div>
                            </div>
                        ))}
                        <hr className={"my-2"}/>
                        <p className={"text-2xl font-medium"}>Pick Up Point</p>
                        <p>{order.pickUpLocation.name}</p>
                        <p>{order.pickUpLocation.address}</p>

                        { isCancellable(order.orderStatus[order.orderStatus.length - 1].status) && (
                            <button className="collapse-toggle btn btn-error"
                                    onClick={cancelOrder(order.trackingId)}
                            >Cancel Order
                            </button>)
                        }
                    </div>

                </>
            )}
        </div>
    </>;
};