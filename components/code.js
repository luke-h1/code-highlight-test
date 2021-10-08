import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import Theme from 'prism-react-renderer/themes/vsDark'
const Code = ({ children, className }) => {
  const language = 'Typescript';

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={Theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px", marginBottom: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
export default Code;
