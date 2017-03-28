;(function () {
  var Game = function() {
    var canvas = document.getElementById("screen")
    var screen = canvas.getContext('2d')
    var gameSize = { x: canvas.width, y: canvas.height }
    
    var self = this
    var tick = function() {
      self.update()
      self.draw(screen, gameSize)
      requestAnimationFrame(tick)
  }

  tick()

}
 
  Game.prototype = {
    update: function() {
              
    },
    draw: function(screen, gameSize) {
      screen.fillRect(30, 30, 40, 40)
    }
  }
  window.onload = function() {
    new Game("screen")
  }
})()

