
create database HR
create table Employee(
Emp_Code varchar(990) primary key,
Emp_Name varchar(100),
Department varchar(500),
Emp_Gender Varchar (10),
Emp_DOB date,
Emp_Joining_Date date,
Emp_Previous_Experiance int,
Emp_Salary int,
Emp_Address varchar(1000)
)

create table Department(
DepartmentName varchar(50)
)
create table GenderDate(
Gender varchar(20)
)
select * from GenderData,Department
insert into GenderData(Gender) values(
'Male')


select * from Employee

