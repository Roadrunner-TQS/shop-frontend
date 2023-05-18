import {Navbar} from "@/components/navbar";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import React from "react";


interface PaymentProps {
}

export const Payment: React.FunctionComponent<PaymentProps> = (props) => {

    const paymentSchema = Yup.object().shape({
        cardNumber: Yup.string().required("Required"),
        cardName: Yup.string().required("Required"),
        cardExpiration: Yup.date().required("Required"),
        cardCvv: Yup.string().required("Required"),
        pickUpService: Yup.string().required("Required"),
        pickUpPoint: Yup.string().required("Required"),
    })

    return <>
        <Navbar/>
        <div className="overflow-x-auto w-9/12 mx-auto mt-5">
            <h1 className={"text-5xl font-bold text-primary mb-3"}>Payment</h1>
            <Formik initialValues={{cardNumber: "", cardName: "", cardExpiration: "", cardCvv: "", pickUpService: "", pickUpPoint: ""}}
                    validationSchema={paymentSchema}
                    onSubmit={(values, actions) => {
                        console.log(values)
                        actions.setSubmitting(false);
                    }}>
                <Form>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Card number</span>
                        </label>
                        <Field name={"cardNumber"} type={"text"} className={"input input-bordered"}/>
                        <ErrorMessage name={"cardNumber"} component={"div"} className={"text-error"}/>

                        <label className="label">
                            <span className="label-text">Card name</span>
                        </label>
                        <Field name={"cardName"} type={"text"} className={"input input-bordered"}/>
                        <ErrorMessage name={"cardName"} component={"div"} className={"text-error"}/>

                        <label className="label">
                            <span className="label-text">Card expiration</span>
                        </label>
                        <Field name={"cardExpiration"} type={"date"} className={"input input-bordered"}/>
                        <ErrorMessage name={"cardExpiration"} component={"div"} className={"text-error"}/>
                        <label className="label">
                            <span className="label-text">Card CVV</span>
                        </label>
                        <Field name={"cardCvv"} type={"text"} className={"input input-bordered"}/>
                        <ErrorMessage name={"cardCvv"} component={"div"} className={"text-error"}/>
                        <label className="label">
                            <span className="label-text">PickUp Service</span>
                        </label>
                        <Field name={"pickUpService"} as={"select"} className={"input input-bordered"}>
                            <option value={"roadrunner"}>RoadRunner</option>
                            <option value={"ctt"}>CTT</option>
                            <option value={"mrw"}>MRW</option>
                        </Field>
                        <ErrorMessage name={"pickUpService"} component={"div"} className={"text-error"}/>

                        {/*Select the PickUpPoint*/}
                        <label className="label">
                            <span className="label-text">PickUp Point</span>
                        </label>
                        <Field name={"pickUpPoint"} as={"select"} className={"input input-bordered"}>
                            <option value={"roadrunner"}>GALP - Rua da Constituição</option>
                            <option value={"ctt"}>GALP - Rua de Santa Catarina</option>
                            <option value={"mrw"}>GALP - Rua de Camões</option>
                        </Field>
                        <ErrorMessage name={"pickUpPoint"} component={"div"} className={"text-error"}/>

                        <button type={"submit"} className={"btn btn-primary mt-5"}>Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>

    </>
};

