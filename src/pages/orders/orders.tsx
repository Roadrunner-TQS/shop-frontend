import {Navbar} from "@/components/navbar";

interface OrdersProps {
}

export const Orders: React.FunctionComponent<OrdersProps> = (props) => {
    return <>
        <Navbar/>
        <div className="overflow-x-auto w-9/12 mx-auto mt-5">
            <h1 className={"text-5xl font-bold text-primary mb-3"}>My Orders</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Date</th>
                        <th>Content</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>22/12/2023</td>
                        <td>Quality Control Specialist</td>
                        <td><div className={"badge badge-lg badge-success"}>Shipped</div></td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>2</th>
                        <td>22/12/2023</td>
                        <td >
                            <div className="flex items-center space-x-3">
                            1x Quality Control Specialist<br/>
                            2x Tax Accountant<br/>
                            3x Tax Accountant<br/>
                            </div>
                        </td>
                        <td><div className={"badge badge-lg badge-success"}>Shipped</div> </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
                        <td>22/12/2023</td>
                        <td>Tax Accountant</td>
                        <td><div className={"badge badge-lg badge-success"}>Shipped</div></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>;
};