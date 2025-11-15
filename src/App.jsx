import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Footer  from './components/Footer'
import { Outlet } from 'react-router'
import { useLoaderData } from 'react-router'
import { useState } from 'react'

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
  return(<p>${price} USD</p>)
}
function App(props) {
  const items = useLoaderData()
  const [cart, setCart] = useState({})

  function handleAddToCart([key, value]) {
    setCart({...cart, [key]: value})
  }
  console.log(cart)
  return (<>
    <Banner/>
    <Nav cart={cart}/>
      <Outlet context={[items, cart, handleAddToCart]}/>
    <Footer/>
    </>)
}

export default App
