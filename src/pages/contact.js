// src/pages/Contact.js
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Alert from '../components/Alert'; // Import the new Alert component

const Contact = () => {
  const form = useRef();
  const [alert, setAlert] = useState({ isVisible: false, message: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_c9eyevp', 'template_a7vq6qg', form.current, '2i_8Xs0yJ3Qd-le14')
      .then((result) => {
        // Show a success alert
        setAlert({
          isVisible: true,
          message: 'Your message has been sent successfully!',
          type: 'success',
        });
        e.target.reset(); // Reset the form fields
      }, (error) => {
        // Show an error alert
        setAlert({
          isVisible: true,
          message: 'Something went wrong. Please try again.',
          type: 'error',
        });
      });
  };

  const closeAlert = () => {
    setAlert({ isVisible: false, message: '', type: '' });
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white p-10">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto flex flex-col space-y-4">
        <input name="name" type="text" placeholder="Your Name" className="p-2 bg-gray-800 rounded" required />
        <input name="email" type="email" placeholder="Your Email" className="p-2 bg-gray-800 rounded" required />
        <textarea name="message" rows="5" placeholder="Your Message" className="p-2 bg-gray-800 rounded" required />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 p-2 rounded text-white">Send</button>
      </form>

      {/* Render the custom alert component */}
      <Alert
        message={alert.message}
        type={alert.type}
        isVisible={alert.isVisible}
        onClose={closeAlert}
      />
    </section>
  );
};

export default Contact;