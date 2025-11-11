import logo from './logo.svg';
import photo from './photo.png';
import location from './location.svg';
import calling from './calling.svg';
import email from './email.svg';
import heart from './heart.svg';
import linkedin_dark from './linkedin-dark.svg';
import linkedin_light from './linkedin-light.svg';
import github_dark from './github-dark.svg';
import github_light from './github-light.svg';
import instagram_dark from './instagram-dark.svg';
import instagram_light from './instagram-light.svg';
import leetcode_dark from './leetcode-dark.svg';
import leetcode_light from './leetcode-light.svg';
import twitterx_dark from './twitterx-dark.svg';
import twitterx_light from './twitterx-light.svg';

export const assets = {
    logo,
    photo,
    location,
    calling,
    email,
    heart,
    linkedin_dark,
    linkedin_light,
    github_dark,
    github_light,
    instagram_dark,
    instagram_light,
    leetcode_dark,
    leetcode_light,
    twitterx_dark,
    twitterx_light
};

export const footerSocialLinks = [
  {
    key: "github",
    href: "https://github.com/AvrodeepPal",
    iconDark: github_dark,
    iconLight: github_light,
    alt: "GitHub",
    hoverColor: "hover:text-fg"
  },
  {
    key: "linkedin",
    href: "https://linkedin.com/in/avrodeeppal",
    iconDark: linkedin_dark,
    iconLight: linkedin_light,
    alt: "LinkedIn",
    hoverColor: "hover:text-blue-500"
  },
  {
    key: "instagram",
    href: "https://www.instagram.com/avrodeeppal",
    iconDark: instagram_dark,
    iconLight: instagram_light,
    alt: "Instagram",
    hoverColor: "hover:text-pink-500"
  },
  {
    key: "leetcode",
    href: "https://leetcode.com/u/AvrodeepPal",
    iconDark: leetcode_dark,
    iconLight: leetcode_light,
    alt: "LeetCode",
    hoverColor: "hover:text-orange-500"
  },
  {
    key: "twitterx",
    href: "https://x.com/AvrodeepPal17",
    iconDark: twitterx_dark,
    iconLight: twitterx_light,
    alt: "Twitter/X",
    hoverColor: "hover:text-gray-400"
  }
];
