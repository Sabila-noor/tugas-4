import React from 'react'

function Tombol(props) {
  return (
    <button
      onClick={() => {
        return alert(`Anda Telah Mengklik Tombol ${props.name}`);
      }}
    >
      Tombol {props.name}
    </button>
  );
}

export default Tombol;