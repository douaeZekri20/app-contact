import React from 'react'
import App from '../App';
export default function Contact({txt,tel,vill,delf}) {
  return (
    
    <div >

      <input type='text' style={{width:'15%'}} readOnly value={txt}/>
      <input type='tel'  style={{width:'15%'}} readOnly value={tel}/>
      <input type='text'    style={{width:'15%'}} readOnly value={vill}/>
      {/* <input type='button' className='btn btn-outline-danger'  onClick={delf}  value="SUPPRIMER" style={{width:'10%'}}/> */}
      &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg"  width="22" onClick={delf} style={{color:'red'}}  height="25" fill="currentColor" class="bi bi-person-dash-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>

    </div>
   
  );
}