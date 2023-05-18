import {Container} from "@/components/container";
import {ProductList} from "@/components/product-list";
import {Product} from "@/types";

interface HomeProps {
}

export const Home: React.FunctionComponent<HomeProps> = (props) => {

    const mockProducts: Product[] = [
        {
            id: "1",
            name: "Product 1",
            description: "Description 1",
            price: 100,
            image: "https://picsum.photos/seed/1/400/300",
        },
        {
            id: "2",
            name: "Product 2",
            description: "Description 2",
            image: "https://picsum.photos/seed/2/400/300",
            price: 200,
        },
        {
            id: "3",
            name: "Product 3",
            description: "Description 3",
            image: "https://picsum.photos/seed/3/400/300",
            price: 300,
        },
        {
            id: "4",
            name: "Product 4",
            description: "Description 4",
            image: "https://picsum.photos/seed/4/400/300",
            price: 400,
        },
        {
            id: "5",
            name: "Product 5",
            description: "Description 5",
            image: "https://picsum.photos/seed/5/400/300",
            price: 500,
        }
    ]


    return <Container>
        <div className={"flex flex-row items-center place-content-between m-3 "}>
            <div className={"form-control w-full max-w-xs"}>
                <input type="text" placeholder="Search" className="input input-bordered" />
            </div>

            <select className="select select-bordered md:w-full max-w-xs">
                <option>Newest</option>
                <option>Oldest</option>
                <option>Greedo</option>
            </select>
        </div>
        <ProductList products={mockProducts}/>
    </Container>;
};

