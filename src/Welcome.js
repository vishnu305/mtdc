import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { FaBars, FaTimes } from "react-icons/fa";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import bac11 from './bac11.jpg';
import bac22 from './bac22.jpg';
import bac33 from './bac33.jpg';
// import { CredentialsContext } from './App';
function Welcome(){
  const [click, setClick] = React.useState();

  const clickHandler = () => {
    setClick(!click);
  };
  const parallax = document.querySelector('.welcome1');
  const parallax1 = document.querySelector('.auto');
  window.addEventListener('scroll',function(){
    let offset = window.pageYOffset;
    const parallax = document.querySelector('.welcome1');
    const parallax1 = document.querySelector('.auto');
    if(parallax && parallax1){
    parallax.style.backgroundPositionY = offset*0.7+"px";
    parallax1.style.backgroundPositionY = offset*0.7+"px";
  }
});
  // const [credentials]=useContext(CredentialsContext);
  return(<Container>
    <nav className="nav">
      <div className="nav-center container1">
        <h1 className="logo"><FormatListBulletedIcon/>TODOLIST</h1>
        <ul className={click ? "nav-list active" : "nav-list"}>
              <li className="nav-item">
                <a href="#1" className='nav-link'>HOME</a>
              </li>
              <li className="nav-item">
                <a href='#2' className='nav-link'>ABOUT</a>
              </li>
              <li className="nav-item">
                <a href='#3' className='nav-link'>USAGE</a>
              </li>
              <li className="nav-item">
                <a href='#4' className='nav-link'>CONTACT ME</a>
              </li>
        </ul>
        <div className="hamburger" onClick={clickHandler}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
    <div id="1" className='welcome1' style={{backgroundImage:`url(${bac11})`}}>
      <h1 className='mainheading' > Welcome to Vishnu's Todo list </h1>
      <div style={{marginTop:"50px"}}>
        <Link style={{textDecoration:'none',margin:'40px'}} to='/register'><Button className='signupbtnbtn' variant="contained" color="secondary" style={{fontSize:'20px'}}>SIGNUP</Button></Link>
        <Link style={{textDecoration:'none',margin:'40px'}} to='/login'><Button className='loginbtnbtn' variant="contained" color="primary" style={{fontSize:'20px'}}>LOGIN</Button></Link>
        </div>
    </div>
    <div id='2' className='about1'>
      <h1 style={{margin:'50px',fontSize:"50px"}}>About Todolist App</h1>
      <p style={{margin:'50px',fontSize:'20px',marginBottom:'100px'}}>Todolist is a list of tasks you need to complete, or things that you want to do. Most typically, they’re organised in order of priority. Traditionally, they’re written on a piece of paper or post it notes and acts as a memory aid. As technology has evolved we have been able to create a todo lists with excel spreadsheets, word documents, email lists, todo list apps, microsoft to do and google to do list.Todo list lists everything that you have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom.By keeping such a list, you make sure that your tasks are written down all in one place so you don't forget anything important</p>
    </div>
    <div id='3' className='usage1'>
    <img src={bac22} style={{margin:'50px'}}/>
    <div style={{width:'700px',margin:'50px'}}>
      <h1>How to Use</h1>
      <p style={{marginTop:'30px',fontSize:'15px'}}>When you Create a account and login to your account you will see a side bar which is having the contents like Inbox, Today, Important, Completed, Incompleted, e.t.c. In the Inbox or in any window you can see two options at top right corner which are '+' symbol which is used to add the todo and other icon is used to change the background image. You can see all the todo's irrespective of the date of todo in Inbox section. In Today Section you can see the Todo which is assigned for Today. In Important Section you can see all important Todos which you marked as star in the todo. And in Completed and In Completed sections you can see the completed and incompleted todo's. By clicking on the Add Item Button you can create a section like Groceries and you can add items in it like Carrots, Beetroots, e.t.c. When you click on Google Keep option you will be taken to google keep clone where you can add the important notes like Interview Questions. </p>
      <p>For further Reference <a href="https://youtu.be/9_mtKKxM4lk" target="_blank" rel="noopener noreferrer"> Click Here..</a></p>
    </div>
    </div>
    <div className='auto' style={{backgroundImage:`url(${bac33})`}}>
        <h1 style={{marginTop:'100px',margin:'80px'}}>Notification</h1>
        <p className='autopar' style={{width:'80%'}}>This Todolist App will automatically notifies you about your incompleted todo's in the assigned time and four other times which are assigned on that day to your mobile through normal text messages and whatsapp messages, So that you don't have to remember what to do.</p>
    </div>
    <Footer id='4' className='footer1'>
    <h4 style={{color:'white',marginTop:'40px'}}>CONTACT ME</h4>
    <br />
    <div>
        <a
          style={{ zIndex: "200" }}
          class="footer-link"
          href="https://www.linkedin.com/in/vishnu-divvela-868b871b9/"
        >
          LinkedIn
        </a>
        <a
          style={{ zIndex: "200" }}
          class="footer-link"
          href="https://github.com/vishnu305"
        >
          Github
        </a>
        <a
          style={{ zIndex: "200" }}
          class="footer-link"
          href="https://www.youtube.com/channel/UC8N_xtS5BFOfNWFZgcn-Jfg/videos"
        >
          Youtube
        </a>
        </div>
        <br />
        <p style={{ color: "white",marginBottom:'40px' }}>© 2021 Vishnu Divvela.</p>
      </Footer>

    </Container>)
}

