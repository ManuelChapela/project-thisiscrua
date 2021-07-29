import React from 'react'
import imagenPortada from './../img/scan-34.jpg'

 const CruaHeader = () => {
    return (
        <div>
          <div className='crua__header_container'>
                <div className="crua__header_title_container">
                    <h1 className="crua__header_title_text">CRUA</h1>
                </div>
                <div>
                    <img src={imagenPortada} alt="Imagen de portada" className="crua__header_img"  />   
                </div>
                
            </div>
        </div>
    )
}

export default CruaHeader