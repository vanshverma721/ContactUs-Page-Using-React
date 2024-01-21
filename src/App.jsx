import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ContactHeader from './components/ContactHeader/ContactHeader'
import "./App.css";
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div>
      <Navbar />
      <ContactHeader />
      <ContactForm />
    </div>
  )
}

export default App