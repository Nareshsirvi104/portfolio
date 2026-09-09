// src/pages/contact.js
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Alert from '../components/Alert';

const fieldClass =
  'peer w-full bg-white/5 border border-white/10 rounded-md p-3 pt-5 text-white placeholder-transparent focus:outline-none focus:border-accent-orange transition-colors duration-300';

const labelClass =
  'absolute left-3 top-1 text-xs text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-accent-orange';

const Contact = () => {
  const form = useRef();
  const [alert, setAlert] = useState({ isVisible: false, message: '', type: '' });
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm('service_c9eyevp', 'template_a7vq6qg', form.current, '2i_8Xs0yJ3Qd-le14')
      .then(
        () => {
          setAlert({
            isVisible: true,
            message: 'Your message has been sent successfully!',
            type: 'success',
          });
          e.target.reset();
          setSending(false);
        },
        () => {
          setAlert({
            isVisible: true,
            message: 'Something went wrong. Please try again.',
            type: 'error',
          });
          setSending(false);
        }
      );
  };

  const closeAlert = () => setAlert({ isVisible: false, message: '', type: '' });

  return (
    <section id="contact" className="min-h-screen bg-black/50 text-white py-20 px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 max-w-2xl mx-auto"
      >
        <span className="text-accent-orange uppercase tracking-widest text-sm font-semibold">Get in touch</span>
        <h2 className="text-4xl font-bold mt-2 mb-2">
          Contact <span className="gradient-text">Me</span>
        </h2>
        <p className="text-gray-400">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </motion.div>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto flex flex-col space-y-6 glass p-8 rounded-2xl border border-white/5"
      >
        <div className="relative">
          <input name="name" id="name" type="text" placeholder=" " required className={fieldClass} />
          <label htmlFor="name" className={labelClass}>Your Name</label>
        </div>

        <div className="relative">
          <input name="email" id="email" type="email" placeholder=" " required className={fieldClass} />
          <label htmlFor="email" className={labelClass}>Your Email</label>
        </div>

        <div className="relative">
          <textarea name="message" id="message" rows="5" placeholder=" " required className={fieldClass} />
          <label htmlFor="message" className={labelClass}>Your Message</label>
        </div>

        <motion.button
          type="submit"
          disabled={sending}
          whileHover={{ scale: sending ? 1 : 1.03 }}
          whileTap={{ scale: sending ? 1 : 0.97 }}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent-orange to-accent-pink hover:opacity-90 disabled:opacity-60 p-3 rounded-md text-white font-bold transition-opacity duration-300"
        >
          {sending ? (
            <motion.span
              className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
            />
          ) : (
            <>
              Send Message <FaPaperPlane />
            </>
          )}
        </motion.button>

        <div className="flex justify-center gap-6 text-xl pt-2">
          <a href="https://github.com/Nareshsirvi104" target="_blank" rel="noreferrer" className="hover:text-accent-orange transition-colors">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/naresh-sirvi-526b27277" target="_blank" rel="noreferrer" className="hover:text-accent-orange transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/mr_sirvi_11" target="_blank" rel="noreferrer" className="hover:text-accent-orange transition-colors">
            <FaInstagram />
          </a>
        </div>
      </motion.form>

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
