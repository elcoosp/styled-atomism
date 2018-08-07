import { lighten, darken, transitions } from 'polished'
import { css } from 'styled-components'
const reduceObjReturned = f => o =>
  Object.entries(o).reduce((acc, ...args) => (f(acc, ...args), acc), {})
const makeColors = ({ colors: { lighter, darker } }) =>
  reduceObjReturned(
    (newColors, [type, base]) =>
      (newColors[type] = {
        base,
        light: lighten(lighter)(base),
        dark: darken(darker)(base)
      })
  )

const suffix = suffixerMappers => ({ [prop]: value }) =>
  Object.entries(suffixerMappers).reduce(
    (newObj, [key, mapper]) => ((newObj[prop + key] = mapper(value)), newObj),
    {}
  )

const makeGradients = ({ gradients: { direction } }) =>
  reduceObjReturned(
    (newGradients, [type, { base, light, dark }]) =>
      (newGradients[type] = {
        light: css`linear-gradient(${direction},${base}, ${light});`,
        dark: css`linear-gradient(${direction},${base}, ${dark});`
      })
  )

const FONT_SIZES = {
  sm: 0.75,
  md: 1,
  lg: 1.5,
  xl: 2,
  xxl: 3,
  xxxl: 4
}
const makeFonts = ({ fonts }) =>
  reduceObjReturned(
    (newFonts, [familyType, family]) =>
      (newFonts[familyType] = reduceObjReturned(
        (newSizes, [sizeType, size]) =>
          (newSizes[sizeType] = reduceObjReturned(
            (newWeights, [weightType, weight]) =>
              (newWeights[weightType] = css`
                font-family: ${family};
                font-size: ${size}rem;
                font-weight: ${weight};
              `)
          )(fonts.weights))
      )(FONT_SIZES))
  )(fonts.family)

const makeTheme = ({
  settings,
  spacing,
  colors: baseColors,
  borders,
  transitions,
  radius,
  shadows
}) => {
  const colors = makeColors(settings)(baseColors)
  const gradients = makeGradients(settings)(colors)
  const fonts = makeFonts(settings)
  return { colors, gradients, fonts, borders, transitions, spacing, radius, shadows }
}

export default makeTheme
