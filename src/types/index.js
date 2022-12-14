import PropTypes from "prop-types";

export const typeProduct = PropTypes.exact({
  id: PropTypes.string,
  name: PropTypes.string,
  brand: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number,
});
