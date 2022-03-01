import { createGlobalStyle } from "styled-components";
import { displayPartsToString } from "typescript";

export const global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior:smooth;
    scroll-margin-top: -100px;
  }

  #root{
      min-height: 100vh;
  }

  html, body {
    z-index: 0;

    min-height: 100vh;

    overscroll-behavior-y: contain;
  }

  body, button, input, textarea, select {
    -webkit-font-smoothing: antialiased;

    font-family: Verdana, Geneva, sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  b {
    font-weight: 600;
  }

  label, a, button, h1, h2, h3, h4, h5, h6, span, input {
    line-height: 1.219;
    font-size: 1rem;
    color: var(--black500);
  }

  h1 {
      font-size: 3rem;
  }

  h2 {
      font-size: 2.5rem;
  }

  h3 {
      font-size: 2rem;
  }

  h4 {
      font-size: 1.75rem;
  }

  :root {
    /* ----- Colors ----- */
    --primary: #30278F;
    --secondary: #DB4F62;
    --white: #ffffff;
    --white500: #dedede;

    --red: #eb3b53;
    --blue: #4790b8;
    --blue200: #03b4c6;
    --green: #37be58;

    --black500: #272727;
    --black200: #3d3d3d;
    --black100: #5d5d5d;

    /* ----- Fontsize ----- */
    --font-xs: 0.75rem;
    --font-sm: 0.875rem;
    --font-md: 1rem;
    --font-lg: 1.125rem;
    --font-xl: 1.25rem;
    --font-2xl: 1.5rem;
    --font-3xl: 1.875rem;
    --font-4xl: 2.25rem;
    --font-5xl: 3rem;
    --font-6xl: 3.75rem;
    --font-7xl: 4.5rem;
    --font-8xl: 6rem;
    --font-9xl: 8rem;

    /* ----- Spacing ----- */
    --spacing-dot5: 0.125rem;
    --spacing-1: 0.25rem;
    --spacing-1dot5: 0.375rem;
    --spacing-2: 0.5rem;
    --spacing-2dot5: 0.625rem;
    --spacing-3: 0.75rem;
    --spacing-3dot5: 0.875rem;
    --spacing-4: 1rem;
    --spacing-5: 1.25rem;
    --spacing-6: 1.5rem;
    --spacing-7: 1.75rem;
    --spacing-8: 2rem;
    --spacing-9: 2.25rem;
    --spacing-10: 2.5rem;
    --spacing-12: 3rem;
    --spacing-14: 3.5rem;
    --spacing-16: 4rem;
    --spacing-20: 5rem;
    --spacing-24: 6rem;
    --spacing-28: 7rem;
    --spacing-32: 8rem;
    --spacing-36: 9rem;
    --spacing-40: 10rem;
    --spacing-44: 11rem;
    --spacing-48: 12rem;
    --spacing-52: 13rem;
    --spacing-56: 14rem;
    --spacing-60: 15rem;
    --spacing-64: 16rem;
    --spacing-72: 18rem;
    --spacing-80: 20rem;
    --spacing-96: 24rem;
  }

  #toastr-root{
    position: fixed;
    bottom: 0;
    left: 8px;
  }
  
  .toastr-container{
    display: flex;
    flex-flow: column-reverse;

    & > div{
        margin-bottom: 8px;
    }
  }
`;
