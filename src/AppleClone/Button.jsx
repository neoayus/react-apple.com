import './Button.css'

export function PrimaryButton({children}){
  return(
    <button className='button primary'>{children}</button>
  )
}

export function SecondaryButton({children}){
  return(
    <button className='button secondary'>{children}</button>
  )
}

export function OrdinaryButton({children}){
  return(
    <button className='button ordinary'>{children}</button>
  )
}