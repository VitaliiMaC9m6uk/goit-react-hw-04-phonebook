const Filter = ({filter}) => {
    return (
      <>
        <label>Find contacts by name</label>
        <input onChange={filter}></input>
      </>
    );
}
export default Filter;