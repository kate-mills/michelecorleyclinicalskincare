export const setColor = {
  mainWhite: '#ffffff',
  mainBlack: '#222',
  mainGrey: '#a19996',
  mainText: '#5c5c5c',
  lightGrey: '#d3d3d3',
  mccPink: '#ff665e', //mccPink
  h2: 'rgba(179,0,0,0.8)',
}

export const setFont = ({
  family = "'proxima-nova', 'sans-serif'",
  size = '15px',
  height = '32px',
  color = '#111111',
  style = 'normal',
  weight = '300',
} = {}) => {
  return `
  font-family: ${family};
  font-size: ${size};
  line-height: ${height};
  color: ${color};
  font-style: ${style};
  font-weight: ${weight};
  `
}

//flex-start flex-end
export const setFlexContainer = ({
  x = 'center',
  y = 'center',
  direction = 'row',
  wrap = 'wrap',
} = {}) => {
  return `display:flex;justify-content:${x};align-items:${y};flex-direction:${direction};flex-wrap: ${wrap};
  `
}

export const setInstagram = ({ sm = '36px', lg = '40px' } = {}) => {
  return `
  color: #fff;
  display: inline-block;
  width: ${lg};
  height: ${lg};
  text-align: center;
  border-radius: 10px;
  font-size: ${sm};
  line-height: ${lg};
  vertical-align: middle;
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  boxShadow: 0px 3px 10px rgba(0,0,0,.25);
`
}

export const setBackground = ({ img = '', color = 'rgba(0,0,0,0)' } = {}) => {
  return ` background: linear-gradient(${color}, ${color}), url(${img}) center/cover fixed no-repeat`
}
