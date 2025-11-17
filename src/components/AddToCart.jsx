import { useState } from "react"
import styled from "styled-components";
import { useParams, useOutletContext } from "react-router";
const Button = styled.button`
    padding: 0.5rem;
    border: none;
    font-family: var(--para-font);
    font-size: var(--text-size-base);
    color: var(--secondary-text-color);
    background: var(--secondary-background-color);
    height: 100%;
    &&:hover {
        cursor: pointer;
    }
`
const SubmitButton = styled(Button)`
    width: 100%;
`
const Fieldset = styled.div`
    display: flex;
    justify-content: start;
    margin-bottom: 0.625rem;
    border: none;
    font-family: var(--primary-font)
`
const Input = styled.input`
    padding: 0.3125rem;
    text-align: center;
    border: none;
`
const Heading = styled.h2`
    font-family: var(--primary-font);
    font-size: var(--text-size-md)
`
function AddToCart({addToCart}) {
    const [quantity, setQuantity] = useState(0)
    const { id } = useParams()
    function handleChange (e) {
        e.preventDefault()
        const value = Number(e.target.value)
        if (value > 0 && value < 100) {
            setQuantity(value)
        }
    }
    function handleSubmit(e) {
        e.preventDefault()
        addToCart([id, quantity])
    }
    const decrement = () => {
        const res = Math.max(0, quantity - 1)
        setQuantity(res)
    }
    const increment = () => {
        const res = Math.min(99, quantity + 1)
        setQuantity(res)
    }
    return(<form onSubmit={handleSubmit}>
        <Heading>Quantity</Heading>
        <Fieldset>
            <Button onClick={() => decrement()} type="button">-</Button>
            <Input size="10" min="0" max="99" onClick={e => e.preventDefault()} value={quantity} onChange={handleChange} type="numeric"/>
            <Button onClick={() => increment()} type="button">+</Button>
        </Fieldset>
        <Fieldset>
            <SubmitButton type="submit">Add to Cart</SubmitButton>
        </Fieldset>
        
    </form>)
}

export default AddToCart