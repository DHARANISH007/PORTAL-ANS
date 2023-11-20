import React from 'react';

function App() {
  const appStyles = {
    backgroundColor: 'lightblue',
    color: 'darkblue',
    padding: '10px',
    border: '1px solid blue',
    borderRadius: '5px',
  };

  const headingStyles = {
    color: 'green',
  };

  const paragraphStyles = {
    color: 'darkblue',
    fontSize: '16px',
  };

  return (
    <div style={appStyles}>
      <h1 style={headingStyles}>Inline Style in JSX Example</h1>
      <div>
        <p style={paragraphStyles}>This is a paragraph with inline styles applied.</p>
      </div>
    </div>
  );
}

export default App;
