import {Book} from "@/types";
import {Link} from "react-router-dom";
import React from "react";

interface BookCardProps {
    book: Book;
}

export const ProductCard: React.FunctionComponent<BookCardProps> = ({book}) => {
    return <Link to={`/product/${book.id}`}>
        <div key={book.id} className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={book.imageUrl} alt="Shoes"/></figure>
            <div className="card-body">
                <h2 className="card-title">{book.title}</h2>
                <p className={"text-xl text-primary"}>{book.price}€</p>
                <p>{book.description}</p>
                <div className="card-actions items-center place-content-between">
                    {book.categories.map((item)=> (
                        <div key={item.slug} className="badge badge-outline">{item.name}</div>
                    ))}
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </Link>;
};

