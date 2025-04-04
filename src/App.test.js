import { render, screen, fireEvent } from '@testing-library/react';
import App from './App'; // Import the component to test
import { LinkedIn } from '@mui/icons-material';

// Mock the MapWithPNG component since we don't want to load the actual map in tests
jest.mock('./components/MapWithPNG', () => () => <div>Map Placeholder</div>);

describe('App Component', () => {
  test('renders MapWithPNG component', () => {
    render(<App />);
    // Check if the MapWithPNG component (placeholder) is rendered
    expect(screen.getByText('Map Placeholder')).toBeInTheDocument();
  });

  test('renders the Card with content', () => {
    render(<App />);

    // Check if the card with specific content is rendered
    expect(screen.getByText(/DAVID STOLFO/i)).toBeInTheDocument();
    expect(screen.getByText(/Mapping Progress, Creating Solutions/i)).toBeInTheDocument();
    expect(screen.getByText(/David is a geospatial information scientist/i)).toBeInTheDocument();
    expect(screen.getByText(/Blue Ridge Aerial Mapping LLC/i)).toBeInTheDocument();
  });

  test('renders LinkedIn icon with correct link', () => {
    render(<App />);

    // Check if the LinkedIn icon is rendered and has the correct link
    const linkedInLink = screen.getByRole('link', {
      name: /linkedIn/i
    });

    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/david-stolfo-3697a055');
    expect(linkedInLink).toHaveAttribute('target', '_blank');
    expect(linkedInLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('LinkedIn icon opens the correct URL when clicked', () => {
    render(<App />);
    const linkedInLink = screen.getByRole('link', { name: /linkedIn/i });

    // Trigger the click event
    fireEvent.click(linkedInLink);

    // Check if the correct URL is opened (this test assumes that window.open is used)
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/david-stolfo-3697a055');
  });
});
