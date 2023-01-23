import React, {useState,useRef } from 'react'
import {v4 as uuid} from 'uuid';
import Contact from './Contact';


export default function FormContact () {
  const[contacts,setContacs]=useState([
    {
      id:uuid(),name:'rajae allali',tel:'0123456789',ville:'tanger'
    },
    {
      id:uuid(),name:'mohammed bakkali',tel:'0612456789',ville:'casa'
    },
    {
      id:uuid(),name:'anas fillali',tel:'0656789212',ville:'fes'

    }

  ]);
  const name=useRef();
  const tel=useRef();
  const ville=useRef();

  const[search,setsearch]=useState('');

  const addC=()=>{
    const nom= name.current.value;
    const tele=tel.current.value;
    const villle=ville.current.value;
    setContacs([...contacts,{name:nom,tel:tele,ville:villle}]);
    name.current.value='';
    tel.current.value='';
    ville.current.value='';
  };
  const del=(idC)=>{
    let ncontact=contacts.filter((t)=>{
      return t.id!=idC
    })
    setContacs(ncontact);
  }
  const triercroissant=()=>{
    const contacttrier=contacts.slice().sort((a,b) => a.name.localeCompare(b.name));
    setContacs(contacttrier);
  }
  const trierdecroissant =()=>{
    const contacttrier=contacts.slice().sort((b,a) => a.name.localeCompare(b.name));
    setContacs(contacttrier);

  }


  return (
    < div className='App'>
    <h1 >APP CONTACT</h1>
    &nbsp;&nbsp;&nbsp;&nbsp;

    <div className='row justify-content-center'>
      <input type='search' placeholder='search...' className='form-control justify-content-center' id='btn0' style={{width:'25%'}} onChange={(e)=>{setsearch(e.target.value)}} />

    </div>
   
   <br/><br/>
   <h4>AJOUTER CONTACT</h4>
   
    <div className='row justify-content-center' >
    <div className='mt-5 py-3 col-6' style={{backgroundColor:'white'}}>
    <br/>
    <div>
    <form action=''>
     NOM :&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" placeholder='Entrer votre nom...' style={{width:'50%'}}  id='nom'  ref={name} />
     

     <br />  <br /> 
    TEL :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="Tel" placeholder='Entrer votre telephone...' style={{width:'50%'}} id='tel' ref={tel} />
    
    <br />  <br />
    VILLE :&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" placeholder='Entrer votre ville..' style={{width:'50%'}} id='ville' ref={ville}  />
    <br /><br />
    <svg xmlns="http://www.w3.org/2000/svg" width="100px"  style={{marginLeft:'400px', color:'blue'}} height="50px" onClick={addC}  fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
    
    {/* <input  type="button"  className='btn btn-outline-primary' value="  AJOUTER  "  onClick={addC}/> */}
     

    </form>
    </div>
    </div>
    </div>
    <br /><br />
    <h4>LISTE CONTACT</h4>
    <br/>
    <div>
    {/* Button trier croissant */}
    Trier :  &nbsp;&nbsp; <svg xmlns="http://www.w3.org/2000/svg"values='croissant' onClick={triercroissant}   width="30" height="25" fill="currentColor" class="bi bi-sort-alpha-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"/>
        <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
      </svg>

   {/* Button trier decroissant  */}
   <svg xmlns="http://www.w3.org/2000/svg" values='decroissant' onClick={trierdecroissant} width="30" height="25" fill="currentColor" class="bi bi-sort-alpha-down-alt" viewBox="0 0 16 16">
    <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"/>
    <path fill-rule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"/>
    <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
   </svg>
   </div>
    <br />
<div>
    {

contacts.filter((t)=>{
  return search.toLowerCase()==='' ? t :t.ville.toLocaleLowerCase().includes(search);
}).map((t)=>{

return <div key={t.id}><Contact   delf={(idC)=>{del(t.id)}} tel={t.tel} vill={t.ville} txt={t.name}/></div> 



})




}
</div> 
   
    

</div>
  );
}