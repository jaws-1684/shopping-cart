import styled from "styled-components"
const Wrapper = styled.div`
    position: fixed;
    right: 0;
    width: 50vw;
    height: fit-content;
    background: red;
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
function Cart({items, cart}) {
    const cartItems = getItems(cart, items)
    return(<Wrapper><p>{cartItems.map(i => truncate(i.title, 20))}</p></Wrapper>)
}
export default Cart