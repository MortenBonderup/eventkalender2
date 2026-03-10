import { Link } from "react-router-dom";

export default function Eventitem(props){
    
    const idag=new Date().toISOString().split("T")[0];

    // Funktion modtager dato som tekst
      // og konverterer den til formatet DD. månedsnavn YYYY
      function formatDate(dateString) {
        const date = new Date(dateString);
        const newDate = date.toLocaleDateString('da-DK', {
          day: "numeric",
          month: "long",
          year: "numeric"
        });
        return newDate;
      }

    return (
        <div>
            <h3>{props.event.date === idag ? "I dag: ": props.event.date > idag ? "Kommende: " : "Historisk: "}{props.event.title}</h3>
            <p>{formatDate(props.event.date)}</p>
            <p>{props.event.description}</p>
            <div className="event-actions">
            <Link to={`/update/${props.event.id}`}>Update event</Link>
            <button onClick={() => deleteHandler(props.event.id)}>Delete event</button>
      </div>

        </div>
    )
    
}