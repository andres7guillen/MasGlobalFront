interface IEmployeeModel
{
    id:number; 
    name: string; 
    contractTypeName: string;
    roleId: number;
    roleName: string; 
    roleDescription: string; 
    hourlySalary: number; 
    monthlySalary: number; 
    annualSalary: number; 
}

export class EmployeeModel implements IEmployeeModel
{
    id:number; 
    name: string; 
    contractTypeName: string;
    roleId: number;
    roleName: string; 
    roleDescription: string; 
    hourlySalary: number; 
    monthlySalary: number; 
    annualSalary: number;
}