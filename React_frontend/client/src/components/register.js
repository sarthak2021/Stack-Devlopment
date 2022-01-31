import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Register = () => {
    const [inpval, setINP] = useState({

        empcode: "",
        name: "",
        department: "",
        Gender: "",
        dob: "",
        joiningDate: "",
        PrevExperiance: "",
        Salary: "",
        Address: ""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }




    return (
        <div className="container">
            <NavLink to="/">home</NavLink>
            <form className="mt-4">
                <div className="col">
                    <div class="col-md-6">
                        <label for="exampleInputEmail1" class="form-label">EmpCode</label>
                        <input type="number text" value={inpval.empcode} onChange={setdata} name="empcode" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="col-md-6 ">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="col-md-4">
                        <label for="inputState">Department</label>
                        <select id="dep" name="department" value={inpval.department} onChange={setdata} class="form-select">
                            <option selected>Choose...</option>
                            <option>Admin</option>
                            <option>Accounts</option>
                            <option>Technology</option>
                        </select>
                    </div>


                    <div class="col-md-4">
                        <label for="inputState" class="form-label">Gender</label>
                        <select id="gen" name="Gender" value={inpval.Gender} onChange={setdata} class="form-select">
                            <option selected>Choose...</option>
                            <option>Female</option>
                            <option>Male</option>

                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="dob" class="form-label">DOB</label>
                        <input type="date" value={inpval.dob} name="dob" onChange={setdata} class="form-control" id="dob" />
                    </div>

                    <div class="col-md-3">
                        <label for="jdate" class="form-label">JoiningDate</label>
                        <input type="date" value={inpval.JoiningDate} name="jdate" onChange={setdata} class="form-control" id="jdate" />
                    </div>

                    <div class="col-md-6">
                        <label for="salary" class="form-label">Prev Experiance</label>
                        <input type="number" value={inpval.PrevExperiance} onChange={setdata} name="prevexp" class="form-control" id="prevexp" />
                    </div>
                    <div class="col-md-6">
                        <label for="salary" class="form-label">Salary</label>
                        <input type="number" value={inpval.Salary} onChange={setdata} name="salary" class="form-control" id="salary" />
                    </div>
                    <div class="col-md-12">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <textarea name="Address" value={inpval.Address} onChange={setdata} className="form-control" id="" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Register;
