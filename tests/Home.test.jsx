import { render, screen } from '@testing-library/react';
import Home from '../src/routes/Home';
import { MemoryRouter } from 'react-router';
import { beforeEach } from 'vitest';

const items = [[
    { category: "men" }, {category: "women"}
]]
describe('Home', () => {
    beforeEach(() => {
         render(<MemoryRouter>
            <Home data={items}/>
        </MemoryRouter>)
    })
    it("renders product categories title" , () => {
        expect(screen.getByText("Categories").textContent).toMatch(/categories/i);
    })
    it("renders mens category link" , () => {
        expect(screen.getByText("men")).toBeInTheDocument();
    })
    it("renders womens category link" , () => {
       expect(screen.getByText("women")).toBeInTheDocument();
    })
});
