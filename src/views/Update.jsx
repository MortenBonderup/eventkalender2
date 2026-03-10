import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {
    const {id} = useParams();

    // Hent liste fra localstorage
    const [events, setEvents] = useState(() => {
        const savedEvents = localStorage.getItem("events");
        return savedEvents ? JSON.parse(savedEvents) : [];
    })

    // Find eventet der skal opdateres.
    const event=events.find(event => event.id === Number(id));
    
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    let navigate=useNavigate();
    
    // Gem liste i localstorage
    useEffect(() => {
        localStorage.setItem("events",JSON.stringify(events));
    }, [events]);

    useEffect(() => {
        if (event) {
            setTitle(event.title);
            setDate(event.date);
            setDescription(event.description);
        }
    }, [event]);

    // Køres efter brugeren har trykket "Opdater"
    // i formularen.
    function updateHandler(e){
        e.preventDefault();
        const updatedEvent={id: Number(id), title: title, date: date, description: description};
        setEvents(events.map((event) => 
            event.id === Number(id) ? updatedEvent: event
        ))

        navigate("/");
    }

    return (
        <form onSubmit={updateHandler}>
            <h2>Opdater event</h2>
            <div>
                <label htmlFor="title">Titel:</label>
                <input type="text" id="title" name="title" value={title} required onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="date">Dato:</label>
                <input type="date" id="date" name="date" value={date} required onChange={(e)=>setDate(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="description">Beskrivelse:</label>
                <textarea id="description" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
            </div>
            <button type="submit">Opdater</button>
        </form>
    )
}