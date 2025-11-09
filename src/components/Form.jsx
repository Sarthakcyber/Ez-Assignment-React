import React from 'react'
import Navbar from './Navbar'

function Form() {
  return (
  <>
      <Navbar/>
      <img src='src\assets\Footer Vector.png' style={{
          position:"fixed",
          transform:"translateX(-10%) translateY(50%)",
          zIndex:'-2'
        }}></img>
      <img src='src\assets\Footer Vector.png' style={{
        position:"fixed",
        transform:"translateX(200%) translateY(-20%) rotate(180deg)",
        zIndex:'-2'
        }}></img>

      <div style={{
        margin:"50px 0px",
        height:"100%",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        overflow:"hidden"
      }}>

        <div>
            <p style={{width:"400px"
            }}>Whether you have an idea, a question, or simply want to explore how V can work together, V’re just a message away.<br/>Let’s catch up over coffee.<br/>Great stories always begin with a good conversation</p>
        </div>
        <div style={{
          height:"100%",
          display:"flex",
          flexDirection:"column",
          zIndex:'1',
          overflow:"hidden"
        }}>
            <h2 style={{
              textAlign:"center",
              marginBottom:"0px"
            }}>Join The Story</h2>
            <p style={{
              marginBottom:"80px",
              textAlign:"center"
            }}>Ready to bring your vision to life? Let’s talk.</p>
            <form style={{
              display:"flex",
              flexDirection:"column",
              gap:"30px",
              alignItems:"center",
              overflow:"hidden"
            }}>
              <input 
              placeholder='Your Name*'
              style={{
                width:"380px",
                height:"30px",
                border:"solid 1px rgba(0,0,0,0.123)",
                backgroundColor:"white",
                borderRadius:"4px",
                padding:"0px 9px"
              }}></input>
              <input
              placeholder='Your Email*'
              style={{
                padding:"0px 9px",
                width:"380px",
                height:"30px",
                border:"solid 1px rgba(0,0,0,0.123)",
                backgroundColor:"white",
                borderRadius:"4px",
              }}></input>
              <input
              placeholder='Your Email*'
              style={{
                padding:"0px 9px",
                width:"380px",
                height:"30px",
                border:"solid 1px rgba(0,0,0,0.123)",
                backgroundColor:"white",
                borderRadius:"4px",
              }}></input>
              <textarea rows={3} 
              placeholder='Your Message*'
              style={{
                width:"380px",
                padding:"0px 9px",
                border:"solid 1px rgba(0,0,0,0.123)",
                backgroundColor:"white",
                borderRadius:"4px",
              }}></textarea>
              <button style={{
                width:"80px",
                height:"30px",
                border:"none",
                backgroundColor:"#F15D2B",
                borderRadius:"15px",
                color:"white"
              }}>Submit</button>
            </form>

            <div style={{display:"flex", gap:"30px",alignItems:"center",marginTop:'30px',justifyContent:"center"}}>
              <p style={{color:"#F15D2B",fontSize:"14px"}}>vernita@varnanfilms.co.in</p>
              <div style={{width:"2px", height:"20px",backgroundColor:"#F15D2B"}}/>
              <p style={{color:"#F15D2B",fontSize:"14px"}}>+91 98736 84567</p>
            </div>
        </div>
      </div>
  </>
  )
}

export default Form