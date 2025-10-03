import React from 'react';

function Modal({ show, onClose, children, unstyled = false, panelStyle = {} }) {
  if (!show) return null;
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const defaultPanelStyle = {
    background: '#222',
    padding: '2rem',
    borderRadius: '12px',
    maxWidth: '500px',
    width: '100%',
    color: '#fff',
    position: 'relative',
  };

  const unstyledPanelStyle = {
    padding: 0,
    background: 'transparent',
    borderRadius: 0,
    position: 'relative',
    color: '#fff',
  };

  return (
    <div style={overlayStyle}>
      <div style={{ ...(unstyled ? unstyledPanelStyle : defaultPanelStyle), ...panelStyle }}>
        <button onClick={onClose} style={{ position:'absolute', top:'10px', right:'10px' }}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
