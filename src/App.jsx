// import stylesheet on top-most parent
import "./Index.css";
// import NavBar from './AppleClone/NavBar';
import Card from "./AppleClone/Card";

function App() {
  return (
    <>
      {/* <NavBar/> */}
      <Card
        image="../public/post-one.jpg"
        title="iPhone"
        desc="Meet the iPhone 16 family."
        primaryButtonText="learn more"
        secondaryButtonText="Shop iPhone"
        impInfo="Built for Apple Intelligence"
      />
    </>
  );
}

export default App;
