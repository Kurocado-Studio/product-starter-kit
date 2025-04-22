import { type Theme, ThemeProvider } from '@kurocado-studio/ui/react';
import '@kurocado-studio/ui/typography.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Welcome } from './components/Welcome';
import './tailwind.css';
import themeTokens from './tokens/tokens.json';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* keys $themes and $metadata from Token Studio triggers type errors*/}
    <ThemeProvider theme={themeTokens as unknown as Theme}>
      <Welcome />
    </ThemeProvider>
  </React.StrictMode>,
);
