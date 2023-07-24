const video = document.querySelector(".video")
const timeline = document.querySelector(".timeline")

/* 
video.addEventListener("pointerdown", e=> {
    const dot = document.createElement("div")
    dot.classList.add(".dot")
    dot.id = e.pointerId
    positionDot(e, dot)
    document.body.append(dot)
  })

  function positionDot(e, dot) {
    dot.style.width = `${e.width * 10}px`
    dot.style.height = `${e.height * 10}px`
    dot.style.left = `${e.pageX}px`
    dot.style.top = `${e.pageY}px`
  }

  video.addEventListener("pointermove", e=> {
    const dot = document.getElementById(e.pointerId)
    if(dot == null) return
    positionDot(e, dot)
  })
*/

// This is the actual YouTube player emulator:

  timeline.addEventListener("pointerdown", e=> {
    timeline.setPointerCapture(e.pointerId)
    setTimelinePosition(e)

    timeline.addEventListener("pointermove", setTimelinePosition)

    timeline.addEventListener("pointerup", () => {
      timeline.removeEventListener("pointermove", setTimelinePosition)
    }, {once: true})
  })

  function setTimelinePosition(e) {
    const rect = timeline.getBoundingClientRect()
    timeline.style.setProperty("--handle-position", `${e.clientX / rect.width * 100}%`)
  }

  