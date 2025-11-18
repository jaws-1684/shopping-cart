function Filter({title, options, onChange}) {
    return(<>
    <legend style={{fontFamily: "var(--primary-font)"}}>{title}</legend>
    <select name="filter" data-testid="select" defaultValue="all" onChange={(e) => onChange(e)}>
         <option name="all" value="0">All</option>
         {options.map(option => <option name={option.name} key={option.id} value={option.id}>{option.category}</option>)}
    </select>   
    </>)
}
export default Filter