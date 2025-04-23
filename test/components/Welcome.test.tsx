import { ReactTestingLibrary, renderComponent } from '@kurocado-studio/qa';
import React from 'react';

import { Welcome } from 'src/components/Welcome';

const { screen } = ReactTestingLibrary;

describe('Welcome component', () => {
  beforeEach(() => renderComponent(<Welcome />));

  test('renders welcome component properly', () => {
    expect(
      screen.getByText('Kurocado Studio Product Starter Kit'),
    ).toBeInTheDocument();
  });

  test('renders a tag pointing to the case study', () => {
    const linkElement = screen.getByRole('link', {
      name: 'Read the Case Study',
    });

    expect(linkElement).toBeInTheDocument();

    expect(linkElement).toHaveAttribute(
      'href',
      'https://kurocado-studio.github.io/platform/case-study.html',
    );
  });

  test('renders a button to change the border radius of the Card component', () => {
    const buttonElement = screen.getByRole('button', {
      name: 'Toggle Border Radius',
    });

    expect(buttonElement).toBeInTheDocument();
  });

  test('renders a tag pointing to the GitHub repository', () => {
    const linkElement = screen.getByRole('link', {
      name: 'View Product Starter Kit repository on GitHub',
    });

    expect(linkElement).toBeInTheDocument();

    expect(linkElement).toHaveAttribute(
      'href',
      'https://github.com/Kurocado-Studio/product-starter-kit',
    );
  });
});
