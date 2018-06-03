import React from 'react';
import Place from './place/index.js';

class Places extends React.Component {

  render() {
    const { list } = this.props;
    const places = list.map(item => 
      <Place key={`place-${item.name}`} {...item} />
    );

    return (
      <ul className="places">
        {places}
      </ul>
    )
  }
}

export default Places;