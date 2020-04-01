import React from 'react';
import Contact from './components/Contact'
import ContactList from './components/ContactList'

function App() {
  return (
    <div>
      <Contact name="Kristin Curtis" avatar="https://randomuser.me/api/portraits/women/63.jpg" online />
      <Contact name="Alice Hunter" avatar="https://randomuser.me/api/portraits/women/35.jpg" offline />
      <Contact name="Kirk Burns" avatar="https://randomuser.me/api/portraits/men/79.jpg" online />
      <ContactList />
    </div>
  );
}

export default App;
