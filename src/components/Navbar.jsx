import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const index = () => {

    const [show,setShow] = useState(false);

  return (
    <nav style={{
        width:"100%",
        height:"40px",
        display:"flex",
        justifyContent:"space-between",

    }}>
        <img src='src\assets\VFilms Logo.png' style={{
                width:"100px",
            }}></img>

                <div  style={{
                    paddingTop:"10px",
                    display:"flex",
                    gap:"30px",
                    justifyContent:'center',
                    alignItems:"center",
                }}>
            {
                show && <ul
                style={{
                    display:"flex",
                    gap:"30px",
                    listStyle:"none",
                    fontSize:"18px",
                    justifyContent:'center',
                    alignItems:"center",
                }}>
                <li><Link style={{textDecoration:"none", color:"black"}} to='/'>Services</Link></li>
                <li><Link style={{textDecoration:"none", color:"black"}} to='/stories'>Their Stories</Link></li>
                <li><Link style={{textDecoration:"none", color:"black"}} to='/'>Our Story</Link></li>
                <li><Link style={{textDecoration:"none", color:"black"}} to='/'>Varnan</Link></li>
                <li
                style={{
                    width:"139px",
                    height:"48px",
                    backgroundColor:"#F15D2B",
                    display:'flex',
                    justifyContent:"center",
                    alignItems:"center",
                    gap:"10px",
                    borderRadius:"50px"
                }}
                ><Link to='/form' style={{textDecoration:"none", color:"white"}} >Let's Talk</Link> 
                <img src='src\assets\Hero\mail.svg'></img></li>
            </ul>
            }

            <img src={show==false ?"src/assets/Menu.svg":'src/assets/Hero/Open.svg'}
            onClick={()=>{setShow(!show)}}
            style={{
                marginRight:'15px',
                width:"50px",
                height:"50px",
            }}></img>

        </div>
    </nav>
  )
}

export default index
