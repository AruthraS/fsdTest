import DB from "../utils/db";

export async function fetchById(emp_id:string){
    const db = new DB();
    const conn = db.connectDb();
    const query = `SELECT * FROM employees WHERE emp_id = $1;`;
    const values = [emp_id];
    const result = await conn?.query(query,values);
    await db.disconnectDb();
    return result;
}

export async function fetchByEmail(email:string){
    const db = new DB();
    const conn = db.connectDb();
    const query = `SELECT * FROM employees WHERE email = $1;`;
    const values = [email];
    const result = await conn?.query(query,values);
    await db.disconnectDb();
    return result;
}

export async function fetchByPh_number(ph_number:string){
    const db = new DB();
    const conn = db.connectDb();
    const query = `SELECT * FROM employees WHERE ph_number = $1;`;
    const values = [ph_number];
    const result = await conn?.query(query,values);
    await db.disconnectDb();
    return result;
}

export async function fetchAll(){
    const db = new DB();
    const conn = db.connectDb();
    const query = `SELECT * FROM employees;`;
    const result = await conn?.query(query);
    await db.disconnectDb();
    return result;
}