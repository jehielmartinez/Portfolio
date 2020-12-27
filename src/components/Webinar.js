import React, { useRef } from "react"
import ReactPlayer from "react-player"

export default function Webinar({ video }) {
  const videoRef = useRef(null)

  const returnToPreview = () => {
    videoRef.current.showPreview()
  }
  return (
    <section className="mycard webinars-card__webinars--element">
      <ReactPlayer
        height={180}
        width="100%"
        onEnded={returnToPreview}
        url={video}
        controls
        light
        ref={videoRef}
      />
    </section>
  )
}
