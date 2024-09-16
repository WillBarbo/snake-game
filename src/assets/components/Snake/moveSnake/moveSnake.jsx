function moveSnake() {

  let y = 0
  let x = 0
  
  window.addEventListener("keydown", function(e) {
    let key = e.keyCode
    
    if (key == 38 || key == 87) {
      y -= 10
      document.getElementById("player").style.top = y+"px"
    }

    if (key == 40 || key == 83) {
      y += 10
      document.getElementById("player").style.top = y+"px"
    }

    if (key == 37 || key == 65) {
      x -= 10
      document.getElementById("player").style.left = x+"px"
    }

    if (key == 39 || key == 68) {
      x += 10
      document.getElementById("player").style.left = x+"px"
    }

  })
}

export default moveSnake