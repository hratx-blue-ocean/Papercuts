import { createGlobalStyle } from 'styled-components';

// Global reset for consistent styling across components
// The rest of the css resets handled by normalize.css
export const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  *, *:before, *:after {
    box-sizing: border-box;
		margin: 0;
		padding: 0;
  }

  html, body, nav, footer {
    height: 100%;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
}`;
