import React from 'react'
import Img from 'gatsby-image'

const Speaker = ({ name, title, image }) => (
  <div className="row justify-content-center mb-3">
    <div className="col-sm-4 col-md-3">
      <Img fluid={image} className="img-fluid rounded-circle" alt={name} />
    </div>
    <div className="col-sm-8 col-md-7">
      <h3>{name}</h3>
      <p className="lead">{title}</p>
    </div>
  </div>
)

const Speakers = ({ speakerData }) => (
  <>
    {speakerData.map(speaker => (
      <Speaker
        key={speaker.id}
        name={speaker.name}
        title={speaker.title}
        image={speaker.image}
      />
    ))}
  </>
)

export default Speakers
