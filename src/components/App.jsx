import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App(){
    
    const [notes, setNotes]=useState([]);
    function handleClick(event,title, content){
        setNotes((prevNotes)=>{
            return [...prevNotes, {title:title, content :content}]
        })
        event.preventDefault();

    }
    function deleteNote(index){
        setNotes((prevNotes)=>{
            prevNotes.splice(index, 1);
            return [...prevNotes];
        })
    }
    return <div><Header />
    <CreateArea btn ={handleClick}/>
    {
        notes.map((note, index)=>{
            return <Note key={index} id ={index} title={note.title} content={note.content} delete={deleteNote}/>
        })
    }
    
    <Footer /></div>;
}
export default App;