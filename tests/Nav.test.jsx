import { render, screen } from '@testing-library/react';
import Nav from "../src/components/Nav"
import { MemoryRouter } from 'react-router';
import { beforeEach, vi } from 'vitest';

describe('Navigation Bar', () => {
    beforeEach(() => {
         render(<MemoryRouter>
            <Nav/>
        </MemoryRouter>)
    })
    it("renders home link" , () => {
        expect(screen.getByText("Home").textContent).toMatch(/home/i);
    })
    it("renders shop link" , () => {
        expect(screen.getByText("Shop").textContent).toMatch(/shop/i);
    })
    it("renders cart link" , () => {
        expect(screen.getByTestId("cart")).toBeInTheDocument()
    })
});
