import { useState } from 'react';
import './DropDown.css';

var dropdownList = [
  {
    listItem: "Shop and Learn",
    sublist : ["Store", "Mac", "iPad", "Watch", "Vision", "AirPods", "Tv & Home", "AirTag", "Accessories", "Gift Cards"],
  },
  {
    listItem : "Account",
    sublist : ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"], 
  },
  {
    listItem : "Entertainment",
    sublist : ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "Apple Store"], 
  },
  {
    listItem : "Apple Store",
    sublist : ["Find a Store", "Genius Bar", "Today at Apple", "Group Reservations", "Apple Camp", "Apple Store App", "Apple Trade in", "Financing", "Carrer Deasl at Apple", "Shopping Help"], 
  },
  {
    listItem : "For Business",
    sublist : ["Apple and Business", "Shop for Business"], 
  },
  {
    listItem : "For Education",
    sublist : ["Apple and Education", "Shop for K-12", "Shop for College"], 
  },
  {
    listItem : "For HealthCare",
    sublist : ["Apple and HealthCare"], 
  },
  {
    listItem : "For Government",
    sublist : ["Apple and Government", "Shop for Veterans and Military", "Shop for State and Local Employees", "Shop for Genera Employees"], 
  },
  {
    listItem : "Apple Value", 
    sublist : ["Accessibility", "Education", "Environment", "Inclusion and Diversity", "Privacy", "Racial Eqity and Justice", "Suupy Chain Innovation"], 
  },
  {
    listItem : "About Apple",
    sublist : ["Newsroom", "Apple Leadership", "Carrer Oppurtunity", "Investors", "Ethics & Compliance", "Events", "Contact Apple"], 
  },
];

export default function DropDown(){
  return(
    <ul className='list'>
      {
        dropdownList.map((item)=> <ListItem sublist={item.sublist}> {item.listItem} </ListItem>)
      } 
    </ul> 
  )
}

function ListItem({children, sublist}){

  const [open, setOpen] = useState(false); 

  function handleClick(){
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
      {open && <SubList items={sublist}/> }
    </>
  )
}

// 

function SubList({items}){
  return(
    <ul className='sublist'> 
      {
        items.map((item)=> <li>{item}</li>)
      }
    </ul> 
  )
}