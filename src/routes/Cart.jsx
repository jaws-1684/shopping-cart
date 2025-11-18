import { useOutletContext } from "react-router";
import styled from "styled-components"
import Main from "../components/Main";
import { Price } from "../App";
import { Button } from "../components/AddToCart";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router";
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--primary-font)
`
const Products = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    border-bottom: 1px solid rgba(138, 130, 130, 0.2);
    padding: 10px 10px;
    gap: 20px;
    @media(max-width: 800px) {
        && {
         grid-template-columns: 1fr;
        }
        .h {
            display: none;
        } 
    }    
`
function getItems(cart, items) {
    const keys = Object.keys(cart).map(id => Number(id))
    return items.filter(i => keys.includes(i.id))
}
const Heading = styled.h1`
    font-family: var(--primary-font);
    font-size: var(--text-size-5xl)
`
const isEmpty = obj => !Object.keys(obj).length;
export function calcTotal (items, cart) {
    return items.reduce((acc, i) => acc += i.price * (cart[i.id]),0)
}

function Cart() {
    const [items, cart, {handleAddToCart, handleRemoveFromCart, setCart}] = useOutletContext()
    const cartItems = getItems(cart, items)
    let navigate = useNavigate();
    const total = calcTotal(cartItems, cart)
    return(<Main>
             <Heading>Your cart</Heading>
            {isEmpty(cart) && <Heading style={{textAlign: "center", transform: "translateY(10vh)"}}>Sorry nothing here yet</Heading>}
            {!isEmpty(cart) && <Wrapper>
               <Products>
                <div className="h">Product</div>
                <div className="h">Quantity</div>
                <div className="h">Total</div>
                  {cartItems.map(i => <CartItem key={i.id} item={i} cart={cart} removeFromCart={handleRemoveFromCart} addToCart={handleAddToCart}/>)}
               </Products>
                
                <div style={{alignSelf: "end", fontSize: "var(--text-size-2xl)"}}>
                    <p>Total</p>    
                    <Price price={total}/>
                     <Button style={{width: "100%"}}onClick={() => { 
                        alert("Your order is on the way")
                        navigate("/")
                        setCart({})
                        }}>Checkout</Button>  
                </div>
               
            </Wrapper>}
           
        </Main>)
}
export default Cart