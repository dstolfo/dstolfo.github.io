import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('leaflet', () => {
  return {
    map: jest.fn(() => ({
      setView: jest.fn().mockReturnThis(),
      remove: jest.fn(),
      on: jest.fn(),
    })),
    tileLayer: jest.fn(() => ({
      addTo: jest.fn(),
    })),
  };
});

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/DAVID STOLFO/i)).toBeInTheDocument();
  });

  test('renders ProfileCard with expected text', () => {
    render(<App />);
    expect(screen.getByText(/Mapping Progress, Creating Solutions/i)).toBeInTheDocument();
  });

  test('renders LinkedIn icon with correct link', () => {
    render(<App />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/david-stolfo-3697a055');
  });
});
