import genaius_logo_black from './genaius_logo_black.webp';
import genaius_logo_white from './genaius_logo_white.webp';

/**
 * Company logo mapping — the black logo runs in the light theme and the white
 * logo in the dark theme.
 *
 * To add a company: drop `<company>_logo_black.webp` / `<company>_logo_white.webp`
 * here, import them, and add a matching entry below.
 */
export const companyLogos = {
  genaius: {
    light: genaius_logo_black,
    dark: genaius_logo_white,
    alt: 'GenAIus Technology logo'
  }
};

export const assets = {
  genaius_logo_black,
  genaius_logo_white
};
