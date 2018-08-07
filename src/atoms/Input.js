import styled from 'styled-components'
const Input = styled.input`
  ${p => p.theme.fonts.body.sm.light};

  padding: ${p => p.theme.spacing.sm};
  border-radius: ${p => p.theme.radius.sm};
  border: ${p => p.theme.borders.sm} solid ${p => p.theme.colors[p.color].dark};
  border-bottom: ${p => p.theme.borders.md} solid
    ${p => p.theme.colors[p.color].dark};
  transition: all ${p => p.theme.transitions.md};

  &:focus {
    border: ${p => p.theme.borders.md} solid
      ${p => p.theme.colors[p.color].dark};
    transition: all ${p => p.theme.transitions.sm};
  }
`
export default Input
