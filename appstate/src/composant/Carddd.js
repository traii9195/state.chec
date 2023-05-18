import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import apis from '../data/Api';
import './Cardd.css';

const Carddd = () => {
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const [fullname, setFullname] = useState(''); // State to store the entered full name
  const [phoneNumber, setPhoneNumber] = useState(''); // State to store the entered phone number

  const handleLogin = () => {
    setShowModal(true);
  };

  const handleSave = () => {
    // Perform login logic using the entered full name and phone number
    console.log('Full Name:', fullname);
    console.log('Phone Number:', phoneNumber);

    // Close the modal and reset the form fields
    setShowModal(false);
    setFullname('');
    setPhoneNumber('');
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='c'>
      {apis.map((api, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={api.img} className='image' />
          <Card.Body>
            <Card.Title>{api.Fullname}</Card.Title>
            <Card.Text>
              {api.Bio}
            </Card.Text>
            <Button variant="success" onClick={handleLogin}>Login</Button>
          </Card.Body>
        </Card>
      ))}

      {/* Modal for the login pop-up */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header >
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Carddd;
