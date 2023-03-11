import React from "react";
import {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
function Mongo() {

    const [data, setData] = useState([]);
    const [call, setcall] = useState(0);

    useEffect(() => {
        fetch(
          `http://localhost:3031/posts/list`,
          {
            method: "GET",
          }
        )
          .then(res => res.json())
          .then(response => {
            console.log(response);
            setData(response.data);
          })
          .catch(error => console.log(error));
      }, []);
  
    return(
        <div>
        <Header/>
        
        <h1>List from server{"\n"}</h1>
        {data.map((item) => {
          return (
            <div>
              {item['Expected_Users']}
            </div>
          )
        })}
          <Footer/>
        </div>
    );
  }
  export default Mongo;