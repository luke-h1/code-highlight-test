import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import Code from "../components/code";

const components = {
  pre: (props) => <div {...props} />,
  code: (props) => <Code {...props} />,
};
function MyApp({ Component, pageProps }) {
  return (
    <>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}

export default MyApp;
