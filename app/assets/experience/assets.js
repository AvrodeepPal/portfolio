import genaius_logo_black from './genaius_logo_black.png';
import genaius_logo_white from './genaius_logo_white.png';

/**
 * Company logo mapping — the black logo runs in the light theme and the white
 * logo in the dark theme.
 *
 * To add a company: drop `<company>_logo_black.png` / `<company>_logo_white.png`
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
