import React, { useState } from 'react';

export default function ChangeEvent() {
    const [firstName, setFirstName] = useState('');
    function handleChange(e) {
        console.log(e.target.value);
      }
    return (
        <div>
        <input name="firstName" onChange={handleChange} />
        </div>
    );
}
