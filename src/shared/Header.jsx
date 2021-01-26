import { hot } from 'react-hot-loader/root';
import * as React from 'react';

function HeaderComponent() {
  return (
    <header>
      <h1>Reddit for our own 123gh</h1>
    </header>
  );
};

export const Header = hot(HeaderComponent);