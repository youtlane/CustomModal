import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { CustomModal } from './dist/CustomModal'; // Mettez une majuscule au début
// Chemin vers le module
import './dist/customModal.css'; // Chemin vers le CSS

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <CustomModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>This is a test modal!</p>
      </CustomModal>
    </div>
  );
};

// Monter l'application dans un élément HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
