import {recipe, RecipeVariants} from '@vanilla-extract/recipes'

import {lightThemeVars} from '../theme'

export const button = recipe({
  base: {
    borderStyle: 'solid',
    borderRadius: '0.5rem',
    transition: 'backgroundColor 0.3s ease-in',
  },

  variants: {
    type: {
      solid: {},
      ghost: {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
      },
    },
    tone: {
      neutral: {},
      brand: {},
    },
    size: {
      small: {
        fontSize: '0.8rem',
      },
      medium: {
        fontSize: '1rem',
      },
      large: {
        fontSize: '1.5rem',
      },
    },
  },

  compoundVariants: [
    {
      variants: {type: 'solid', tone: 'neutral'},
      style: {
        borderColor: lightThemeVars.color.neutral10,
        backgroundColor: lightThemeVars.color.neutral10,
        color: lightThemeVars.color.neutral1,

        ':hover': {
          borderColor: lightThemeVars.color.neutral11,
          backgroundColor: lightThemeVars.color.neutral11,
        },
      },
    },
    {
      variants: {type: 'solid', tone: 'brand'},
      style: {
        borderColor: lightThemeVars.color.brand10,
        backgroundColor: lightThemeVars.color.brand10,
        color: lightThemeVars.color.brand1,

        ':hover': {
          borderColor: lightThemeVars.color.brand11,
          backgroundColor: lightThemeVars.color.brand11,
        },
      },
    },
    {
      variants: {type: 'ghost', tone: 'neutral'},
      style: {
        ':active': {
          backgroundColor: lightThemeVars.color.neutral6,
        },
      },
    },
    {
      variants: {type: 'ghost', tone: 'brand'},
      style: {
        color: lightThemeVars.color.brand10,

        ':hover': {
          color: lightThemeVars.color.brand11,
        },

        ':active': {
          backgroundColor: lightThemeVars.color.brand4,
        },
      },
    },
  ],

  defaultVariants: {
    type: 'solid',
    tone: 'neutral',
    size: 'medium',
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
