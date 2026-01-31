import {PrimaryButton, SecondaryButton} from './Button.jsx'
import './Card.css' ; 

export default function Card({image, title, desc, primaryButtonText, secondaryButtonText, impInfo}){
  return(
    <div className="card" style={{ backgroundImage : `url(${image})`}}>

      <div className='text'>
        <p className="text-title"> {title} </p> 
        <p className="text-desc"> {desc} </p> 
      </div>
      
      <div className="card-buttons">
        <PrimaryButton> {primaryButtonText} </PrimaryButton>
        <SecondaryButton> {secondaryButtonText} </SecondaryButton>

      </div>
       
      <pre className='impInfo'> {impInfo} </pre>

    </div>
  )
}