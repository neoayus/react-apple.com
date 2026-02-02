import {OrdinaryButton} from '../Buttons/Buttons';

var posterStyle = {
  backgroundSize : "cover",
  backgroundRepeat :  "no-repeat",
  backgroundPosition : "center",
  color: "white", 
  height: "526px", 
  width: "100vw",
  display: "flex",
  flexDirection :  "column", 
  textAlign :  "center",
  alignItems :  "center",
  justifyContent :  "flex-end",
  paddingBottom :  "36px",
  gap: "12px",
  flex: "0 0 auto" 
}

export default function Poster({image, genre, desc, }){
  return(
    <div className="poster" style={{backgroundImage : `url(${image})`, ...posterStyle }}>
      <p>{genre}</p>
      <p>{desc}</p>
      <OrdinaryButton> Stream Now </OrdinaryButton>
    </div>
  )
}