import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Place = ({
  highlights,
  content,
  name,
  slug,
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
      <div className="name">
        <Link to={`/places/${slug}`}>
          {name}
        </Link>
      </div>
      <div>{destinationName}</div>
      <div
        dangerouslySetInnerHTML={{ __html: highlightedContent }}
      />
    </div>
  </li>
  )
};

export default Place;
