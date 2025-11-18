import { render, screen } from '@testing-library/react';
import Shop from "../src/routes/Shop"
import { MemoryRouter } from 'react-router';
import { beforeEach, expect, it } from 'vitest';
import { items } from "./items"
import userEvent from '@testing-library/user-event';

describe('Shop', () => {
    beforeEach(() => {
         render(<MemoryRouter>
            <Shop data={items}/>
        </MemoryRouter>)
    })
    it("renders the product title" , () => {
        expect(screen.getByTestId("header").textContent).toMatch(/products/i);
    })
    it("renders all products" , () => {
        expect(screen.getAllByRole("article").length).toBe(items[0].length)
    })
    it("renders men's products", async () => {
        const user = userEvent.setup();
        await user.selectOptions(screen.getByRole("combobox"), "1");        
        expect(screen.getByTestId("header").textContent).toMatch(/men's clothing/i);
    })
    it("renders womens's products", async () => {
        const user = userEvent.setup();
        await user.selectOptions(screen.getByRole("combobox"), "2");        
        expect(screen.getByTestId("header").textContent).toMatch(/women's clothing/i);
    })
    it("renders jewelery products", async () => {
        const user = userEvent.setup();
        await user.selectOptions(screen.getByRole("combobox"), "3");       
        expect(screen.getByTestId("header").textContent).toMatch(/jewelery/i);
    })
    it("renders electronic products", async () => {
        const user = userEvent.setup();
        await user.selectOptions(screen.getByRole("combobox"), "4"); 
        expect(screen.getByTestId("header").textContent).toMatch(/electronics/i);
    })
     it("renders all products after selecting something", async () => {
        const user = userEvent.setup();
        await user.selectOptions(screen.getByRole("combobox"), "4");
        expect(screen.getByTestId("header").textContent).toMatch(/electronics/i); 
        await user.selectOptions(screen.getByRole("combobox"), "0");
        expect(screen.getByTestId("header").textContent).toMatch(/products/i);
    })
});
