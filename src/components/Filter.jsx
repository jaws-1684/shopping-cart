function Filter({title, options, onChange}) {
    return(<>
    <legend style={{fontFamily: "var(--primary-font)"}}>{title}</legend>
    <select defaultValue="all" onChange={(e) => onChange(e)}>
         <option value="">--Please choose an option--</option>
         <option value="all">All</option>
         {options.map(option => <option key={option.id}value={option.content.toLowerCase()}>{option.content}</option>)}
    </select>   
    </>)
}
export default Filter