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
    input {
        border: none;
    }
`
function AddToCart({addToCart}) {
    const [quantity, setQuantity] = useState(0)
    const { id } = useParams()
    function handleChange (e) {
        e.preventDefault()
        setQuantity(Number(e.target.value))
    }
    function handleSubmit(e) {
        e.preventDefault()
        addToCart([id, quantity])
    }
    return(<form onSubmit={handleSubmit}>
        <p>Quantity</p>
        <Fieldset>
            <Button type="button">-</Button>
            <input size="10" onClick={e => e.preventDefault()} value={quantity} onChange={handleChange} type="numeric" value={quantity}/>
            <Button type="button">+</Button>
        </Fieldset>
        <Fieldset>
            <SubmitButton type="submit">Add to Cart</SubmitButton>
        </Fieldset>
        
    </form>)
}

export default AddToCart