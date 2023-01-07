import React from 'react'
import './footer.css'
export default function Footer() {
  return (
   
        <footer className='footer'>
            <div className='inner-div'>
                <h4>
                    Welcome to the new site
                </h4>
                <img src={require('./1.png')} style={{width:'50%'}}/>
                <h4>
                    Leran about VIRGINAMERICA
                </h4>
            </div>
            <div className='inner-div'>
                <h4>
                    Welcome to the new site
                </h4>
                <img src={require('./2.png')} style={{width:'50%'}}/>
                <h4>
                    Leran about VIRGINAMERICA
                </h4>
            </div>
            <div className='inner-div'>
                <h4>
                    Welcome to the new site
                </h4>
                <img src={require('./1.png')} style={{width:'50%'}}/>
                <h4>
                    Leran about VIRGINAMERICA
                </h4>
            </div>
        </footer>
  )
}
