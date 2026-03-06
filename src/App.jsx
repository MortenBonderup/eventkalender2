import './App.css'
import Eventlist from './components/Eventlist';
import Header from './Header';
import mitbillede from "./assets/calendar.png";
import Searchfield from './components/Searchfield';
import { useState } from 'react';

const events = [
  {id: 1, title: "Møde", date: "2026-03-05", description: "Fællesmøde i kantinen"},
  {id: 2, title: "Workshop", date: "2026-01-01", description: "Workshop i værkstedet"},
   {id: 3, title: "Faglig Debat", date: "2026-05-15", description: "Debat om moderne undervisningsmetoder og deres faglige forankring." },
  {id: 4, title: "Litteraturklub", date: "2026-05-22", description: "Møde i litteraturklubben med fokus på dansk sprog og tænkning." },
  {id: 5, title: "Undervisningsplanlægning", date: "2026-05-29", description: "Workshop om planlægning og evaluering af undervisningsforløb." }
];

function App() {

const [filter, setFilter] = useState(""); 

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
    <section>
      <img src={mitbillede} alt="Dette er et billede af en kalender" width="150"/>
      <Searchfield inputhandler={handleinput} filter={filter}/> 
      <Header/>
      <Eventlist events={filtreretliste}/> 
    </section>
  )
}

export default App

