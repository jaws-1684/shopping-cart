import { useOutletContext } from "react-router";
import styled from "styled-components"
import Main from "../components/Main";
const Wrapper = styled.div`
`
function getItems(cart, items) {
    const keys = Object.keys(cart).map(id => Number(id))
    return items.filter(i => keys.includes(i.id))
}
function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    }
    return str;
}
const isEmpty = obj => !Object.keys(obj).length;
const calcTotal = (items, cart) => items.reduce((acc, i) => acc += i.price * (cart[i.id]),0)

function Cart() {
    const [items, cart] = useOutletContext()
    const cartItems = getItems(cart, items)
    const total = calcTotal(cartItems, cart)
  
    return(<Main>
            {isEmpty(cart) && <h1>Sorry nothing here yet</h1>}
            {!isEmpty(cart) &&  <Wrapper>
                {cartItems.map(i => {
                    return <>
                      <p>{truncate(i.title, 20)}</p>
                      <h2>total</h2>
                      <p>{calcTotal([i], cart)}</p>
                    </>
                  
                    })}
                <p>Total</p>    
                <p>{total}</p>
            </Wrapper>}
           
        </Main>)
}
export default Cart