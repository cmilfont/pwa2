import React from 'react';
import PropTypes from 'prop-types';

const Place = ({
  highlights,
  content,
  name,
  cover: { file: { url } },
  destination: { name: destinationName }
}) => {

  const highlightedContent = highlights.reduce((resultado, text) => {
    return resultado.replace(text, `<span class="high">${text}</span>`);
  }, content);

  return (
  <li>
    <div>
      <img src={url} />
      <div className="name">{name}</div>
      <div>{destinationName}</div>
      <div
        dangerouslySetInnerHTML={{ __html: highlightedContent }}
      />
    </div>
  </li>
  )
};

export default Place;
