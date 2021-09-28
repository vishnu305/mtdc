import React, { useState , useContext , useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import './keep.css';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import {CredentialsContext} from '../App';
import { useHistory } from 'react-router-dom';
import {Link} from  'react-router-dom';

function App1() {
  const [notes, setNotes] = useState([]);
  var { userid } = useParams();
  const [credentials] = useContext(CredentialsContext);
  let history = useHistory();

  useEffect(()=>{
    if(!credentials){
       history.push("/");
    }else{

    fetch(`https://servervishnu.herokuapp.com/keep`,{
      method: 'GET',
      headers: {"Content-Type":"application/json",
      Authorization:`Basic ${userid}`
    },
  })
  .then((response)=> response.json())
  .then((todos) => setNotes(todos))
  }
  },[credentials,history]);


  const persist = (newTodo)=>{
    // e.preventDefault();
    fetch(`https://servervishnu.herokuapp.com/keep`,{
      method: 'POST',
      headers: {"Content-Type":"application/json",
      Authorization:`Basic ${userid}`
    },
    body: JSON.stringify(newTodo),
  })
  .then(()=>{})
  }


  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    var newnotes = [...notes,newNote];
    persist(newnotes);
  }

  function deleteNote(id) {
    var newnotes = notes;
    newnotes = newnotes.filter((noteItem,index)=>{
      return index !== id;
    })
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });

    persist(newnotes);
  }

  return (
    <Container>
      <Header />
      <Link style={{textDecoration:'none',color:'white'}} to="/inbox">
      <div className="backhome">BACK TO HOME</div>
      </Link>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </Container>
  );
}

export default App1;

const Container = styled.div`

      padding: 0;
      margin: 0;
      box-sizing: border-box;


      font-family: "Montserrat", sans-serif;


      background: #eee;
      background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
      padding: 0 16px;
      width: 100%;
      min-height:100vh;
      .backhome{
        background-color: #5C7AEA;
        background-color: #14279B;
        width:240px;
        height:30px;
        text-align:center;
        /* align-items:center; */
        /* vertical-align:middle; */
        color:white;
        transition: all 250ms;
        cursor:pointer;
        font-weight:bold;
        margin-top:30px;
        border-radius:15px;
        padding-top:12px
      }
      .backhome:hover{
        background-color: #14279B;
        background-color: #5C7AEA;
        font-weight:bold;
        letter-spacing:5px;
      }
      header {
      background-color: #f5ba13;
      margin: auto -16px;
      padding: 16px 32px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
      }

      header h1 {
      color: #fff;
      font-family: "McLaren", cursive;
      font-weight: 200;
      }

      footer {
      position: absolute;
      text-align: center;
      bottom: 0;
      width: 100%;
      height: 2.5rem;
      position: fixed;
      }

      footer p {
      color: #ccc;
      }
      .note {
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 5px #ccc;
      padding: 10px;
      width: 240px;
      margin: 16px;
      float: left;
      }
      .note h1 {
      font-size: 1.1em;
      margin-bottom: 6px;
      }
      .note p {
      font-size: 1.1em;
      margin-bottom: 10px;
      white-space: pre-wrap;
      word-wrap: break-word;
      }

      .note button {
      position: relative;
      float: right;
      margin-right: 10px;
      color: #f5ba13;
      border: none;
      width: 36px;
      height: 36px;
      cursor: pointer;
      outline: none;
      }

      form.create-note {
      position: relative;
      width: 480px;
      margin: 30px auto 20px auto;
      background: #fff;
      padding: 15px;
      border-radius: 7px;
      box-shadow: 0 1px 5px rgb(138, 137, 137);
      }
      form.create-note input,
      form.create-note textarea {
      width: 100%;
      border: none;
      padding: 4px;
      outline: none;
      font-size: 1.2em;
      font-family: inherit;
      resize: none;
      }
      form.create-note button {
      position: absolute;
      right: 18px;
      bottom: -18px;
      background: #f5ba13;
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      outline: none;
      }


`
