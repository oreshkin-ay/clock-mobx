import React from 'react';
import PropTypes from 'prop-types';

const Screen = ({ width, height, cWidth, cHeight, children }) => (<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox={`0 0 ${cWidth} ${cHeight}`}
  width={width}
  height={height}
>
  {children}
</svg>);

Screen.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  cWidth: PropTypes.number.isRequired,
  cHeight: PropTypes.number.isRequired,
  children: PropTypes.node
}

Screen.defaultProps = { children: null }

export default Screen;