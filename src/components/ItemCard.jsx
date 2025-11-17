import styled from "styled-components";
import { Price } from "../App";
import AddToCart from "../components/AddToCart"
// Create a Title component that'll render an <h1> tag with some styles
const Img = styled.img`
  
`;
const Wrapper = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.25rem
    @media (max-width: 800px) {
        padding: 0;
    }
`
const ImageContainer = styled.div`
    border: 1px solid rgba(138, 130, 130, 0.2);
    padding: 30px;
      min-width: 40%;
`
const DescriptionContainer = styled.div`
    width: 100%;
    height: inherit;
    font-family: var(--primary-font);
    text-transform: capitalize;
    h1 {
        font-size: var(--text-size-3xl);
    };
    p {
        color: gray;
    }
`
function ItemCard({obj, addToCart}) {
    const { title, image, category, price } = obj
    return(<>
        <ImageContainer><Img src={image} alt={title} /></ImageContainer>
        <Wrapper>
             <DescriptionContainer>
                <h1>{title}</h1>
                <h2>{category}</h2>
                <Price price={price}/>
            </DescriptionContainer>
            <AddToCart addToCart={addToCart}/>
        </Wrapper>
       
    </>)
}
export default ItemCard