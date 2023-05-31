import {Navbar} from "@/components/navbar";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {GET_ME, LOGIN} from "@/urls";
import {useMutation, useQuery} from "react-query";
import {useAuth} from "@/contexts/auth";

interface SignInProps {
}

interface SignInData {
    email: string,
    password: string
}


export const SignIn: React.FunctionComponent<SignInProps> = (props) => {

        const {setToken,token,login} = useAuth()
        const navigate = useNavigate()
        const SignInSchema = Yup.object().shape({
            email: Yup.string().required("Required"),
            password: Yup.string().required("Required"),
        })

        const signInMutation = useMutation({
            mutationFn: (data: SignInData) => axios.post(LOGIN, data),
            onSuccess: (data) => {
                setToken(data.data.token)
            }
        })


        useQuery({
            queryKey: ["user"],
            queryFn: () => axios.get(GET_ME, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            ),
            onSuccess: (data) => {
                login(data.data)
                navigate("/")
            },
            enabled: token !== ""
        })
        return <>
            <Navbar/>
            <div className="overflow-x-auto w-9/12 mx-auto mt-5">
                <h1 className={"text-5xl font-bold text-primary mb-3"}>Sign In</h1>

                <Formik initialValues={
                    {
                        email: "",
                        password: "",
                    } as SignInData
                } onSubmit={
                    (values, actions) => {
                        signInMutation.mutate(values)
                    }

                } validationSchema={SignInSchema}>
                    <Form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <Field name={"email"} type={"text"} className={"input input-bordered"}/>
                            <ErrorMessage name={"email"} component={"div"} className={"text-error"}/>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <Field name={"password"} type={"password"} className={"input input-bordered"}/>
                            <ErrorMessage name={"password"} component={"div"} className={"text-error"}/>
                            <button type={"submit"} className={"btn btn-primary mt-3"}>Sign In</button>
                        </div>
                    </Form>
                </Formik>
                <div className={"w-full mx-auto"}>
                    Have you registered yet?
                    <Link to={"/signup"} className={"text-primary hover:underline-offset-1"}> Sign Up now!</Link>
                </div>
            </div>
        </>;
    }
;