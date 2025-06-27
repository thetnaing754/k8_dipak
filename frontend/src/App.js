/*import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      //const response = await fetch('http://localhost:5000/api/message');
      const response = await fetch('http://backend-service/api/message');
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error fetching message');
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial', textAlign: 'center' }}>
      <button onClick={fetchMessage} style={{ padding: '10px 20px', fontSize: 16 }}>
        Click to get message
      </button>
      {message && <p style={{ marginTop: 20, fontSize: 18 }}>{message}</p>}
    </div>
  );
}

export default App;
*/


import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  // Read from environment variable (set in Dockerfile or Deployment)
  const apiUrl = process.env.REACT_APP_API_URL || '';

  const fetchMessage = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/message`);
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Fetch error:', error);
      setMessage('Error fetching message');
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial', textAlign: 'center' }}>
      <button onClick={fetchMessage} style={{ padding: '10px 20px', fontSize: 16 }}>
        Click to get message
      </button>
      {message && <p style={{ marginTop: 20, fontSize: 18 }}>{message}</p>}
    </div>
  );
}

export default App;
