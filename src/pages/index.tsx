import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";
import Head from "next/head";

const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px 50px;
  position: relative;
  max-width: 35em;
`;

const Title = styled.h1`
  margin: 0;
  padding-top: 80px;
  font-size: 48px;
  line-height: 1.4em;
  text-align: center;
`;
const Description = styled.div`
  font-weight: bold;
  text-align: center;
`;

const ExternalLinks = styled.div`
  margin: 10px auto 40px;
  text-align: center;
`;

const ExternalLink = styled.a`
  display: inline-block;
  text-decoration: none;
  margin: 0 8px;
`;

const InputSection = styled.div`
  display: block;
  text-align: center;
`;

const InputForm = styled.form`
  display: inline-block;
  white-space: nowrap;
  font-size: 2em;
  margin: 20px auto;
  width: 100%;
  max-width: 100%;
  position: relative;
  line-height: 1em;

  @media (max-width: 600px) {
    font-size: 1.8em;
  }
  @media (max-width: 550px) {
    font-size: 1.6em;
  }
  @media (max-width: 510px) {
    font-size: 1.5em;
  }
  @media (max-width: 450px) {
    font-size: 1.4em;
  }
  @media (max-width: 420px) {
    font-size: 1.3em;
  }
  @media (max-width: 400px) {
    font-size: 1.25em;
  }
  @media (max-width: 370px) {
    font-size: 1.1em;
  }
  @media (max-width: 350px) {
    font-size: 1em;
  }
`;

const InputPrefix = styled.label`
  padding: 0.3em 0 0 0.7em;
  font-family: monospace;
  display: inline-block;
  position: absolute;
  top: 1px;
  left: 0;
  pointer-events: none;
`;
const Input = styled.input`
  display: inline-block;
  padding: 0.3em 4em 0.3em 3em;
  background: rgba(27, 31, 35, 0.05);
  color: #24292e;
  line-height: inherit;
  font-family: monospace;
  border: 0px solid white;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  -webkit-appearance: none;

  ::placeholder {
    color: #aaa;
  }

  :focus {
    outline: none !important;
    border: 1px solid #42a73f;
    box-shadow: 0 0 10px #7cd679;
  }
`;
const InputSuffix = styled.button`
  border: none;
  background: transparent;
  line-height: inherit;
  padding: 0.2em 0.4em 0.3em 0;

  position: absolute;
  top: 1px;
  right: 0;

  :active {
    top: 3px;
  }

  :focus {
    outline: none !important;
  }
`;

const IndexPage = () => {
  const inputRef = useRef<HTMLInputElement>();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const title = "njt (npm jump to)";
  const description = "package navigation shortcuts you dreamed about";
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="og:image"
          content={`${process.env.siteUrl}/og-image.png`}
        />
        <meta
          property="twitter:image"
          content={`${process.env.siteUrl}/og-image.png`}
        />
        <meta
          property="vk:image"
          content={`${process.env.siteUrl}/og-image.png`}
        />
      </Head>
      <Title>🐸 njt 🐸</Title>
      <Description>🐸 npm jump to  🐸</Description>

      <ExternalLinks>
        <ExternalLink href="https://github.com/kachkaev/njt">
          github
        </ExternalLink>
        <ExternalLink href="https://www.npmjs.com/package/njt">
          npm
        </ExternalLink>
      </ExternalLinks>

      <InputSection>
        <InputForm action="/jump">
          <InputPrefix htmlFor="to">njt</InputPrefix>
          <Input
            ref={inputRef}
            id="to"
            name="to"
            placeholder="<package> [destination]"
          />
          <InputSuffix tabIndex={-1}>🐸 →</InputSuffix>
        </InputForm>
      </InputSection>

      <Markdown>{`
### Available destinations

${
  /* When updating, remember to reflect changes in README.md and cli/cli.js */ ""
}
\`c\` → changelog  
\`h\` → homepage (aliased as \`w\` for website or \`d\` for docs)  
\`i\` → issues (aliased as \`b\` for bugs)  
\`n\` → package info on [npmjs.com](https://www.npmjs.com/)  
\`p\` → pull requests (aliased as \`m\` for merge requests)  
\`r\` → list of github releases  
\`s\` → source (most commonly repository root, but can take you to a subdirectory in case of a monorepo)  
\`t\` → list of git tags  
\`v\` → list of package versions with their publish dates on [npmjs.com](https://www.npmjs.com/)  
\`y\` → package page on [yarnpkg.com](https://yarnpkg.com/) (mirror registry for [npmjs.com](https://www.npmjs.com/))  

Omitting the destination takes you to the package page on [npmjs.com](https://www.npmjs.com/) as if you used \`n\`.

### Examples

\`njt prettier\` (no specified destination)  
🐸 → https://www.npmjs.com/package/prettier

\`njt prettier h\` (homepage)  
🐸 → https://prettier.io

\`njt prettier s\` (source)  
🐸 → https://github.com/prettier/prettier

\`njt prettier c\` (changelog)  
🐸 → https://github.com/prettier/prettier/blob/master/CHANGELOG.md

\`njt prettier y\` (yarn)  
🐸 → https://yarnpkg.com/package/prettier
  `}</Markdown>
    </Container>
  );
};

export default IndexPage;
