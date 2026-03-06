import Eventitem from "./Eventitem";

export default function Eventlist(props) {

    return (
        <div>
            {props.events.map(event => (
        <Eventitem key={event.id} event={event} /> 
      ))}
        </div>
    )
}