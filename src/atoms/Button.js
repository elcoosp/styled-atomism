import styled from 'styled-components'
const Button = styled.button`
  ${p => p.theme.fonts.body.lg.light};
  border: none;
  cursor: pointer;

  background-image: ${p => p.theme.gradients[p.color].dark};
  border-radius: ${p => p.theme.radius.sm};
  border-bottom: ${p => p.theme.borders.lg} solid
    ${p => p.theme.colors[p.color].dark};
  box-shadow: ${p => p.theme.shadows.lg} ${p => p.theme.colors[p.color].dark};
  transition: all ${p => p.theme.transitions.md};
  outline: 0;
  &:hover {
    box-shadow: ${p => p.theme.shadows.lg} ${p => p.theme.colors[p.color].base};
    transition: all ${p => p.theme.transitions.lg};
  }

  &:active {
    box-shadow: ${p => p.theme.shadows.sm} ${p => p.theme.colors[p.color].base};
    border-radius: ${p => p.theme.radius.md};
    border-bottom-color: ${p => p.theme.colors[p.color].base};
    transition: all ${p => p.theme.transitions.sm};
  }
`
export default Button
