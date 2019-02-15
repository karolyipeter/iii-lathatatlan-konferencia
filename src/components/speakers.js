import React from 'react'
import Img from 'gatsby-image'

const Speaker = ({ name, title, description, image }) => (
  <div className="card">
    <Img fluid={image} className="card-img-top" alt={name} />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
      <p class="card-text">{description}</p>
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
        description={speaker.description}
        image={speaker.image}
      />
    ))}
  </div>
)

export default Speakers
