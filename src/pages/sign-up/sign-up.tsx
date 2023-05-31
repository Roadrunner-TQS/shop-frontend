import * as Yup from "yup";
import {Navbar} from "@/components/navbar";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {useMutation, useQuery} from "react-query";
import axios from "axios";
import {GET_ME, SIGN_UP} from "@/urls";
import {useAuth} from "@/contexts/auth";
import {useState} from "react";

interface SignUpProps {
}

interface SignUpData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: number;
}

export const SignUp: React.FunctionComponent<SignUpProps> = (props) => {

    const {setToken,token,login} = useAuth()
    const [status,setStatus] = useState<string>("")
    const navigate = useNavigate()
    const signUpSchema = Yup.object().shape({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().required("Required"),
        phone: Yup.string().required("Required").length(9, "Invalid phone number"),
        password: Yup.string().required("Required"),
        passwordConfirmation: Yup.string().required("Required"),
    })

    const signUpMutation = useMutation({
        mutationFn:(data:SignUpData) => axios.post(SIGN_UP, data),
        onSuccess: (data)=> {
            setToken(data.data.token)
            setStatus("Login Success")
        },
        onError: () => {
            setStatus("It was not possible to sign Up")
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
            <h1 className={"text-5xl font-bold text-primary mb-3"}>Sign Up</h1>
            <Formik initialValues={{email: "", password: "", passwordConfirmation: "", firstName: "", lastName: "", phone: ""}}
                    validationSchema={signUpSchema}
                    onSubmit={(values, actions) => {
                        const signUpData : SignUpData = {
                            email: values.email,
                            password: values.password,
                            firstName: values.firstName,
                            lastName: values.lastName,
                            phone: parseInt(values.phone)
                        }
                        signUpMutation.mutate(signUpData)
                        actions.setSubmitting(false);
                    }}>
                <Form>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <Field name={"firstName"} type={"text"} className={"input input-bordered"}/>
                        <ErrorMessage name={"firstName"} component={"div"} className={"text-error"}/>

                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <Field name={"lastName"} type={"text"} className={"input input-bordered"}/>
                        <ErrorMessage name={"lastName"} component={"div"} className={"text-error"}/>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <Field name={"email"} type={"text"} className={"input input-bordered"}/>
                        <ErrorMessage name={"email"} component={"div"} className={"text-error"}/>

                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <Field name={"phone"} type={"text"} className={"input input-bordered"}/>
                        <ErrorMessage name={"phone"} component={"div"} className={"text-error"}/>

                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <Field name={"password"} type={"password"} className={"input input-bordered"}/>
                        <ErrorMessage name={"password"} component={"div"} className={"text-error"}/>
                        <label className="label">
                            <span className="label-text">Password Confirmation</span>
                        </label>
                        <Field name={"passwordConfirmation"} type={"password"} className={"input input-bordered"}/>
                        <ErrorMessage name={"passwordConfirmation"} component={"div"} className={"text-error"}/>
                        <button type={"submit"} className={"btn btn-primary mt-5"}>Submit</button>
                    </div>
                </Form>
            </Formik>
            <div className={"w-full mx-auto"}>
                Already registered?
                <Link to={"/signin"} className={"text-primary hover:underline-offset-1"}> Sign In</Link>
            </div>
            <p>{status}</p>
        </div>
    </>

}