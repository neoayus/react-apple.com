import { Children, useState } from 'react';
import './DropDown.css';

export default function DropDown(){

  return(
    <ul className='list'>
      <UlLi> Shop and Learn </UlLi>
      {/* <UlLi> Account </UlLi>
      <UlLi> Entertainment </UlLi>
      <UlLi> Apple Store </UlLi>
      <UlLi> For Business </UlLi>
      <UlLi> For Education </UlLi>
      <UlLi> For HealthCare </UlLi>
      <UlLi> For Government </UlLi>
      <UlLi> Apple Values </UlLi>
      <UlLi> About Apple </UlLi> */}
    </ul>
  )
}

function UlLi({children}){

  const [open, setOpen] = useState(false); 

  function handleClick(){
    console.log()
    setOpen((open)=> !open);
  }

  return(
    <>
      <li onClick={handleClick}>
        <p>{children}</p>
        <div className="icon"> 
          { !open && 
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13 1L7 7L1 1" stroke="#6C6C6D" stroke-linecap="round" stroke-linejoin="round"/> </svg>
          }
        </div>
      </li>
      {open && <SubList items={["Store", "Mac", "iPad", "Watch", "Vision", "AirPods", "Tv & Home", "AirTag", "Accessories", "Gift Cards"]}/> }
    </>
  )
}


function SubList({items}){
  return(
    <ul className='sublist'> 
      {
        items.map((item)=> <li>{item}</li>)
      }
    </ul> 
  )
}