import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';




const Addemployee = () => {

    const [inpval, setINP] = useState({
        Empcode:"",
        name:"",
        department:"",
        Gender:"",
        DOB:"",
        joiningDate:"",
        PrevExperiance:"",
        Salary:"",
        Address:""

        
        
    })

    const setdata =(e) => {
       
        // const {name,value} = e.target;
        // setINP((preval)=>{
        //     return {
        //         ...preval,
        //         [name]:value
        //     }
        // }
        // )
        console.log(e)
    }

    

    return (
        <div class="container">
            <NavLink to="/">Back</NavLink>
            <form method="get">

                <div class="col-md-3">
                    <label for="inputEmail4" class="form-label">Emp Code</label>
                    <input type="text" value={inpval.Empcode} name="empcode" onChange={setdata} class="form-control" id="emp code" />
                </div>
                <div class="col-md-6">
                    <label for="inputname4" class="form-label">Name</label>
                    <input type="text" value={inpval.name}  name="ename" onChange={setdata} class="form-control" id="name1" />
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">Department</label>
                    <select id="dep" name="dep" value={inpval.department}  onChange={setdata} class="form-select">
                        <option selected>Choose...</option>
                        <option>Admin</option>
                        <option>Accounts</option>
                        <option>Technology</option>
                    </select>
                </div>

                <div class="col-md-4">
                    <label for="inputState" class="form-label">Gender</label>
                    <select id="dep" name="Gender" value={inpval.Gender}  onChange={setdata} class="form-select">
                        <option selected>Choose...</option>
                        <option>Female</option>
                        <option>Male</option>
                        
                    </select>
                </div>

                <div class="col-md-3">
                    <label for="inputZip" class="form-label">DOB</label>
                    <input type="date" value={inpval.DOB} name="dob" onChange={setdata} class="form-control" id="dob" />
                </div>

                <div class="col-md-3">
                    <label for="inputZip" class="form-label">JoiningDate</label>
                    <input type="date" value={inpval.JoiningDate} name="joiningdate" onChange={setdata} class="form-control" id="jdate" />
                </div>
                
                <div class="col-md-4">
                    <label for="inputprevexp" class="form-label">PrevExperiance</label>
                    <input type="number" value={inpval.PrevExperiance} name="prevexp" onChange={setdata} class="form-control" id="prev exp" />
                </div>

                <div class="col-md-4">
                    <label for="inputsalary" class="form-label">Salary</label>
                    <input type="number" value={inpval.Salary} name="salary" onChange={setdata} class="form-control" id="salary" />
                </div>

                <div class="col-10">
                    <label for="inputAddress2" class="form-label">Address</label>
                    <input type="text" value={inpval.Address} name="address" onChange={setdata} class="form-control" id="addres" placeholder="Apartment, floor" />
                </div>

                <div class="col-12">
                    <button type="submit" class="btn btn-primary" >Sign in</button>
                </div>


            </form>

        </div>
    )
}

export default Addemployee