const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function onKeyDownHandler(e) {

}

function init() {
  var body = document.querySelector('body')
  body.addEventListener('keydown', function(e) {
    const key = e.key
    let i = 0
    if (key === codes[i]) {
      i++
      if (i === codes.length) {
        alert('Conratulations!')
      }
    } else {
      index = 0
    }
  })
}
