import React from 'react'
import { render } from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

const App = () => (
  <ThemeProvider theme={theme}>
    <Input color="primary" placeholder="Try now" />
  </ThemeProvider>
)
render(<App />, document.querySelector('#root'))
