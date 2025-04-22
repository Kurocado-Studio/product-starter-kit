import { Card, useThemeContext } from '@kurocado-studio/ui/react';
import * as React from 'react';
import { useState } from 'react';

export function Welcome(): React.ReactNode {
  const [toggle, setToggle] = useState<boolean>(false);

  const { setThemeVariable } = useThemeContext();

  const handleThemeChange = (): void => {
    setToggle((prevState) => !prevState);
    setThemeVariable('--dimensions-12', toggle ? '4rem' : '1rem');
  };

  return (
    <main className='bg-white'>
      <article className='mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <Card>
          <Card.Header>
            <h1 className='text-balance text-3xl font-semibold tracking-tight'>
              Product Starter Kit
            </h1>
          </Card.Header>
          <Card.Body>
            <p className='mx-auto mt-6 max-w-xl text-pretty text-lg/8'>
              The Product Starter Kit is a modular, React‑based accelerator
              (with Vue3 in the horizon) that lets a team deploy a fully‑tooled,
              production‑grade application in under five minutes
            </p>
            <p className='mx-auto mt-6 max-w-xl text-pretty text-lg/8'>
              It combines CI/CD pipelines, automated testing & dependency
              management, and a Figma‑to‑React design system driven by Token
              Studio.
            </p>
            <div className='mt-10 flex gap-x-6'>
              <button
                type='button'
                onClick={handleThemeChange}
                className='relative rounded-md overflow-hidden rounded bg-gray-900 px-5 py-2 text-white transition-all duration-300 hover:bg-gray-800 hover:ring-2 hover:ring-gray-800 hover:ring-offset-2'
              >
                <span className='relative'>Toggle Border Radius</span>
              </button>
              <a
                href='https://kurocado-studio.github.io/platform/case-study.html'
                className='relative rounded-md overflow-hidden rounded bg-gray-600 px-5 py-2 text-white transition-all duration-300 hover:bg-gray-600 hover:ring-2 hover:ring-gray-800 hover:ring-offset-2'
              >
                Read the Case Study
              </a>
            </div>
          </Card.Body>
          <Card.Footer>
            <a
              href='https://github.com/Kurocado-Studio/product-starter-kit'
              className='text-sm/6 font-semibold text-gray-900'
            >
              View Product Starter Kit repository on GitHub
              <span aria-hidden='true'>→</span>
            </a>
          </Card.Footer>
        </Card>
      </article>
    </main>
  );
}
