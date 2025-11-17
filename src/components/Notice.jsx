import styled from "styled-components"

const StyledNotice = styled.div`
    background: lightgreen;
    padding: 0.3125rem;
    border-radius: 5px;
    color: green;
`
function Notice(props) {
    return(<StyledNotice>
        <p>{props.children}</p>
    </StyledNotice>)
}
export default Notice