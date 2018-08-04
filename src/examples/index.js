import React from 'react'
import { render } from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'
import Button from '../atoms/Button'
console.log(theme)

const App = () => (
  <ThemeProvider theme={theme}>
    <Button color="primary">Try now</Button>
  </ThemeProvider>
)
render(<App />, document.querySelector('#root'))
