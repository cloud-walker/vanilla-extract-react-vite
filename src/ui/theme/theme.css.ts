import {blue, blueDark, gray, grayDark} from '@radix-ui/colors'
import {createTheme} from '@vanilla-extract/css'

export const [lightThemeClass, lightThemeVars] = createTheme({
  color: {
    neutral1: gray.gray1,
    neutral2: gray.gray2,
    neutral3: gray.gray3,
    neutral4: gray.gray4,
    neutral5: gray.gray5,
    neutral6: gray.gray6,
    neutral7: gray.gray7,
    neutral8: gray.gray8,
    neutral9: gray.gray9,
    neutral10: gray.gray10,
    neutral11: gray.gray11,
    neutral12: gray.gray12,

    brand1: blue.blue1,
    brand2: blue.blue2,
    brand3: blue.blue3,
    brand4: blue.blue4,
    brand5: blue.blue5,
    brand6: blue.blue6,
    brand7: blue.blue7,
    brand8: blue.blue8,
    brand9: blue.blue9,
    brand10: blue.blue10,
    brand11: blue.blue11,
    brand12: blue.blue12,
  },
})

export const [darkThemeClass, darkThemeVars] = createTheme({
  color: {
    neutral1: grayDark.gray1,
    neutral2: grayDark.gray2,
    neutral3: grayDark.gray3,
    neutral4: grayDark.gray4,
    neutral5: grayDark.gray5,
    neutral6: grayDark.gray6,
    neutral7: grayDark.gray7,
    neutral8: grayDark.gray8,
    neutral9: grayDark.gray9,
    neutral10: grayDark.gray10,
    neutral11: grayDark.gray11,
    neutral12: grayDark.gray12,

    brand1: blueDark.blue1,
    brand2: blueDark.blue2,
    brand3: blueDark.blue3,
    brand4: blueDark.blue4,
    brand5: blueDark.blue5,
    brand6: blueDark.blue6,
    brand7: blueDark.blue7,
    brand8: blueDark.blue8,
    brand9: blueDark.blue9,
    brand10: blueDark.blue10,
    brand11: blueDark.blue11,
    brand12: blueDark.blue12,
  },
})
