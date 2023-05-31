import React from "react";
import {Container} from "@/components/container";
import {Book, Category, OrderItem} from "@/types";
import {useAuth} from "@/contexts/auth";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import axios from "axios";
import {GET_BOOK} from "@/urls";


interface ProductProps {
}

export const Product: React.FunctionComponent<ProductProps> = (props) => {

    const {user, cart, setCart} = useAuth()
    const params = useParams()

    const {data: book, isSuccess} = useQuery({
        queryFn: () => axios.get(GET_BOOK(params.id)),
        queryKey: ['book', params.id],
    })

    const addToCart = (book:Book) => {
        return () => {
            const orderItem = cart.find((item: OrderItem) => item.book.id === book.id)
            if (orderItem) {
                orderItem.quantity += 1
                setCart([...cart])
            } else {
                setCart([...cart, {
                    book: book,
                    quantity: 1
                }])
            }
        };
    }

    return <Container>
        <div className={"grid sm:grid-cols-1 md:grid-cols-2 m-4 w-9/12 mx-auto"}>

            {isSuccess ? (
                    <>
                        <div className={"row-span-2"}>
                            <img src={book.data.imageUrl}/>
                        </div>
                        <div className={"text-lg font-light text-justify"}>
                            <h1 className={"text-4xl text-primary font-extrabold"}>{book.data.title}</h1>
                            {book.data.categories.map((category: Category) => (
                                <div key={category.id}
                                     className="badge badge-primary badge-outline text-md">{category.name}</div>
                            ))}

                            <p className={"text-2xl font-bold text-accent"}>{book.data.publisher}</p>

                            <p className={"font-extralight"}>{book.data.description}</p>
                            <div className={"flex flex-col items-end"}>
                                <p className={"text-4xl font-bold text-accent"}>{book.data.price}€</p>
                                {user && <button className={"btn btn-primary w-48"}
                                                 onClick={addToCart(book.data)}
                                >Add Cart</button>}
                            </div>

                            <div className={"divider"}></div>
                            <p>{book.data.author.firstName} {book.data.author.lastName}</p>
                            <p className={"font-extralight"}>{book.data.author.bio}</p>
                        </div>


                    </>)
                :
                <p>ERROR</p>
            }

        </div>

    </Container>

};

