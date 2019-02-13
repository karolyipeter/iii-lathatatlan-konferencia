import React from 'react'

const Location = () => (
    <div className="row">
        <div className="col-lg-10 location__map">
            <iframe
                title="google_maps"
                width="100%"
                height="500"
                frameborder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBxL7a0SMqLaX40G7OKNNPNBu5ziWRAv_E
        &q=Eötvös+Loránd+Tudományegyetem+Pedagógiai+és+Pszichológiai+Kar"
                allowfullscreen
            />
        </div>
        <div className="col-lg-2 location__text">
            <p className="m-auto text-center">
                Eötvös Lórand Tudományegyetem Pedagógiai és Pszichológiai Kar,
                Budapest, Kazinczy u. 23-27, 1075
            </p>
        </div>
    </div>
)

export default Location
