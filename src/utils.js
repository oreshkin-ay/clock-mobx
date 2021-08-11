export const getPoint = ({r, angle, x0, y0}) => ({ x: x0 + r * Math.sin(angle), y: y0 - r * Math.cos(angle) });
