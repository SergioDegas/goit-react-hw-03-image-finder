import PropTypes from 'prop-types';

function Button({ incrementPage }) {
  return (
    <button type="button" onClick={incrementPage}>
      Load more
    </button>
  );
}

Button.prototype = {
  onNextFetch: PropTypes.func.isRequired,
};

export default Button;