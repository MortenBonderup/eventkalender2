import Eventitem from "./Eventitem";

export default function Eventlist(props) {

    function deleteEventHandler(id) {
        const isConfirmed = window.confirm("Er du sikker på at du vil slette?");
        if (isConfirmed) {
            props.setEvents(props.events.filter(event => event.id !== id));
        }
    }

    return (
        <div>
            {props.events.map(event => (
        <Eventitem key={event.id} event={event} deleteHandler={deleteEventHandler} /> 
      ))}
        </div>
    )
}