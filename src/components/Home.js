import React, { useState, useEffect } from "react";
import "../static/css/home.css";
import Transfer from "./Transfer.js";

import { getContractStorage } from "../tezos";

function Home() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchStorage = async () => {
      // Fetch data from contract
      let storage = await getContractStorage();
      let devs = await storage.devs;
      let bigMap_id = await devs.toString();

      fetch(`https://api.ithacanet.tzkt.io/v1/bigmaps/${bigMap_id}/keys`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((data) => data.json())
        .then((result) => {
          console.log(result);
          setUserData(result);
        });

      // Alternative:
      // console.log(await devs.get(0));
      // let users = [];
      // for (let i = 0; i < 4; i++) {
      //   users.push(await devs.get(i));
      // }
      // setUserData(users);
    };
    fetchStorage();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {userData.map((user, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <div className="card-header">
                <div className="address">{user.value.address}</div>
              </div>
              <div className="card-body">
                <h2 className="name">{user.value.name}</h2>
                <p className="bio">{user.value.bio}</p>
                <Transfer address={user.value.address} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
