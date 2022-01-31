using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using WebAPI.Model;


namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private readonly IConfiguration _configuration;
        public EmployeeController(IConfiguration configuration)
        {
            _configuration = configuration;
            
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select Emp_Code, Emp_Name, Department,Emp_Gender,
                    convert(varchar(10),Emp_DOB,120) as Emp_DOB
                    ,convert(varchar(10),Emp_Joining_Date,120) as Emp_Joining_Date,
                    Emp_Previous_Experiance, Emp_Salary, Emp_Address
                    from dbo.Employee
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
        
        [HttpPost]
        public JsonResult Post(Employee emp)
        {
            string query = @"
                    insert into dbo.Employee 
                    (Emp_Code, Emp_Name, Department,Emp_Gender,Emp_DOB,Emp_Joining_Date,
                    Emp_Previous_Experiance, Emp_Salary, Emp_Address)
                    values 
                    (
                    '" + emp.Emp_Code + @"'
                    ,'" + emp.Emp_Name + @"'
                    ,'" + emp.Department + @"'
                    ,'" + emp.Emp_Gender + @"'
                    ,'" + emp.Emp_DOB + @"'
                    ,'" + emp.Emp_Joining_Date + @"'
                    ,'" + emp.Emp_Previous_Experiance + @"'
                    ,'" + emp.Emp_Salary + @"'
                    ,'" + emp.Emp_Address + @"')
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");


            
        }
        [HttpPut]
        public JsonResult Put(Employee emp)
        {
            string query = @"
                    update dbo.Employee set 
                    Emp_Name = '" + emp.Emp_Name + @"'
                    ,Department = '" + emp.Department + @"'
                    ,Emp_Gender = '" + emp.Emp_Gender + @"'
                    ,Emp_DOB = '" + emp.Emp_DOB + @"'
                    ,Emp_Joining_Date = '" + emp.Emp_Joining_Date + @"'
                    ,Emp_Previous_Experiance = '" + emp.Emp_Previous_Experiance + @"'
                    ,Emp_Salary = '" + emp.Emp_Salary + @"'
                    ,Emp_Address = '" + emp.Emp_Address + @"'
                    where Emp_Code = " + emp.Emp_Code + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }
        [HttpDelete("{code}")]
        public JsonResult Delete(int code)
        {
            string query = @"
                    delete from dbo.Employee
                    where Emp_Code = " + code + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }
        [Route("GetAllDepartmentNames")]
        public JsonResult GetAllDepartmentNames()
        {
            string query = @"
                    select DepartmentName from dbo.Department
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
        
        [Route("GetAllGenderData")]
        public JsonResult GetAllGenderData()
        {
            string query = @"
                    select Gender from dbo.GenderData
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
    }
}
