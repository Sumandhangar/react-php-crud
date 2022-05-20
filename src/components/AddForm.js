import React,{useContext,useState} from 'react';
import { MyContext } from '../contexts/MyContext';
import { useHistory } from "react-router-dom";

const AddForm = () => {
  let history = useHistory();
  const { insertUser } = useContext(MyContext);
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
  // Inserting a new user into the Database.
  const submitUser = async(event) => {
    try {
      event.preventDefault();
      event.persist();
      const data = await insertUser(userInfo);
      if(data.success === true){
        history.push(`/`);
        event.target.reset();
        return;
      }
    } catch (error) { throw error;}    
  };

return (
  <form className="insertForm" onSubmit={submitUser}>
    <h2> Add Form </h2>
    <label htmlFor="_name">Name</label>
    <input
      type="text"
      id="_name"
      name="name"
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
      onChange={onChangeValue}
      placeholder="Enter email"
      autoComplete="off"
      required
    />
    <input type="submit" value="Insert" />
  </form>
);
};

export default AddForm;