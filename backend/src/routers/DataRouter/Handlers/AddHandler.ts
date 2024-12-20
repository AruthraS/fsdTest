import {Request, Response} from 'express';
import addData from '../../../models/addData';
import { fetchById, fetchByEmail, fetchByPh_number } from '../../../models/fetchData';

async function AddHandler(req: Request, res: Response) {
  const BodyData = req.body;
  const { name, emp_id, email, ph_number, dept, doj, role } = BodyData;
  if (!name || !emp_id || !email || !ph_number || !dept || !doj || !role) {
    console.log(BodyData);
    res.status(400).json({ messages: ['Please provide all the fields'] });
    return;
  }
  const data = {name, emp_id, email, ph_number, dept, doj, role};
  try{
    let result = await fetchById(emp_id);
    if(result.rows.length > 0){
      res.status(409).json({ messages: ['Employee with this ID already exists'] });
      return ;
    }
    result = await fetchByEmail(email);
    if(result.rows.length > 0){
      res.status(409).json({ messages: ['Employee with this Email already exists'] });
      return ;
    }
    result = await fetchByPh_number(ph_number);
    if(result.rows.length > 0){
      res.status(409).json({ messages: ['Employee with this Phone Number already exists'] });
      return ;
    }
    await addData(data);
    res.status(200).json({ messages: ['Data added successfully'] });
    return ;
  }
  catch(err){
    console.log(err);
    res.status(500).json({ messages: ['Internal Server Error'] });
    return ; 
  }
}

export default AddHandler;