import {Book} from "@/types";
import {ProductCard} from "@/components/product-card";

interface ProductListProps {
    products: Book[];
}

export const ProductList: React.FunctionComponent<ProductListProps> = (props) => {
    return <div className={"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-3/4 mx-auto mt-3"}>
        {props.products.map((product) =>
            <ProductCard key={product.id} book={product}/>
        )}
    </div>
};

