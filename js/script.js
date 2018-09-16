const wrapper = document.querySelector('.wrapper');
const text = document.querySelector('h1');
const walk = 50;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = wrapper;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `${xWalk}px ${yWalk}px 0.5rem rgba(0, 0, 0, 0.15)`
}

wrapper.addEventListener('mousemove', shadow);