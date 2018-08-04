import makeTheme from '../makeTheme'

const rawTheme = {
  settings: {
    gradients: { direction: 'to top right' },
    colors: { lighter: 0.2, darker: 0.2 },
    fonts: {
      family: { heading: 'Helvetica Neue', body: 'Avenir Next' },
      weights: { light: 300, regular: 400, bold: 600 }
    }
  },
  colors: {
    primary: '#FF2525',
    secondary: '#89E53B',
    tertiary: '#5942f4'
  },
  borders: {
    sm: '1px',
    md: '2px',
    lg: '4px'
  },
  transitions: {
    sm: '0.2s ease-in-out',
    md: '0.3s ease-in-out',
    lg: '0.5s ease-in-out'
  },
  shadows: {
    sm: '1px 1px 3px',
    md: '1px 1px 6px',
    lg: '1px 1px 9px'
  },
  radius: { sm: '3px', md: '5px', lg: '10px' }
}

const theme = makeTheme(rawTheme)

export default theme
