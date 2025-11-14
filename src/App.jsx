import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Footer  from './components/Footer'
import { Outlet } from 'react-router'
import { useLoaderData } from 'react-router'

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
function App(props) {
   const items = useLoaderData()
  return (<>
    <Banner/>
    <Nav/>
      <Outlet context={items}/>
    <Footer/>
    </>)
}

export default App
