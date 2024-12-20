import DB from "../utils/db";

type DataType = {
    name: string,
    emp_id: string,
    email: string,
    ph_number: string,
    dept: string,
    doj: string,
    role: string,

}

async function addData(data: DataType){
    const db = new DB();
    const conn = db.connectDb();
    const query = `INSERT INTO employees ("name","emp_id","email","ph_number","dept","doj","role") VALUES ($1,$2,$3,$4,$5,$6,$7);`;
    const values = [data.name,data.emp_id,data.email,data.ph_number,data.dept,data.doj,data.role];
    await conn?.query(query,values);
    await db.disconnectDb();
}

export default addData;