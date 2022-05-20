import React, { createContext,Component } from "react";
import axios from 'axios';
export const MyContext = createContext();

// Define the base URL
const Axios = axios.create({
    baseURL: 'http://localhost:800/react-php-crud/api/',
});

class MyContextProvider extends Component{

  userlistall  = async () => {
    const userlistalls = await Axios.get(`client-all.php`);
    return userlistalls.data;
  }
  deleteUserall  = async (id) => {
    const deleteUseralls = await Axios.post(`client-delete.php`,{
      userid: id,
    });
    return deleteUseralls.data;
  }
  insertUser  = async (userInfo) => {
    const insertUsers = await Axios.post(`client-add.php`,{
      name: userInfo.name,
      email: userInfo.email,
    });
    return insertUsers.data;
  }
  fetchUserall  = async (id) => {
    const fetchUseralls = await Axios.post(`client-edit.php`,{
      userid: id,
    });
    return fetchUseralls.data;
  }
  updateUser  = async (userInfo,id) => {
    const updateUsers = await Axios.post(`client-update.php`,{
      name: userInfo.name,
      email: userInfo.email,
      userid: id,
    });
    return updateUsers.data;
  }
        
render(){
  const contextValue = {
    userlistall:this.userlistall,
    deleteUserall:this.deleteUserall,
    insertUser:this.insertUser,
    fetchUserall:this.fetchUserall,
    updateUser:this.updateUser,
  }
  return(
    <MyContext.Provider value={contextValue}>
      {this.props.children}
    </MyContext.Provider>
  )
}

}

export default MyContextProvider;