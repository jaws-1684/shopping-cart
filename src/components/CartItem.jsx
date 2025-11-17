import { Price } from "../App";
import { calcTotal } from "../routes/Cart";
import UpdateCart from "../components/UpdateCart";
import styled from "styled-components";

function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    }
    return str;
}

const Container = styled.div`
    display: flex;
    gap: 1.25rem;

    @media (max-width: 800px) {
        && {
            flex-direction: column;
        }
    }
`

function CartItem({item, cart, addToCart, removeFromCart}) {
    return(<>
        <Container>
             <img style={{width: "50px"}}src={item.image} alt="" />
             <div>
                <p>{truncate(item.title, 20)}</p>
                <Price price={item.price}/>
             </div>
        </Container>
       
        <UpdateCart  id={item.id} pquantity={cart[item.id]} removeFromCart={removeFromCart} addToCart={addToCart}/>
        <div>
            <Price price={calcTotal([item], cart)}/>
        </div>   
    </>)
}
export default CartItem