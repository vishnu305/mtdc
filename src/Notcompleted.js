import React,{useState,useContext,useEffect} from 'react';
import styled from 'styled-components';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import Bacmenu from './Bacmenu';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
// import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import {CredentialsContext} from './App';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
// import Todos from './Todos';
import { useHistory } from 'react-router-dom';
Modal.setAppElement("#root");
// const handleErrors = async (response) => {
//   if(!response.ok){
//     const {message} = await response.json();
//     throw Error(message);
//   }
//   return response.json();
// }
function Notcompleted(){
  const [openbacmenu,setopenbacmenu] = useState(false);
  const [backgroundimage,setbackgroundimage]=useState('#7952b3');
  const [openadd,setadd]=useState(false);
  const [credentials] = useContext(CredentialsContext);
  const [todoslist,settodoslist]=useState([]);
  const [openadd1,setadd1]=useState(false);
  const [editableindex,seteditableindex]=useState('');
  let history = useHistory();
  const open1 = ()=>{
    setopenbacmenu(true);
  }
//   useEffect(()=>{
//     fetch(`http://localhost:4000/todos`,{
//       method: 'POST',
//       headers: {"Content-Type":"application/json",
//       Authorization:`Basic ${credentials.userid}:${credentials.password}`
//     },
//     body: JSON.stringify(todoslist),
//   })
//   .then(()=>{})
//
// },[todoslist,credentials]);
//   useEffect(()=>{
//     fetch(`https://servervishnu.herokuapp.com/todos`,{
//       method: 'GET',
//       headers: {"Content-Type":"application/json",
//       Authorization:`Basic ${credentials.userid}:${credentials.password}`
//     },
//   })
//   .then((response)=> response.json())
//   .then((todos) => settodoslist(todos))
// },[]);
useEffect(()=>{
  if(!credentials){
     history.push("/");
  }else{
  fetch(`https://servervishnu.herokuapp.com/todos`,{
    method: 'GET',
    headers: {"Content-Type":"application/json",
    Authorization:`Basic ${credentials.userid}:${credentials.password}`
  },
})
.then((response)=> response.json())
.then((todos) => settodoslist(todos))
}
},[credentials,history]);
  const persist = (newTodo)=>{
    // e.preventDefault();
    fetch(`https://servervishnu.herokuapp.com/todos`,{
      method: 'POST',
      headers: {"Content-Type":"application/json",
      Authorization:`Basic ${credentials.userid}:${credentials.password}`
    },
    body: JSON.stringify(newTodo),
  })
  .then(()=>{})
  }
  var today = new Date();
  // var date = today.toLocaleDateString("en-US");
  var date = today.toISOString().substr(0,10);
  const [input, setInput]= useState('');
  const [inputdate,setinputdate] = useState(date);
  const [inputtime,setinputtime]=useState('');
  const [input1, setInput1]= useState('');
  const [inputdate1,setinputdate1] = useState(date);
  const [inputtime1,setinputtime1]=useState('');
  const handleSubmit = (e) =>{
    e.preventDefault();
    setadd(false);
    // var d = new Date();
    // var h=d.getHours();
    // var m=d.getMinutes();
    // var ampm=h >= 12 ? 'pm':'am';
    // h = h % 12;
    // h = h ? h : 12;
    // var time = h + ':' + m + ' ' + ampm;
    var h = inputtime.split(":")[0];
    var m = inputtime.split(":")[1];
    var ampm=h >= 12 ? 'pm':'am';
    h = h % 12;
    h = h ? h : 12;
    var time = h + ':' + m + ' ' + ampm;

    setinputtime(time);
    if(!input) return;
    const newtodo1 = {todo:input,date:inputdate,time:time,checked: false,starred: false};

    // settodoslist(prev =>{
    //   return[...prev,{todo:input,date:inputdate,time:time,checked: false}];
    // })
    const newtodos1 = [...todoslist,newtodo1];
    settodoslist(newtodos1);
    setInput('');
    var today = new Date();
    // var date = today.toLocaleDateString("en-US");
    var date = today.toISOString().substr(0,10);
    setinputdate(date);
    // setinputtime('');
    persist(newtodos1);
  }
  const customStyles = {
  content : {
    top                   : '40%',
    left                  : '40%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-40%',
    transform             : 'translate(-40%, -40%)'
  }
};
  const toggleTodo = (id)=>{
    // const newTodoList = [...todoslist];
    // newTodoList[index].checked = !newTodoList[index].checked;
    // settodoslist(newTodoList);
    // persist(newTodoList);
    const newTodoList = [...todoslist];
    const todoItem = newTodoList.find((todo) => todo._id === id);
    todoItem.checked = !todoItem.checked;
    settodoslist(newTodoList);
    persist(newTodoList);
  };
  const deleteitem = (id)=>{
    // const newTodoList1 = [...todoslist];
    // // newTodoList1[index]
    // // arr.splice(i, 1);
    // newTodoList1.splice(index,1);
    // settodoslist(newTodoList1);
    // persist(newTodoList1);
    const newTodoList1 = [...todoslist];
    // newTodoList1[index]
    // arr.splice(i, 1);
    // newTodoList1.splice(index,1);
    const todoItem1 = newTodoList1.find((todo) => todo._id === id);
    // console.log(todoItem1);
    function arrayRemove(arr, value) {

        return arr.filter(function(ele){
            return ele._id !== value._id;
        });
    }

    var result = arrayRemove(newTodoList1, todoItem1);
    settodoslist(result);
    persist(result);
  }
  const getTodos = ()=>{

    return todoslist.filter((todo)=>!todo.checked);
  }
  const edititem = (id)=>{

    const newTodoList2 = [...todoslist];
    const todoItem = newTodoList2.find((todo) => todo._id === id);
    seteditableindex(id);
    setInput1(todoItem.todo);
    setinputdate1(todoItem.date);
    var ttt = todoItem.time;
    // ttt.slice(0, -1);
    // ttt.slice(0, -1);
    // ttt.slice(0, -1);
    setinputtime1(ttt);
    setadd1(true);
  }
  const handleSubmit1 = (e) =>{
    e.preventDefault();
    setadd1(false);
    console.log('edited');
    console.log(input1,inputdate1,inputtime1);
    const newTodoList3 = [...todoslist];
    const todoItem = newTodoList3.find((todo) => todo._id === editableindex);
    todoItem.todo = input1;
    todoItem.date = inputdate1;
    var time1 = inputtime1;
    if(inputtime1.slice(-1) !== 'm'){
      var h1 = inputtime1.split(":")[0];
      var m1 = inputtime1.split(":")[1];
      var ampm1=h1 >= 12 ? 'pm':'am';
      h1 = h1 % 12;
      h1 = h1 ? h1 : 12;
      time1 = h1 + ':' + m1 + ' ' + ampm1;
      setinputtime1(time1);
    }

    todoItem.time = time1;
    settodoslist(newTodoList3);
    persist(newTodoList3);

  }
  const star = (id)=>{
    // const newTodoList4 = [...todoslist];
    // newTodoList4[index].starred = !newTodoList4[index].starred;
    // settodoslist(newTodoList4);
    // persist(newTodoList4);
    const newTodoList4 = [...todoslist];
    const todoItem4 = newTodoList4.find((todo) => todo._id === id);
    todoItem4.starred = !todoItem4.starred;
    settodoslist(newTodoList4);
    persist(newTodoList4);
  }
  return(<Container style={{backgroundColor:backgroundimage,backgroundImage:`url(${backgroundimage})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
    <Content>
    <div className="content1">
      <h3> NOT COMPLETED </h3>
      <div>
        <ImageOutlinedIcon className="icon1" onClick={open1}/>
        <AddCircleOutlineOutlinedIcon onClick={()=>{setadd(true)}} className="icon1" />
      </div>
    </div>
    <div className="todocontainer">
    {getTodos().map((todo)=>(
      <div key={todo._id} className="itemppp item22">
      <div className = "item">
      <input onChange={()=>toggleTodo(todo._id)} type="checkbox" className="item22" checked={todo.checked} />
      <p style={{width:'auto',fontSize:'20px'}} className="item22"> {todo.todo} </p>
      <label className="item22">{todo.date} at {todo.time}</label>

      <DeleteIcon style={{cursor:"pointer"}} onClick={()=>deleteitem(todo._id)} className="item22" />
      </div>
      <EditIcon style={{cursor:"pointer"}} onClick={()=>edititem(todo._id)} className="item22" />
      {todo.starred ? <StarIcon style={{cursor:"pointer"}} className="item22" onClick={()=>star(todo._id)} /> :<StarBorderIcon style={{cursor:"pointer"}} className="item22" onClick={()=>star(todo._id)} />}
      </div>
    ))}
    </div>

    <div className="footer1">
      <h4>Copyright @ Divvela Vishnu Sai Kumar</h4>
    </div>
    </Content>

  <Bacmenu openbacmenu={openbacmenu} setopenbacmenu={setopenbacmenu} setbackgroundimage={setbackgroundimage}/>
  <Modal style={customStyles} isOpen={openadd1} onRequestClose={()=>{setadd1(false)}}>
    <h2>Edit Your Todo</h2>
    <form onSubmit={handleSubmit1}>
    <input type="text" onChange={(e)=>{setInput1(e.target.value)}} name="newitem" placeholder = "Add a todo" value={input1} className="todoinput modalinput"/>
    <input type="date" onChange={(e)=>{setinputdate1(e.target.value)}} value={inputdate1} name="newdate" className="modalinput" />
    <input type="time" onChange={(e)=>{setinputtime1(e.target.value)}} name="time1" value={inputtime1} className="modalinput" />
    <button type="submit" className="todobutton modalinput">Edit</button>
    </form>
    <button onClick={()=>{setadd1(false)}} className="modalinput">Close</button>
  </Modal>
  <Modal style={customStyles} isOpen={openadd} onRequestClose={()=>{setadd(false)}}>
    <h2>Add what's the plan for Today or for Future</h2>
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={(e)=>{setInput(e.target.value)}} name="newitem" placeholder = "Add a todo" value={input} className="todoinput modalinput"/>
    <input type="date" onChange={(e)=>{setinputdate(e.target.value)}} defaultValue={date} name="newdate" className="modalinput" />
    <input type="time" onChange={(e)=>{setinputtime(e.target.value)}} name="time1" value={inputtime} className="modalinput" />
    <button type="submit" className="todobutton modalinput">Add</button>
    </form>
    <button onClick={()=>{setadd(false)}} className="modalinput">Close</button>
  </Modal>
  {!credentials && history.push("/")}
  </Container>

)
}
export default Notcompleted;

const Container = styled.div`
    flex:0.9999;
    margin-left:22%;
    position: relative;
    min-height:100vh;
    @media screen and (max-width: 780px){
      margin:0;

      height: 100vh;
      width: 100vw;
      position: fixed;
    }

`
const Content = styled.div`
  .content1{
    width: 94%;
    min-height: 50px;
    margin: 15px;
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3{
      color: white;
      margin-left: 50px;
    }
    .icon1{
      color: white;
      cursor:pointer;
      margin: 0 10px;
      &:hover{
        background:#000;
      }
    }
  }
  .footer1{
    /* position:absolute;
    bottom:0;
    width: 100%; */
    h4{
      color: white;
      text-align: center;
      margin-top: 0;
      margin-bottom:20px;
    }
  }
`
