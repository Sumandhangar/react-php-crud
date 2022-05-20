import React from 'react';
import {Link} from "react-router-dom";
import ListAll from "./ListAll";

const Home = () => {
  return (
    <div>
      <h1>React JS and PHP MySQLi CRUD application with React Context API</h1>
      <div className="wrapper">
        <section className="left-side">
          <Link to={`/AddForm`}> Add New </Link>
        </section>
        <section className="right-side">
          <ListAll />
        </section>
      </div>
    </div>
  )
}
export default Home
