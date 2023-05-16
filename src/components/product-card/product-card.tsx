import {Product} from "@/types";
import {Link} from "react-router-dom";

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FunctionComponent<ProductCardProps> = ({product}) => {
    return <Link to={"/product"}>
        <div key={product.id} className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={product.image} alt="Shoes"/></figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className={"text-xl text-primary"}>{product.price}€</p>
                <p>{product.description}</p>
                <div className="card-actions items-center place-content-between">
                    <div className="badge badge-outline">Fashion</div>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </Link>;
};