export default Welcome;


const Footer = styled.div`
  /* margin-top: 100px; */
  padding-bottom: 10px;
  background-color: #66bfbf;
  background: #243b55;
  display:flex;
  flex-direction:column;
  align-items:center;
  position: sticky;

  .footer-link {
    z-index: 2;
    color: #11999e;
    display: inline-block;
    margin: 10px 20px;
    text-decoration: none;
  }
  .footer-link::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: red;
    transition: width 0.3s;
  }

  .footer-link:hover::after {
    width: 100%;
    transition: width 0.3s;
  }
  .footer-link:hover {
    color: white;
  }



`;


const Container = styled.div`
  width: 100%;
  position: relative;
  font-family: "Poppins", sans-serif;

  a{
    text-decoration: none;
  }
  ul,
  li {
    list-style: none;
  }
  .container1{
    max-width: 114rem;
    margin: 0 5%;
  }
  @media only screen and (max-width: 1200px) {
  .container {
    padding: 0 3rem;
  }
  }
  .nav {
    padding: 1.8rem 0;
    /* background-color: #007FFF; */
    background: linear-gradient(120deg,#2980b9, #8e44ad);
    position: fixed;
    width:100%;
    z-index:100;
  }

  .hamburger {
      display: none;
  }

  .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }

  .logo {
      color: #fff;
      display:flex;
      align-items: center;
  }


  .nav-list {
      display: flex;
      align-items: center;
  }

  .nav-item:not(:last-child) {
      margin-right: .5rem;
  }

  .nav-link {
      color: #fff;
      padding: 1rem;
      border-radius: .5rem;
      transition: all 300ms ease-in-out;
  }

  .color {
      background-color: rgb(29, 172, 255);

  }

  .nav-link:hover {
      background-color: rgb(29, 172, 255);
  }

  @media only screen and (max-width: 768px) {
      .hamburger {
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2.5rem;
          cursor: pointer;
      }

      .nav-list {
          position: fixed;
          top: 11%;
          left: -100%;
          flex-direction: column;
          align-items: center;
          background-color: #242424;
          width: 100%;
          height: 100%;
          padding: 1.6rem 0;
          transition: all 300ms ease-in-out;
          z-index:100;
      }

      .nav-list.active {
          left: 0%;
      }

      .nav-item:not(:last-child) {
          margin-right: 0;
      }

      .nav-item {
          margin: 2rem 0;
          width: 100%;
          text-align: center;
      }

      .nav-link {
          font-size: 1.8rem;
          width: 100%;
      }
      }
      .welcome1{
        margin-top:95px;
        height:85vh;
        display:flex;
        flex-direction: column;
        align-items:center;
        /* justify-content: center; */
        width:100%;
        font-size:1.8rem;
        background-attachment:fixed;
      }
      .mainheading{
        margin-top:180px;
      }
      .about1{
        background-color: #3F0713;
        color:white;
        display:flex;
        flex-direction: column;
        text-align: center;
        margin-top:2px;
      }
      .usage1{
        display:flex;
        flex-wrap:wrap;
      }
      .auto{
        /* width:100%; */
        background-position:center;
        background-size:cover;
        height:80vh;
        color:white;
        display:flex;
        flex-direction: column;
        align-items:center;
        /* justify-content: center; */
        text-align:center;
        font-size:1.8rem;
        background-attachment:fixed;
      }

      @media only screen and (max-width: 768px) {
        *{
          width:80%;
        }
        .about1{
          width:100%;
        }
        .usage1{
          width:100%;
        }
        .auto{
          width:100%;
        }
        .footer1{
          width:100%;
          /* margin-top:100px; */
        }
        .autopar{
          width:100%;
          /* height:100%; */
          font-size:70%;
        }
        .loginbtnbtn{
          margin-top:10px;
        }
        .signupbtnbtn{
          margin-bottom:10px;
        }
        .mainheading{
          margin-top:130px;
        }
      }
`
