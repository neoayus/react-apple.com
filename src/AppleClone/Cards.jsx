import {PrimaryButton, SecondaryButton} from './Button.jsx'
import './Cards.css' ; 

export function Card({image, title, desc, primaryButtonText, secondaryButtonText, impInfo}){
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

export function CardBlack({image, title, desc, primaryButtonText, secondaryButtonText, impInfo}){
  return(
    <div className="card" style={{ backgroundImage : `url(${image})`, color: 'white'}}>

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

export function CardReverse({image, title, desc, primaryButtonText, secondaryButtonText, impInfo}){
  return(
    <div className="card" style={{ backgroundImage : `url(${image})`, color: 'white', flexDirection: 'column-reverse', paddingTop: '0px', paddingBottom: '40px' }}>

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