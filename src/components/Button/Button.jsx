import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

function Button({ incrementPage }) {
  return (
    <LoadButton type="button" onClick={incrementPage}>
      Load more
    </LoadButton>
  );
}

Button.prototype = {
  onNextFetch: PropTypes.func.isRequired,
};

export default Button;