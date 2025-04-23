/* eslint prefer-named-capture-group: 0 */
/* eslint import/no-default-export: 0 */
import { type Theme, ThemeProvider } from '@kurocado-studio/ui/react';
import type { Preview } from '@storybook/react';
import { get } from 'lodash-es';
import React, { useEffect } from 'react';

import '../src/tailwind.css';
import designTokens from '../src/tokens/tokens.json';

import Element = React.JSX.Element;

const LIGHT_THEME = 'Light setup';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story: React.FC<unknown>, context: Record<string, unknown>): Element => {
    function Decorator(): Element {
      const selectedTheme = get(context, ['globals', 'theme']) === LIGHT_THEME;

      useEffect(() => {
        document.documentElement.classList.toggle('dark', !selectedTheme);
      }, [selectedTheme]);

      return (
        <ThemeProvider theme={designTokens as unknown as Theme}>
          <Story />
        </ThemeProvider>
      );
    }

    return <Decorator />;
  },
];

export default preview;
