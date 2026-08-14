// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PivotApex title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PivotApex/i);
    expect(titleElement).toBeInTheDocument();
});
