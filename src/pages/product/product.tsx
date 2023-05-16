import React from "react";
import {Container} from "@/components/container";
import {Product as ProductType} from "@/types";
import {ProductCard} from "@/components/product-card";


interface ProductProps {
}

export const Product: React.FunctionComponent<ProductProps> = (props) => {

    const mockProducts: ProductType[] = [
        {
            id: 1,
            name: "Product 1",
            description: "Description 1",
            price: 100,
            image: "https://picsum.photos/seed/1/400/300",
        },
        {
            id: 2,
            name: "Product 2",
            description: "Description 2",
            image: "https://picsum.photos/seed/2/400/300",
            price: 200,
        },
        {
            id: 3,
            name: "Product 3",
            description: "Description 3",
            image: "https://picsum.photos/seed/3/400/300",
            price: 300,
        },
        {
            id: 4,
            name: "Product 4",
            description: "Description 4",
            image: "https://picsum.photos/seed/4/400/300",
            price: 400,
        }
    ]

    return <Container>
        <div className={"grid sm:grid-cols-1 md:grid-cols-2 m-4 w-9/12 mx-auto"}>
            <div className={"row-span-2"}>
                <img src={"https://picsum.photos/560/560?random=2"}/>
            </div>
            <div className={"text-lg font-light text-justify"}>
                <h1 className={"text-4xl text-primary font-extrabold"}>Product 1</h1>
                <div className="badge badge-primary badge-outline text-md">Fish</div>

                <p className={"font-extralight"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Blandit volutpat maecenas volutpat blandit
                    aliquam etiam erat velit. Enim facilisis gravida neque convallis. Ipsum nunc aliquet bibendum enim
                    facilisis gravida neque convallis a. Commodo ullamcorper a lacus vestibulum sed arcu non. Elementum
                    sagittis vitae et leo. Amet nulla facilisi morbi tempus. Cursus sit amet dictum sit amet justo donec
                    enim. Tortor condimentum lacinia quis vel eros donec ac odio. Nunc consequat interdum varius sit
                    amet mattis vulputate.</p>
                <div className={"flex flex-col items-end"}>
                    <p className={"text-4xl font-bold text-accent"}>123,00€</p>

                    <button className={"btn btn-primary w-48"}>Add Cart</button>
                </div>

            </div>
            <div className={"divider"}></div>
            <div className={"col-span-2 mt-6"}>
                <h1 className={"text-4xl text-primary font-extrabold"}>Related Products</h1>
                <div className={"grid sm:grid-cols-1 md:grid-cols-4 gap-2"}>
                    {mockProducts.map((product) => {
                        return <ProductCard key={product.id} product={product}/>
                    })
                    }
                </div>
            </div>
        </div>

    </Container>

};

