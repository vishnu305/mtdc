import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import styled from 'styled-components';
import './keep.css';
function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <Container>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </Container>
  );
}

export default CreateArea;

const Container = styled.div`
      * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      }
      html {
      font-family: "Montserrat", sans-serif;
      }
      body {
      background: #eee;
      background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
      padding: 0 16px;
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
