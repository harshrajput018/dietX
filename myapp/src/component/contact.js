import './styles/contact.css'
export default function Contact() {







    return (
        <div style={{ color: 'white', height: '90vh' }}>

            <div style={{textAlign:'center',paddingTop:'2rem',background:'white',color:'black'}}><div style={{ fontSize: '3rem',fontWeight:'bolder' }}>Let's Talk</div>
            <div>Have any questions? Talk to us.</div></div>
            <div id='allcontacts'>

                <div id="whatsapp" className='elem' style={{textAlign:'center'}}>
                    <img src="./whatsapp.webp" width={'50px'} />
                    <p>7827960243</p>
                </div>
                <div id="instagram" className='elem' >
                    instagram.com
                </div>
                <div id="Email" className='elem'>
                    <p>harshrajput18@gmail.com</p>
                </div>
            </div>



        </div>
    )
}