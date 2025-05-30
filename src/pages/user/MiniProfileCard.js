// // import  { useEffect, useState } from 'react';
// // import axios from 'axios';
// // // import '../App.css'; 


// // function MiniProfileCard({ userId, onClose }) {
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     axios.get(`http://localhost:8080/getUserById/2`)
// //       .then(res => setUser(res.data))
// //       .catch(err => console.error("Failed to fetch profile", err));
// //   }, [userId]);

// //   if (!user) return null;

// //   return (
// //     <div className="profile-dropdown-card">
// //       <div className="profile-info">
// //         <strong>{user.name}</strong>
// //         <p style={{ marginBottom: '5px' }}>{user.email}</p>
// //         <button className="btn btn-sm btn-outline-danger" onClick={onClose}>Close</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default MiniProfileCard;

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Button, CardBody, Col, Container,Row,Card } from 'react-bootstrap';

// function MiniProfileCard({ userId, onClose }) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:8080/getUserById/${userId}`)
//       .then(res => setUser(res.data))
//       .catch(err => console.error("Failed to fetch profile", err));
//   }, [userId]);

//   if (!user) return null;

//   return (
//     <div className="profile-dropdown-card">
//       {/* <div className="profile-info">
//         <strong>{user.name}</strong>
//         <p>{user.email}</p>
//         <button className="close-btn" onClick={onClose}>Close</button>
//       </div> */}
//       <Container >
//         <Row>
//           <Col>
//          <Card className="profile-info w-100" style={{padding: '15px' }}>
//            <CardBody>
//             <Card.Title><strong>{user.name}</strong></Card.Title>
//             <Card.Text>{user.email}</Card.Text>
//             <Button className="close-btn" onClick={onClose}>Close</Button>
//           </CardBody>
//          </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default MiniProfileCard;


import { useEffect, useState } from 'react';
import axios from 'axios';

function MiniProfileCard({ userId, onClose }) {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   axios.get(`http://localhost:8080/getUserById/${userId}`)
  //     .then(res => setUser(res.data))
  //     .catch(err => console.error("Failed to fetch profile", err));
  // }, [userId]);

  // if (!user) return null;

  useEffect(() => {
  if (userId != null) {
    axios.get(`http://localhost:8080/getUserById/${userId}`)
      .then(res => setUser(res.data))
      .catch(err => console.error("Failed to fetch profile", err));
  }
}, [userId]);
if (!user) return <p>Loading user...</p>;

  return (
    // <div className="absolute top-14 right-0 w-100 bg-white h-100 rounded-lg shadow-lg z-50 border p-4">
    <div className=" p-5">
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold mb-1">{user.name}</h2>
        <p className="text-sm text-gray-600 mb-1">{user.email}</p>
        {/* <p className="text-sm text-gray-400 mb-3">ID: {user.id}</p> */}
        {/* <button onClick={onClose} className="self-end text-red-500 text-sm hover:underline">Close</button> */}
      </div>
    </div>
  );
}

export default MiniProfileCard;
