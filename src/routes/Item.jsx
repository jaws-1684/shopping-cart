import { useOutletContext, useParams } from "react-router";
import Main from "../components/Main";
import styled from "styled-components";
import ItemCard from "../components/ItemCard";
const Wrapper = styled.section`
    display: flex;
    padding: var(--content-padding);
    justify-content: start;
    align-items: start;
    gap: var(--gap-2xl);
    height: 100%;
`;

function Item() {
    const [items, _,  handleAddToCart] = useOutletContext()
    const { id } = useParams()
    const [item] = items.filter(item => item.id == parseInt(id))
   
    return(<>
    <Main>
        <Wrapper>
            <ItemCard addToCart={handleAddToCart} obj={item}/>   
        </Wrapper>
      
    </Main>
    </>)
}
export default Item