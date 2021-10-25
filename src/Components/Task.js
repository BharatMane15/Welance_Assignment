import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Task.css";
const Task = () => {
  const [dog1, setDog1] = useState();
  const [dog2, setDog2] = useState();
  const [dog3, setDog3] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get(
        `https://dog.ceo/api/breed/boxer/images/random`
      );
      setDog1(res.data.message);

      const { data } = await axios.get(
        `https://dog.ceo/api/breed/akita/images/random`
      );
      setDog2(data.message);
      console.log(data.message);
      const result  = await axios.get(
        `https://dog.ceo/api/breed/rottweiler/images/random`


      );
      setDog3(result.data.message);
    };
    fetchApi();
  }, []);

  return (
    <>
      <div className="container">
        <div className={`${"row"} ${"row1"}`}>
          <img src={dog1} alt="dog" />
        </div>
        <div className={`${"row"} ${"row2"}`}>
          <img src={dog2} alt="dog" />
        </div>
        <div className={`${"row"} ${"row3"}`}>
          <img src={dog3} alt="dog" />
        </div>
      </div>
    </>
  );
};
export default Task;
