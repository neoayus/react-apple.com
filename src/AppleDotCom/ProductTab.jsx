import Card from './Card/Card.jsx' ;

export default function ProductTab(){
  return(
    <div style={{
      paddingBottom: '12px', 
      flexDirection: 'column',
      display: 'flex',
      gap: '12px'   
    }}>

      <Card
        image="/post-one.jpg"
        title="iPhone"
        desc="Meet the iPhone 16 family."
        primaryButtonText="learn more"
        secondaryButtonText="Shop iPhone"
        impInfo="Built for Apple Intelligence"
      />

      <Card
        theme='dark' 
        image="/ipad-pro.jpg"
        title="iPad Pro"
        desc="Unbelievably thin. Incredibly Powerful"
        primaryButtonText="learn more"
        secondaryButtonText="Buy"
        impInfo="Built for Apple Intelligence"
      />
      
      

      <Card
        image="/macbook-air.jpg"
        title="MacBook Air"
        desc={
          <>
            sky blue color. <br /> Sky high performance with M4.{" "}
          </>
        }
        primaryButtonText="learn more"
        secondaryButtonText="Buy"
      />

      <Card
        image="/ipad-air.jpeg"
        title="iPad Air"
        desc="Now supercharged with M3 Chip."
        primaryButtonText="learn more"
        secondaryButtonText="Buy"
      />

      <Card
        image="/watch.jpeg"
        title="WATCH"
        desc="Thinstant Classic"
        primaryButtonText="learn more"
        secondaryButtonText="Buy"
      />
      
      <Card
        layout='inverted'
        image="/air-pods2.jpg"
        title="AirPods2"
        desc="Now with a Heaing Air feature."
        primaryButtonText="learn more"
        secondaryButtonText="Buy"
        // impInfo="Built for Apple Intelligence"
      />

      <Card
        image="/trade-in.jpg"
        title="Trade In"
        desc={
          <>
            Get $170 - $ 630 in credit when you 
            <br/> trade in iPhone 12 or higher.
          </>
        }
        primaryButtonText="Get your estimate"
      />

      <Card
        image="/card.jpeg"
        title="Card"
        desc={
          <>
            Get up to 3% Daily Cash back
            <br/> with every purchase
          </>
        }
        primaryButtonText="learn more"
        secondaryButtonText="Apply Now"
      />
    </div>
  )
}