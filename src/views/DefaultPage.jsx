import '../App.css'
import Eventlist from '../components/Eventlist';
import mitbillede from "../assets/calendar.png";
import Searchfield from '../components/Searchfield';
import { useEffect, useState } from 'react';

function DefaultPage() {

// Henter events fra localStorage  
const [events, setEvents] = useState(() => {
  const savedEvents = localStorage.getItem("events");
  return savedEvents ? JSON.parse(savedEvents) : [];
})  

const [filter, setFilter] = useState(""); 

// Når event listen ændrer sig, gemmes
// listen i webstorage/localstorage.
useEffect(() => {
  localStorage.setItem("events", JSON.stringify(events));
}, [events]);

function handleinput(event) { 
  setFilter(event.target.value);
}

const sorteretliste = events.toSorted((a,b) =>
a.date.localeCompare(b.date, "da", {sensitivity: "case"})
);

const filtreretliste=sorteretliste.filter(event=> 
  event.title.toLowerCase().includes(filter.toLowerCase()) ||
  event.description.toLowerCase().includes(filter.toLowerCase())
); 

  return (
      <>
        <img src={mitbillede} alt="Et billede af en kalender" width="150" />
        <Searchfield inputhandler={handleinput} filter={filter}/> 
        {filtreretliste.length > 0 ? (
        <div>
           <Eventlist events={filtreretliste} setEvents={setEvents}/> 
        </div>
      ) : (
      <p>Beklager, intet at vise...</p>
      )}
    </>
  )
}

export default DefaultPage

