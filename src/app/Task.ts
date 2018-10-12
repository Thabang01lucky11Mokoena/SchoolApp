export class Task{
    UserName: string;
    LastName: string;
    StudentNo: string;
    EmpArr = []

    constructor(UserName, LastName, StudentNo){
        this.UserName = UserName;
        this.LastName = LastName;
        this.StudentNo = StudentNo;
    }
}