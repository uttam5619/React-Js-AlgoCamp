import React from "react"
import PlayGame from "./PlayGame"
import { Link } from "react-router-dom"

const StartGame = () => {
  return (
    <React.Fragment>
        <Link to='/play'>
          <div>StartGame</div>
        </Link>
    </React.Fragment>
  )
}

export default StartGame