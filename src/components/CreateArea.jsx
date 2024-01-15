import React, {useState} from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
    const [note, setNote]=useState({
        title:"",
        content:""
    });
    const [state, trans]=useState(false);
    function handleChange(event){
        const {name, value}=event.target;
        setNote((prevNote)=>{
            return {
                ...prevNote,
                [name]:value
            };
        })
    }
    function handleClick(){
        setNote(()=>{
            return {
                title:"",
                content:""
            }
        });
        trans(!state);
    }
    function expand(){
        trans(!state);
    }
  return (
    <div>
      <form className="create-note">
        {state && <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>}
        <textarea  onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={state?"3":"1"} value={note.content}/>
        <Zoom in={state}>
        <Fab onClick={(event)=>{props.btn(event,note.title, note.content);handleClick()}}>
  <AddIcon />
</Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
