import { createGlobalStyle } from "styled-components";

const isDevMode = process.env.NODE_ENV === "development"

const GlobalStyles = createGlobalStyle`
    
    body {
    margin: 0;
    font-family: ${() => isDevMode ? '"Comic Sans MS",' : ""} -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`

export default GlobalStyles