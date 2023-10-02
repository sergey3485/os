import { Global, css } from '@emotion/react';

export const GlobalStyles = (): JSX.Element => {
  return (
    <Global
      styles={css`
         *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        /* Remove default margin */
        body,
        h1,
        h2,
        h3,
        h4,
        p,
        figure,
        blockquote,
        dl,
        dd {
          margin: 0;
        }
        /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
        ol[role='list'] {
          list-style: none;
        }
        /* Set core root defaults */
        html:focus-within {
          scroll-behavior: smooth;
        }
        /* Set core body defaults */
        body {
          min-height: 100vh;
          text-rendering: optimizeSpeed;
          line-height: 1.5;
        }
        /* A elements that don't have a class get default styles */
        a:not([class]) {
          text-decoration-skip-ink: auto;
        }
        /* Make images easier to work with */
        img,
        picture,
        video,
        canvas,
        svg {
        display: block;
        max-width: 100%;
      }
        /* Inherit fonts for inputs and buttons */
        input,
        button,
        textarea,
        select {
          font: inherit;
        }
        /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
        @media (prefers-reduced-motion: reduce) {
          html:focus-within {
            scroll-behavior: auto;
          }
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
        body {
          overflow-y: scroll;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;

          font-display: swap;
          font-family:
            "montserrat";
          font-size: 16px;
          font-weight: 400;

          background-color: white;
        }
      `}
    />
  );
};
