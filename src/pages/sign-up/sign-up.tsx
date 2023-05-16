import * as Yup from "yup";
import {Navbar} from "@/components/navbar";
import {ErrorMessage, Field, Form, Formik} from "formik";

interface SignUpProps {
}

export const SignUp: React.FunctionComponent<SignUpProps> = (props) => {


    const signUpSchema = Yup.object().shape({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().required("Required"),
        phone: Yup.string().required("Required").length(9, "Invalid phone number"),
        password: Yup.string().required("Required"),
        passwordConfirmation: Yup.string().required("Required"),
    })


    return <>
        <Navbar/>
        <div className="overflow-x-auto w-9/12 mx-auto mt-5">
            <h1 className={"text-5xl font-bold text-primary mb-3"}>Sign Up</h1>
            <Formik initialValues={{email: "", password: "", passwordConfirmation: "", firstName: "", lastName: "", phone: ""}}
                    validationSchema={signUpSchema}
                    onSubmit={(values, actions) => {
                        console.log(values)
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
                        <Field name={"password"} type={"text"} className={"input input-bordered"}/>
                        <ErrorMessage name={"password"} component={"div"} className={"text-error"}/>
                        <label className="label">
                            <span className="label-text">Password Confirmation</span>
                        </label>
                        <Field name={"passwordConfirmation"} type={"text"} className={"input input-bordered"}/>
                        <ErrorMessage name={"passwordConfirmation"} component={"div"} className={"text-error"}/>
                        <button type={"submit"} className={"btn btn-primary mt-5"}>Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    </>

}