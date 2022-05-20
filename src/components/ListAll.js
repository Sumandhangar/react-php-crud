import React,{useContext,useState,useEffect} from 'react';
import { MyContext } from '../contexts/MyContext';
import { Link } from "react-router-dom";

const ListAll = () => {
  const {userlistall,deleteUserall} = useContext(MyContext);
  useEffect( () => {
    window.scrollTo(0, 0);
    alluser();
  }, []); 

  const [isuser, setuser] = useState([]);
  const alluser = async (ids) => {
    try {
      const alluserpreview = await userlistall(ids);
      console.log(alluserpreview);
      if(alluserpreview.success === true){
        setuser(alluserpreview.fetchusers);
      }
    } catch (error) { throw error;}    
  }
  const deleteConfirm = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteUser(id);
    }
  };
  const deleteUser = async (id) => {
    try {
      const deleteUserlist = await deleteUserall(id);
      if(deleteUserlist.success === true){
        setuser([]);
        alluser();
      }
    } catch (error) { throw error;}    
  }


return ( <>
  {isuser.map((item,index)=>(
    <div className="list" key={item.id}>
      <p>Name: {item.user_name}</p>
      <p>Email: {item.user_email}</p>
      <Link  to={`EditForm/${item.id}`} className="btn default-btn"> Edit </Link>
      <button className="btn red-btn" onClick={() => deleteConfirm(item.id)}> Delete </button>
    </div>
  ))}
</> );
};
export default ListAll;