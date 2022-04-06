import React, { Component } from 'react';
import propTypes from 'prop-types';

import '../styles/RenderProducts.scss';

export default class Categories extends Component {
  render() {
    const { item: { id, name }, funk } = this.props;
    return (
      <button
        className="button-category"
        onClick={ () => funk(id) }
        data-testid="category"
        key={ id }
        type="button"
      >
        { name }
      </button>
    );
  }
}

Categories.propTypes = {
  item: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  }).isRequired,
  funk: propTypes.func.isRequired,
};
