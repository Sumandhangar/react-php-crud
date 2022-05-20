import React,{useContext,useState,useEffect} from 'react';
import { MyContext } from '../contexts/MyContext';
import { useHistory } from "react-router-dom";

const EditForm = (props) => {
  let history = useHistory();
  const {fetchUserall,updateUser} = useContext(MyContext);

  useEffect( () => {
    window.scrollTo(0, 0);
    fetchUser(props.match.params.EditID);
  }, []); 

  const [isfetchuser, setfetchuser] = useState(false);
  const fetchUser = async (ids) => {
    try {
      const fetchUserlist = await fetchUserall(ids);
      if(fetchUserlist.success === true){
        setuserInfo({
          ...userInfo,
          name:fetchUserlist.editlist.user_name,
          email:fetchUserlist.editlist.user_email,
        });
        setfetchuser(true);
      }
    } catch (error) { throw error;}    
  }

  const [userInfo, setuserInfo] = useState({
    name: '',
    email: '',
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]:e.target.value
    });
  } 
 
  // Update into the Database.
  const editUser = async(event) => {
    try {
      event.preventDefault();
      event.persist();
      const data = await updateUser(userInfo,props.match.params.EditID);
      if(data.success === true){
        history.push(`/`);
        event.target.reset();
        return;
      }
    } catch (error) { throw error;}    
  };
 
return ( <>
  {isfetchuser === true && 
    <form className="insertForm" onSubmit={editUser}>
      <h2>Edit Form</h2>
      <label htmlFor="_name">Name</label>
      <input
        type="text"
        id="_name"
        name="name"
        value={userInfo.name}
        onChange={onChangeValue}
        placeholder="Enter name"
        autoComplete="off"
        required
      />
      <label htmlFor="_email">Email</label>
      <input
        type="email"
        id="_email"
        name="email"
        value={userInfo.email}
        onChange={onChangeValue}
        placeholder="Enter email"
        autoComplete="off"
        required
      />
      <input type="submit" value="Update" />
    </form> 
  }
</> );
};
export default EditForm;