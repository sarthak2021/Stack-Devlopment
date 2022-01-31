import React from 'react';

const Employees = () => {
    return (
        <div className="mt-5">
            <div className="container>">
                <div className="add_btn mt-2">
                    <button className="btn btn-primary">Add Employee</button>
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Emp Code</th>
                            <th scope="col">Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Gender</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Joining Date</th>
                            <th scope="col">Prev Exp (years)</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>A1</td>
                            <td>Sarthak</td>
                            <td>Admin</td>
                            <td>Male</td>
                            <td>20-02-2001</td>
                            <td>01-01-2022</td>
                            <td>5</td>
                            <td>40000</td>
                            <td>Kalyan</td>
                            <td className="d-flex justify-content-between">
                                <button className="d-flex btn btn-primary"><i class="far fa-edit"></i></button>
                                <button className="d-flex btn btn-danger"><i class="fas fa-user-minus"></i></button>     
                            </td>
                            
                            
                        </tr>
                        
                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default Employees