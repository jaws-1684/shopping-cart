import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Footer  from './components/Footer'
import { Outlet } from 'react-router'
import { useLoaderData } from 'react-router'
import { useState } from 'react'
import styled from 'styled-components'

export async function productLoader({ params }) {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Response("Product not found", { status: 404 }); // Custom error
    }
    return await response.json();
  } catch (err) {
    throw new Response("Server error", { status: 500 }); // Network failure
  }
}
export function Price({price}) {
  return(<p>${price.toFixed(2)} USD</p>)
}
const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  `
function App(props) {
  const items = useLoaderData()
  const [cart, setCart] = useState({"1": 6, "2": 5})
  const [quantityAlert, setQuantityAlert] = useState(false)

  function handleAddToCart([key, value]) {
    if (value <= 0) {
      return
    } else if (value > 20) {
      setQuantityAlert(true)
      return
    }
    setQuantityAlert(false) 
    setCart({...cart, [key]: value})
  }
  function handleRemoveFromCart(id) {
    const copy = {...cart}
    delete copy[id]
    setCart(copy)
  }
  return (<>
    <Banner/>
    <AppWrapper>
      <Nav cart={cart}/>
        <Outlet context={[items, cart, { handleAddToCart, handleRemoveFromCart, setCart }, quantityAlert]}/>
      <Footer/>
    </AppWrapper>
    </>)
}

export default App
