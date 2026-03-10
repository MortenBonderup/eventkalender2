import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {

    // Hent liste fra localstorage
    const [events, setEvents] = useState(() => {
        const savedEvents = localStorage.getItem("events");
        return savedEvents ? JSON.parse(savedEvents) : [];
    })

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    let navigate=useNavigate();
    
    // Gem liste i localstorage
    useEffect(() => {
        localStorage.setItem("events",JSON.stringify(events));
    }, [events]);

    // Køres efter brugeren har trykket "opret"
    // i formularen.
    function createHandler(e){
        e.preventDefault();
        const highestId=events.length > 0 ? Math.max(...events.map(event=>event.id)) : -1;
        const newEvent = {id: highestId+1, title: title, date: date, description: description};
        setEvents([...events, newEvent]);
        navigate("/");
    }

    return (
        <form onSubmit={createHandler}>
            <h2>Opret ny event</h2>
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
            <button type="submit">Opret</button>
        </form>
    )
}