const getPosition = (e) => {
  var x, y
  if (e.touches) {
    e.preventDefault()
    var t = e.touches[0]
    x = t.pageX
    y = t.pageY
  } else {
    x = e.offsetX
    y = e.offsetY
  }
  return {x, y}
}
export default {
  getPosition
}
