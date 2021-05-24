import { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
h1 {
  font-family: sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: skyblue;
}
h2, h3, h4, h5, h6 {
  font-family: sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: steelblue;
}
div, p {
  font-family: serif;
  font-size: 1rem;
  color: black;
  }
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export const Appear = keyframes`
  0%, 50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Disappear = keyframes`
  0%, 90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
