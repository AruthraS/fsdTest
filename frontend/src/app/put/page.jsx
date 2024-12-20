"use client";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./page.css";

const schema = yup.object({
    name: yup.string().required(),
    emp_id: yup.string().required().matches(/^[a-zA-Z0-9]{10}$/, "Employee Id must contain only alphanumeric characters and should be 10 charavters long"),
    email: yup.string().email('Not a valid email').required(),
    ph_number: yup.string().matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits').required(),
    dept: yup.string().required(),
    doj: yup.date().required(),
    role: yup.string().required()
})

const page = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async (data) => {
        try{
            const response = await axios.post("http://localhost:8000/add", data);
            console.log(response);
            window.alert(JSON.stringify(response.data.messages[0]));
            reset();
        }
        catch(err){
            const data = err.response.data.messages[0];
            console.log(err);
            window.alert(JSON.stringify(data));
        }
    };
    const on_reset = ()=>{
        reset();
    }
    return (
        <div className="form-page">
            <div className="form-container">
                <h2>Employee Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Name:</label>
                    <input
                        type="text"
                        {...register("name")}
                        placeholder="Enter your name"
                    />
                    {errors.name && <span style={{color: "red"}}>* {errors.name.message}</span>}
                    <label>Employee ID:</label>
                    <input
                        type="text"
                        {...register("emp_id")}
                        placeholder="Enter your employee ID"
                    />
                    {errors.emp_id && <span style={{ color: "red" }}>* {errors.emp_id.message}</span>}
                    <label>Email:</label>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Enter your email"
                    />
                    {errors.email && <span style={{ color: "red" }}>* {errors.email.message}</span>}
                    <label>Phone No:</label>
                    <input
                        type="text"
                        {...register("ph_number", { required: true })}
                        placeholder="Enter your phone number"
                    />
                    {errors.ph_number && <span style={{ color: "red" }}>* {errors.ph_number.message}</span>}
                    <label>Department:</label>
                    <select {...register("dept")}>
                        <option value="">Select Department</option>
                        <option value="HR">HR</option>
                        <option value="Engineering">Engineering</option>
                    </select>
                    {errors.dept && <span style={{ color: "red" }}>* {errors.dept.message}</span>}
                    <label>Date of Joining:</label>
                    <input type="date" {...register("doj", { required: true })} max={new Date().toISOString().split("T")[0]} />
                    {errors.doj && <span style={{ color: "red" }}>* {errors.doj.message}</span>}
                    <label>Role:</label>
                    <input
                        type="text"
                        {...register("role", { required: true })}
                        placeholder="Enter your role"
                    />
                    {errors.role && <span style={{ color: "red" }}>* {errors.role.message}</span>}
                    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                        <button type="submit">Submit</button>
                        <button onClick={on_reset}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;
