import { useOutletContext, useParams } from "react-router";
import Main from "../components/Main";
import styled from "styled-components";
import ItemCard from "../components/ItemCard";
import Notice from "../components/Notice"

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
    const [items, _,  handleAddToCart, quantityAlert] = useOutletContext()
    const { id } = useParams()
    const [item] = items.filter(item => item.id == parseInt(id))
   
    return(<>
    <Main>
        {quantityAlert && <Notice>Please contact support at cart@shooping.com for large orders.</Notice>}
        <Wrapper>
            <ItemCard addToCart={handleAddToCart} obj={item}/>   
        </Wrapper>
      
    </Main>
    </>)
}
export default Item