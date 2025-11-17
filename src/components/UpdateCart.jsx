import { Fieldset, Input, Button } from "./AddToCart"
import { useState } from "react"
function UpdateCart({addToCart, removeFromCart, id, pquantity}) {
        const [quantity, setQuantity] = useState(pquantity || 0)
        function handleChange (e) {
            e.preventDefault()
            const value = Number(e.target.value)
            if (value === 0) {
                removeFromCart(id)
                return
            }
            if (value > 0 && value < 100) {
                setQuantity(res)
                addToCart([id, res])
            }
        }
        const decrement = () => {
            const res = Math.max(0, quantity - 1)
            if (res === 0) {
                removeFromCart(id)
                return
            }
            setQuantity(res)
            addToCart([id, res])
        }
        const increment = () => {
            const res = Math.min(99, quantity + 1)
            setQuantity(res)
            addToCart([id, res])
        }
        return(<form>
            <Fieldset>
                <Button onClick={() => decrement()} type="button">-</Button>
                <Input size="10" min="0" max="99" onClick={e => e.preventDefault()} value={quantity} onChange={handleChange} type="numeric"/>
                <Button onClick={() => increment()} type="button">+</Button>
            </Fieldset>            
        </form>)
}
export default UpdateCart