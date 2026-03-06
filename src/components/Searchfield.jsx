export default function Searchfield(props) {

    return (
        <div>
            <form>
                <input type="search" placeholder="Søg..." value={props.filter} onChange={props.inputhandler} />
            </form>
        </div>
    )
}