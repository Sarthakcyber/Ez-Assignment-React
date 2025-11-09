import Navbar from './Navbar'

const index = () => (
  <div>
    <Navbar/>
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      gap:"30px"
    }}>
      <div style={{marginTop:"50px"}}>
        <img src='src\assets\Hero\Hero Mandala.svg' style={{
          position: "absolute",
          width: "465px",
          height: "465px",
          zIndex: "-1",
          transform: "translateX(0%) translateY(20%)",
        }}></img>
        <img src='src\assets\VFilms Logo.png' style={{
          position: "relative",
          width: "288px",
          transform: "translateX(30%) translateY(230%)",
        }}></img>
      </div>


      <div style={{
          width: "625px",
          height: "130px",
          display:"flex",
          flexDirection:"column",
          fontSize: "50px",
          alignItems:"center",
          gap:"40px"}}>

            
        <p style={{
          width: "625px",
          height: "130px",
          fontFamily: "Island Moments",
          fontSize: "80px",
          textAlign: "center",
        }}>Varnan is where stories find their voice and form</p>

        <h3 style={{
          fontFamily:"Halant",
          fontSize:"30px",
          color:"#F15D2B",
          textAlign:"center"
        }}>Films . Brands . Art</h3>

        <p style={{
          width:"470px",
          textAlign: "center",
          fontSize:"14px",
          
        }}>Since 2009, V’ve been telling stories - stories of people, their journeys, and the places that shape them.
          Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
          V doesn’t just tell stories - V honors them.</p>
      </div>
    </div>
  </div>
)

export default index
