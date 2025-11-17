import { useOutletContext, useParams } from "react-router";
import Main from "../components/Main";
import styled from "styled-components";
import ItemCard from "../components/ItemCard";
import Notice from "../components/Notice"
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Wrapper = styled.section`
    display: flex;
    padding: var(--content-padding);
    justify-content: start;
    align-items: start;
    gap: var(--gap-2xl);
    height: 100%;
    @media (max-width: 800px) {
        flex-direction: column;
        padding: 0;
    }
`;

function Item() {
    const [items, _, { handleAddToCart }, quantityAlert] = useOutletContext()
    const [isAdded, setIsAdded] = useState(false)
    const { id } = useParams()
    const [item] = items.filter(item => item.id == parseInt(id))
    
    return(<>
    <Main>
        {quantityAlert && <Notice>Please contact support at cart@shooping.com for large orders.</Notice>}
        {isAdded && <Notice>{item.title} was added to the cart. You can view your cart <Link style={{color: "inherit"}}to="/cart">here.</Link></Notice>}
        <Wrapper>
            <ItemCard setIsAdded={setIsAdded} addToCart={handleAddToCart} obj={item}/>   
        </Wrapper>
      
    </Main>
    </>)
}
export default Item