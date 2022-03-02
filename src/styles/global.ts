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
      display: flex;
      flex-flow: column;
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
    --orange: #e24f2a;
    --dark_green: #108e64;
    --purple: #5849ad

    --black500: #272727;
    --black200: #3d3d3d;
    --black100: #5d5d5d;

    /* ----- Fontsize ----- */
    --font-xs: 0.75rem;
    --font-sm: 0.875rem;
    --font-md: 1rem;
    --font-lg: 1.125rem;
    --font-xl: 1.25rem;

    /* ----- Media Queries ----- */
      --mobile: 675px;

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

  .wave {
    animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
    animation-duration: 2.5s;        /* Change to speed up or slow down */
    animation-iteration-count: infinite;  /* Never stop waving :) */
    transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
    display: inline-block;
    font-size: inherit;
  }

  @keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
    20% { transform: rotate(-8.0deg) }
    30% { transform: rotate(14.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
    100% { transform: rotate( 0.0deg) }
  }
`;
