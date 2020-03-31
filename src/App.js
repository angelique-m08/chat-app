import React from 'react';
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Contact name="Kristin Curtis" avatar="https://randomuser.me/api/portraits/women/63.jpg" status="online" />
      <Contact name="Alice Hunter" avatar="https://randomuser.me/api/portraits/women/35.jpg" status="offline" />
      <Contact name="Kirk Burns" avatar="https://randomuser.me/api/portraits/men/79.jpg" status="online" />
    </div>
  );
}

export default App;
