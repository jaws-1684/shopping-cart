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
            width: 100%;
        }
    }
`
const Total = styled.div`
    .total { display: none };
     @media (max-width: 800px) {
        .total {
            display: block;
        }    
    }
`
function CartItem({item, cart, addToCart, removeFromCart}) {
    return(<>
        <Container>
             <img style={{width: "50px"}}src={item.image} alt="" />
             <div>
                <p>{truncate(item.title, 40)}</p>
                <Price price={item.price}/>
             </div>
        </Container>
       
        <UpdateCart  id={item.id} pquantity={cart[item.id]} removeFromCart={removeFromCart} addToCart={addToCart}/>
        <Total>
            <div className="total">Total:</div>
            <Price price={calcTotal([item], cart)}/>
        </Total>   
    </>)
}
export default CartItem