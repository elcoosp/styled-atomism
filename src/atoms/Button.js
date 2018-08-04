import styled from 'styled-components'
const Button = styled.button`
  ${p => p.theme.fonts.body.lg.light};
  border: none;
  cursor: pointer;
  ${'' /* Just for the sake of presentation */}
  color:white;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  outline:none;

  background-image: ${p => p.theme.gradients[p.color].dark};
  border-radius: ${p => p.theme.radius.sm};
  border-bottom: ${p => p.theme.borders.lg} solid
    ${p => p.theme.colors[p.color].dark};
    border-radius ${p => p.theme.transitions.sm};
  box-shadow: ${p => p.theme.shadows.lg} ${p => p.theme.colors[p.color].dark};
  transition: all ${p => p.theme.transitions.md};

  &:hover {
    box-shadow: ${p => p.theme.shadows.lg} ${p => p.theme.colors[p.color].base};
    transition: all ${p => p.theme.transitions.lg};
  }

  &:active {
    box-shadow: none;
    border-radius: ${p => p.theme.radius.md};
    border-bottom-color: ${p => p.theme.colors[p.color].base};
    transition: all ${p => p.theme.transitions.sm};
  }
`
export default Button
