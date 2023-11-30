
import React from 'react'
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/img/gooseflight_brand.svg"
import "./Sidenav.css"

/*Material UI & Icons */
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { IconButton } from '@mui/material';
import { styled } from "@mui/material/styles";
import {
  BsGithub,
  BsLinkedin,
  BsJournalCode,
  BsMortarboardFill,
  BsPersonBoundingBox,
} from "react-icons/bs";
import {SiCodesandbox} from "react-icons/si"

// import { positions } from '@mui/system';
// import { LinkedIn } from '@mui/icons-material'

 
const TooltipIcon = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
      
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      fontSize: "1.1rem",
      fontWeight: "bold",
      width: "fit-content",
      height:"fit-content",
      position:"relative",
      textAlign:"center",
    },
  }));
const HandleLinkedin=()=>{
  window.open("https://www.linkedin.com/in/devbacso/","_blank")
}
const HandleGit=()=>{
  window.open("https://github.com/FerencBacso89","_blank")
}
const HandleSandbox=()=>{
  window.open("https://codesandbox.io/u/FerencBacso89","_blank")
}
function Sidenav() {
  return (
    <div className="navbar">
        <nav>
        <div className='groupNav'>
        <Link className="logo" to="/">
              <img id='logo-img' title='Welcome page' src={logo} alt="logo"></img>
        </Link>
        <NavLink className={"link-elem"} to="/education">
          <TooltipIcon title="Education" arrow placement="right">
            <IconButton className="navElement">
              <BsMortarboardFill />
            </IconButton>
          </TooltipIcon>
        </NavLink>      
        <NavLink className={"link-elem"} to="/mycode">
          <TooltipIcon title="My codes" arrow placement="right">
            <IconButton className="navElement">
              <BsJournalCode />
            </IconButton>
          </TooltipIcon>
        </NavLink>
        <NavLink className={"link-elem"} to="/contact">
          <TooltipIcon title="Contact me" arrow placement="right">
            <IconButton className="navElement">
              <BsPersonBoundingBox />
            </IconButton>
          </TooltipIcon>
        </NavLink>
        </div>
      <div className="groupNav contact"> 

        <NavLink className={"link-elem"} onClick={HandleGit}>
          <TooltipIcon title="Github" arrow placement="right">
            <IconButton className=" downNav">
              <BsGithub/>
            </IconButton>
          </TooltipIcon>
        </NavLink>
        <NavLink className={"link-elem"} onClick={HandleSandbox}>
          <TooltipIcon title="CodeSandbox" arrow placement="right">
            <IconButton className=" downNav">
              <SiCodesandbox/>
            </IconButton>
          </TooltipIcon>
        </NavLink>
        <NavLink className={"link-elem"} onClick={HandleLinkedin}>
          <TooltipIcon title="LinkedIn" arrow placement="right">
            <IconButton className=" downNav">
              <BsLinkedin/>
            </IconButton>
          </TooltipIcon>
        </NavLink>
      </div>
      </nav>
    </div>
    
  )
}

export default Sidenav