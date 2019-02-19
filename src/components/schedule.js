import React from 'react'

const Event = ({ time, name, title, path }) => (
  <tr>
    <td>{time}</td>
    <td>
      <a href={path}>{`${name}: ${title}`}</a>
    </td>
  </tr>
)

const Schedule = ({ speakerData }) => (
  <table className="table table-light table-striped mb-5">
    <thead>
      <tr>
        <th>Időpont</th>
        <th>Esemény</th>
      </tr>
    </thead>
    <tbody>
      {speakerData.map(speaker => (
        <Event
          time={speaker.time}
          name={speaker.name}
          title={speaker.title}
          path={speaker.path}
        />
      ))}
    </tbody>
  </table>
)

export default Schedule
