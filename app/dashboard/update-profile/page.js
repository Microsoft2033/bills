"use client"
import { useFormik} from "formik";
import * as yup from "yup";
import { TextField,Button } from "@mui/material";
import { FaUserEdit } from "react-icons/fa";
const schema = yup.object().shape({
    firstName: yup.string().required().min(3),
    lastName: yup.string().required().min(3),
    phone: yup.string().required().min(11).max(17),
    address: yup.string().required().min(12).max(300),
});
export default function updateProfile() {
    const { handleSubmit, handleChange, handleBlur, errors, touched, values } = useFormik({
        initialValues: { firstName: "", lastName: "", phone: "", address: "" },
        onSubmit: () => { },
        validationSchema: schema
    });
    // console.log(values.firstName);
    
    return (
        <main className="min-h-screen px-2 md:px-16 lg:px-20 py-16 flex justify-center bg-gray-200">
            <div className="w-full md:w-[400px] p-4 rounded-md bg-gray-50">
            <blockquote>
                <FaUserEdit className="text-2xl"/>
                <span className="block text-2xl">update your profile</span>
                </blockquote>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-3">
                        <TextField type="text"
                            id="firstName"
                            label="first Name"
                            variant="outlined"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="ademola"
                        className="w-full"/>

                    {touched.firstName && errors.firstName ? <span className="text-xs text-red-500">{ errors.firstName}</span> : null}
                    </div>
                    <div className="mb-3">
                        <TextField type="text"
                            id="lastName"
                            label="last Name"
                            variant="outlined"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="ademola"
                        className="w-full"/>

                    {touched.lastName && errors.lastName ? <span className="text-xs text-red-500">{ errors.lastName}</span> : null}
                    </div>
                    <div className="mb-3">
                        <TextField type="tel"
                            id="phone"
                            label="Phone"
                            variant="outlined"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="12333"
                        className="w-full"/>

                    {touched.phone && errors.phone ? <span className="text-xs text-red-500">{ errors.phone}</span> : null}
                    </div>
                    <div className="mb-3">
                        <TextField type="text"
                            multiline
                            rows={4}
                            id="address"
                            label="Address"
                            variant="outlined"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="ademola"
                        className="w-full"/>

                    {touched.address && errors.address ? <span className="text-xs text-red-500">{ errors.address}</span> : null}
                    </div>
                    <Button type="submit" variant="contained">update profile</Button>
                </form>
            </div>

        </main>
    )
}