import React from 'react'
import './contact.css'
import { GitHub, LinkedIn, AccessAlarm } from '@mui/icons-material'
import {SiCodesandbox, SiGithub, SiLinkedin} from "react-icons/si"
import Button from '@mui/material/Button';
import at from '../../assets/at_symbol.svg'
import Hunflag from'../../assets/img/hu.svg'
import Enflag from'../../assets/img/gb.svg'
import profil from '../../assets/img/profile3.jpg'

const HandleLinkedin=()=>{
  window.open("https://www.linkedin.com/in/devbacso/","_blank")
}
const HandleGit=()=>{
  window.open("https://github.com/FerencBacso89","_blank")
}
const HandleSandbox=()=>{
  window.open("https://codesandbox.io/u/FerencBacso89","_blank")
}
const getCV =(event)=>{
  if(event.target.id == "hunCV"){
    const link = document.createElement('a');
    link.href = '../src/assets/CV/Bacsó-Ferenc_CV-HUN.pdf'; // Az elérési út a PDF fájlhoz
    link.download = 'Bacsó-Ferenc_CV-HUN.pdf'; // A letöltött fájl neve
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }
    if(event.target.id == "engCV"){
      const link = document.createElement('a');
      link.href = '../src/assets/CV/Bacsó-Ferenc_CV-ENG.pdf'; // Az elérési út a PDF fájlhoz
      link.download = 'Bacsó-Ferenc_CV-ENG.pdf'; // A letöltött fájl neve
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
}
function Contact() {
  return (
    <>
    <h2 className='container-fluid conTitle' >Contact me</h2>
   <div>
    <img className='sideProfile' alt='Profile picture' src={profil}></img>
    <section className='contacts col-10 row-cols-2'>
           <div className='cline col'> <b>E-mail: </b>ferenc.bacso89 <img className='atSymbol' src={at}></img> gmail.com </div>
           <div className=' col'> <SiLinkedin onClick={HandleLinkedin} className='Contactico'></SiLinkedin> <SiGithub onClick={HandleGit} className='Contactico'></SiGithub> <SiCodesandbox onClick={HandleSandbox} className='Contactico'></SiCodesandbox></div>
           <div className='cline col'> <b>Download CV: </b> <p> 
           <Button id='hunCV' className='CVbtn' onClick={getCV} sx={{ mt: 1, mr: 1 }}>
            Download my CV <img className='cvFlag' src={Hunflag}></img> version
          </Button>          
          <Button id='engCV' className='CVbtn' onClick={getCV} sx={{ mt: 1, mr: 1 }}>
            Download my CV <img className='cvFlag' src={Enflag}></img> version
          </Button>
          </p></div>        
    </section>
    </div> 
    </>
  )
}

export default Contact