import React from 'react'
import Navbar from './Navbar'

const stories = () => {
  return (
    <>
        <Navbar/>
            <div style={{
                position:"absolute",
                overflow:'hidden'
                
            }}>
                <img style={{
                    width:'500px',
                    transform:"translateX(40%) translateY(-12%)",
                }} src="src\assets\Group 9.png" alt="" />

                <img style={{
                    width:'300px',
                    transform:"translateX(-150%) translateY(70%)"
                }} src="src\assets\136881584_562ce9a4-ee1d-4be1-8b12-5b603ee14c6b 1.svg" alt="" />

                <img style={{
                    width:'500px',
                    transform:"translateX(0%) translateY(20%)"
                }} src="src\assets\Group 2.svg" alt="" />

                <img style={{
                    width:'150px',
                    transform:"translateX(-450%) translateY(20%)",
                }} src='src\assets\Vector.svg'></img>

                <img style={{
                    width:'150px',
                    transform:"translateX(590%) translateY(-400%)",
                }} src='src\assets\Vector-1.svg'></img>

                <img style={{
                    width:'100px',
                    transform:"translateX(1150%) translateY(-200%)",
                }} src='src\assets\Vector-2.svg'></img>

                <p style={{
                    fontFamily: "Island Moments",
                    fontSize: "40px",
                    transform:"translateX(-10%) translateY(-250%)",
                    textAlign: "center",
                }}>Branding Experts</p>

                <p style={{
                    fontFamily: "Island Moments",
                    fontSize: "40px",
                    transform:"translateX(42%) translateY(-1050%)",
                    textAlign: "center",
                }}>Film Makers</p>

                <p style={{
                    fontFamily: "Island Moments",
                    fontSize: "40px",
                    transform:"translateX(10%) translateY(-1300%)",
                    textAlign: "center",
                }}>Art Curators</p>

                {/* <h3>Take a closer look at the stories V bring to life.</h3> */}

                <button style={{
                    width:"130px",
                    transform:"translateX(750%) translateY(-850%)",
                    height:"40px",
                    border:"none",
                    backgroundColor:"#F15D2B",
                    borderRadius:"25px",
                    color:"white"
                }}>Submit</button>

            </div>
        
    </>
  )
}

export default stories
