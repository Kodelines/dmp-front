const createSpacingFn = parameters => multiplier => props => {
  const value = props.theme.spacing(multiplier);
  return parameters.map(param => `${param}: ${value}px`).join('');
};
const mx = createSpacingFn(['margin-left', 'margin-right']);
const my = createSpacingFn(['margin-top', 'margin-bottom']);
const mt = createSpacingFn(['margin-top']);
const mb = createSpacingFn(['margin-bottom']);
const ml = createSpacingFn(['margin-left']);
const m = createSpacingFn(['margin']);
const px = createSpacingFn(['padding-left', 'padding-right']);
const py = createSpacingFn(['padding-top', 'padding-bottom']);

export default {
  mx,
  my,
  mt,
  mb,
  ml,
  m,
  px,
  py,
};
