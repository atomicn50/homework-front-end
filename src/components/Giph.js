import React from 'react';

const Giph = ({ url, title }) => (
  <div>
    <img src={url} alt="giph" />
    <p>{title}</p>
  </div>
);

export default Giph;