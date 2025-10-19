// src/__tests__/dummy.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';

test('dummy test renders simple text', () => {
  render(<div>Hello Jest + RTL</div>);
  expect(screen.getByText('Hello Jest + RTL')).toBeInTheDocument();
});
