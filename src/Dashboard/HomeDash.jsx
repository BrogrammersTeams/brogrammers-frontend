import React, { useEffect, useState } from "react";
import Users from "../AllUsers/AllUsers";
import { db } from "../firebase";

import "../AllUsers/AllUsers.css";
import Page from "../AllUsers/page";

const HomeDash = () => {
  let [Inbox, setinb] = useState([]);

  const SetInbox = () => {
    let Inboc = [];
    db.collection(`users`)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          let userdetails = { ...doc.data() };
          Inboc.push(userdetails);
        });
        setinb(Inboc);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  useEffect(() => {
    SetInbox();
  }, []);
  console.log(Inbox);

  return (
    <div>
      
        <Page />
      
    
        <div className="Hold">
          {Inbox.map((user) => (
            <Users
              uuid={user.uuid}
              bio={user.bio}
              name={user.fullName}
              image={user.image}
              email={user.email}
            />
          ))}
        </div>
   
    </div>
  );
};

export default HomeDash;
