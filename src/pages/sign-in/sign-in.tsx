import {Navbar} from "@/components/navbar";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";

interface SignInProps {
}

export const SignIn: React.FunctionComponent<SignInProps> = (props) => {

        const SignInSchema = Yup.object().shape({
            email: Yup.string().required("Required"),
            password: Yup.string().required("Required"),
        })

        return <>
            <Navbar/>
            <div className="overflow-x-auto w-9/12 mx-auto mt-5">
                <h1 className={"text-5xl font-bold text-primary mb-3"}>Sign In</h1>

                <Formik initialValues={
                    {
                        email: "",
                        password: "",
                    }
                } onSubmit={
                    (values, actions) => {
                        console.log(values)
                        actions.setSubmitting(false);
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
            </div>
        </>;
    }
;