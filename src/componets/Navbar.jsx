import './home.css'
import { Link} from 'react-router-dom'
export default function Navbar(){


  return(

    <>
    
    <div className="navbar"> 
<div className='left-nav'>
  <Link className='notalink' to={"/"}><h1>Sunbelt Plants</h1></Link>
  </div>
  <div className='right-nav'>

    <Link className='about' to={"/about"}>About</Link>
    <Link className='about' to={"/where"}>Address / Hours</Link>
    <Link className='about' to={"/contact"}>Contact</Link>


 

  </div>

</div>
    
    
    </>


  )
}



