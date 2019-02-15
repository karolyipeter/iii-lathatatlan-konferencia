import React from 'react'
import Img from 'gatsby-image'

const Speaker = ({ name, title, image }) => (
  <div className="card">
    <Img fluid={image} className="card-img-top" alt={name} />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{title}</p>
    </div>
  </div>
)

const Speakers = ({ speakerData }) => (
  <div className="card-columns">
    {speakerData.map(speaker => (
      <Speaker
        key={speaker.id}
        name={speaker.name}
        title={speaker.title}
        image={speaker.image}
      />
    ))}
  </div>
)

export default Speakers
