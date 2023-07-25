const video = document.querySelector(".video")
const timeline = document.querySelector(".timeline")

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

  