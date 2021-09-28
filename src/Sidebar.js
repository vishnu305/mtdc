import React,{useContext,useState,useEffect} from 'react';
import styled from 'styled-components';
import SidebarRow from './SidebarRow';
import InboxIcon from '@material-ui/icons/Inbox';
import ListIcon from '@material-ui/icons/List';
import TodayIcon from '@material-ui/icons/Today';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Modal from 'react-modal';
import {Link} from  'react-router-dom';
import {CredentialsContext} from './App';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
// import Listitem from './Listitem';
// import ListIcon from '@material-ui/icons/List';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@material-ui/icons/Close';
Modal.setAppElement("#root");
// const handleErrors = async (response) => {
//   if(!response.ok){
//     const {message} = await response.json();
//     throw Error(message);
//   }
//   return response.json();
// }
function Sidebar(){
  const [credentials] = useContext(CredentialsContext);
  const [openadd,setadd]=useState(false);
  const [input, setInput]= useState('');
  const [todoslist,settodoslist]=useState([]);
  const [isMobile,setIsMobile]=useState(false);
  const [a,sa]=useState(0);
  let history = useHistory();
  const customStyles = {
  content : {
    top                   : '40%',
    left                  : '70%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-40%',
    transform             : 'translate(-40%, -40%)',
  }
};
  useEffect(()=>{
    if(!credentials){
       history.push("/");
    }else{
    // console.log("kdsajjkfdsjlk;");
    fetch(`https://servervishnu.herokuapp.com/section`,{
      method: 'GET',
      headers: {"Content-Type":"application/json",
      Authorization:`Basic ${credentials.userid}:${credentials.password}`
    },
  })
  .then((response)=> response.json())
  .then((sections) => settodoslist(sections));
//   fetch(`https://servervishnu.herokuapp.com/section`,{
//     method: 'GET',
//     headers: {"Content-Type":"application/json",
//     Authorization:`Basic ${credentials.userid}:${credentials.password}`
//   },
// })
// .then((response)=> response.json())
// .then((sections) => settodoslist(sections));
  }
},[credentials,history,a]);

  // const reloading =()=>{
  //   if(!credentials){
  //      history.push("/");
  //   }else{
  //   fetch(`https://servervishnu.herokuapp.com/section`,{
  //     method: 'GET',
  //     headers: {"Content-Type":"application/json",
  //     Authorization:`Basic ${credentials.userid}:${credentials.password}`
  //   },
  // })
  // .then((response)=> response.json())
  // .then((sections) => settodoslist(sections))
  // }
  // }
const persist = (newTodo)=>{
  // e.preventDefault();
  fetch(`https://servervishnu.herokuapp.com/section`,{
    method: 'POST',
    headers: {"Content-Type":"application/json",
    Authorization:`Basic ${credentials.userid}:${credentials.password}`
  },
  body: JSON.stringify(newTodo),
})
.then(()=>{});
}
// const persist1 = (newTodo1)=>{
//   // e.preventDefault();
//   fetch(`https://servervishnu.herokuapp.com/section`,{
//     method: 'POST',
//     headers: {"Content-Type":"application/json",
//     Authorization:`Basic ${credentials.userid}:${credentials.password}`
//   },
//   body: JSON.stringify(newTodo1),
// })
// .then(()=>{});
// }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setadd(false);
    // console.log(input);
    if(!input) return;
    const newtodo1 = {section: input};
    const newtodos1 = [...todoslist,newtodo1];
    settodoslist(newtodos1);
    persist(newtodos1);
    setInput('');

    sa(a+1);
    // reloading();
  }
    // const deleteitem = (id)=>{
    //   const newTodoList1 = [...todoslist];
    //   // newTodoList1[index]
    //   // arr.splice(i, 1);
    //   // newTodoList1.splice(index,1);
    //   const todoItem1 = newTodoList1.find((todo) => todo._id === id);
    //   // console.log(todoItem1);
    //   console.log(newTodoList1);
    //   console.log(todoItem1);
    //   function arrayRemove(arr, value) {
    //
    //       return arr.filter(function(ele){
    //           return ele._id != value._id;
    //       });
    //   }
    //
    //   var result = arrayRemove(newTodoList1, todoItem1);
    //   console.log(result);
    //   settodoslist(result);
    //   persist(result);
    // }
    const deleteitem = (index)=>{
      const newTodoList1 = [...todoslist];
      // newTodoList1[index]
      // arr.splice(i, 1);
      newTodoList1.splice(index,1);
      settodoslist(newTodoList1);
      persist(newTodoList1);
    }
    const getTodos = ()=>{
      //   if(!credentials){
      //      history.push("/");
      //   }else{
      //   fetch(`https://servervishnu.herokuapp.com/section`,{
      //     method: 'GET',
      //     headers: {"Content-Type":"application/json",
      //     Authorization:`Basic ${credentials.userid}:${credentials.password}`
      //   },
      // })
      // .then((response)=> response.json())
      // .then((sections) => settodoslist(sections))
      // }
      return todoslist;
    }
    // const listitem = ()=>{
    //   return <Listitem />
    // }
    const chch = ()=>{
      setIsMobile(!isMobile);
      var hi = document.querySelectorAll('.layer1');
      console.log(hi);
      if(isMobile === false){
      hi[0].style.zIndex = "100";
    }else{
      hi[0].style.zIndex = "0";
    }
    }
  return(<div className="sidebarstyle">
        <button onClick={chch} className="mobile-menu-icon">
        {isMobile ? <CloseIcon style={{width:"30px",color:"white"}} class="fas fa-times" />:<MenuIcon style={{width:"30px",color:"white"}} class="fas fa-bars" />}
        </button>
          <Container className="layer1">
          <h3 onClick={()=>console.log("hi")}>Welcome {credentials && credentials.username }</h3>
          <Link style={{textDecoration:'none',color:'white'}} to="/inbox">
            <SidebarRow Icon={InboxIcon} title="Inbox"/>
          </Link>
          <Link style={{textDecoration:'none',color:'white'}} to="/today">
            <SidebarRow Icon={TodayIcon} title="Today"/>
          </Link>
          <Link style={{textDecoration:'none',color:'white'}} to="/starred">
            <SidebarRow Icon={StarBorderIcon} title="Important"/>
          </Link>
          <Link style={{textDecoration:'none',color:'white'}} to="/completed">
            <SidebarRow Icon={DoneIcon} title="Completed"/>
          </Link>
          <Link style={{textDecoration:'none',color:'white'}} to="/notcompleted">
            <SidebarRow Icon={CloseIcon} title="Not Completed"/>
          </Link>
          <a style={{textDecoration:'none',color:'white'}} href="https://covid19tracker-vishnuproject.netlify.app/" target="_blank" rel="noopener noreferrer">
          <SidebarRow Icon={ArtTrackIcon} title="Covid Tracker"/>
          </a>
          <Link style={{textDecoration:'none',color:'white'}} to={`/keep/${credentials.userid}`}>
          <SidebarRow Icon={EmojiObjectsIcon} title="Google Keep"/>
          </Link>
          {getTodos().map((todo,index)=>(

            <div key={index} style={{cursor:'auto'}} className="itemlist23">
              <Link style={{textDecoration:'none',color:'white'}} to={`/listitem/${todo._id}*${todo.section}`}>
              <SidebarRow Icon={ListIcon} title={todo.section}/>
              </Link>
              <Link style={{textDecoration:'none',color:'white'}} to="/inbox">
              <DeleteIcon style={{cursor:"pointer",fontSize:"20px",marginTop:"10px"}} onClick={()=>deleteitem(index)} />
              </Link>
            </div>

          ))}
          <div onClick={()=>{setadd(true)}}>
          <SidebarRow Icon={AddIcon} title="New List" onClick={()=>{setadd(true)}}/>
          </div>
          <Link style={{textDecoration:'none',color:'white'}} to="/">
          <SidebarRow Icon={ExitToAppIcon} title="Logout"/>
          </Link>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Modal style={customStyles} isOpen={openadd} onRequestClose={()=>{setadd(false)}}>
            <h2>Add new Section</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>{setInput(e.target.value)}} name="newitem" placeholder = "Add a Section" value={input} className="todoinput modalinput"/>
            <button type="submit" className="todobutton modalinput" onClick={()=>{sa(a+1)}}>Add</button>
            </form>
            <button onClick={()=>{setadd(false)}} className="modalinput">Close</button>
          </Modal>
          </Container>
          {!credentials && history.push("/")}
          </div>
        )
}
export default Sidebar;
const Container = styled.div`
    flex: 0.2;
    position: fixed;
    width: 22%;
    height: 100vh;
    background-color: black;
    color:white;
    overflow-y:scroll;
    h3{
      padding: 10px;
      margin: 30px 12px;
      color: #eeebdd;
      padding-right: 0;

    }
    @media screen and (max-width: 780px){
        /* transition: width 2s; */
        display: block;
        width:40%;
        margin:0;
        .fa-bars{
          z-index:100;
        }
  }
`
