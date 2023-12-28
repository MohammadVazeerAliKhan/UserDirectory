import React from "react";

const UserProfile = ({ user }) => {
  // console.log(user);
  return (
    <>
      <div>
        <h3>{user?.name}</h3>
        <h4>
          {user?.username} | {user?.company?.catchPhrase}
        </h4>
      </div>

      <div>
        <p>
          {user?.address?.street}, {user?.address?.suite}
        </p>
        <p>
          {user?.address?.city}, {user?.address?.zipcode}
        </p>
        <p>
          {user?.email} | {user?.phone}
        </p>
      </div>
    </>
  );
};

export default UserProfile;

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// }
