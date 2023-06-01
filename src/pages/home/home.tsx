import {Container} from "@/components/container";
import {ProductList} from "@/components/product-list";
import axios from "axios";
import {GET_BOOKS} from "@/urls";
import {useQuery} from "react-query";

interface HomeProps {
}

export const Home: React.FunctionComponent<HomeProps> = (props) => {
    const {data, status} = useQuery({
            queryKey: 'books',
            queryFn: () => axios.get(GET_BOOKS),
        }
    )

    return <Container>
        {status === 'success' ?
            <ProductList products={data.data}/>
            :
            <div>Loading</div>
        }
        {status === 'error' &&
            <div>Error</div>
        }

    </Container>;
};

