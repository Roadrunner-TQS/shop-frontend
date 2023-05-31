import {Container} from "@/components/container";
import {ProductList} from "@/components/product-list";
import axios from "axios";
import {GET_BOOKS} from "@/urls";
import {useQuery} from "react-query";

interface HomeProps {
}
export const Home: React.FunctionComponent<HomeProps> = (props) => {
    const {data, isSuccess} = useQuery({
            queryKey: 'books',
            queryFn: () => axios.get(GET_BOOKS(5)),
        }
    )

    return <Container>
        {isSuccess ?
        <ProductList products={data.data}/>
            :
            <div>ERROR</div>
        }
    </Container>;
};

