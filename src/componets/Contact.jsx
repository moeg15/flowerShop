
import './contact.css'
export default function Contact(){
  return(
    <>
    <div className='container-col'>
        <div className='contact'> 
        <h2>For Inventory and Short Questions</h2>
        <p className='bigger-text'>555-990-8787</p>
        </div>
        <div className='contact'>
        <h2>For long questions and regarding plant care fill out the below form</h2>
        <form className='skibby' action="">
          <label  style={{alignSelf: 'center'}} htmlFor="email">email:</label>
          <input className='test' id='email' placeholder='email' style={{alignSelf: 'center'}} type="email" />
          <label  style={{alignSelf: 'center'}} htmlFor="name">name:</label>
          <input className='test' id='name' placeholder='name' style={{alignSelf: 'center'}} type="text" />
        <textarea style={{marginTop: '15px'}} placeholder='message' name="" id="" rows={10} height={50}></textarea>

        </form>
        </div>

    </div>
    
    </>
  )
}