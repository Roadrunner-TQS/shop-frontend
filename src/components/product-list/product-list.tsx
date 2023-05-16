import {Product} from "@/types";
import {ProductCard} from "@/components/product-card";

interface ProductListProps {
    products: Product[];
}

export const ProductList: React.FunctionComponent<ProductListProps> = (props) => {
    return <div className={"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-3/4 mx-auto"}>
        {props.products.map((product) =>
            <ProductCard key={product.id} product={product}/>
        )}
    </div>
};

