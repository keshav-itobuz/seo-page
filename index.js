
const rootElement = document.documentElement;
const circle = document.getElementsByClassName("optimisation-circle")[0];
// const cs = getComputedStyle(rootElement);

const toggler = document.getElementById('toggler');
const slider = document.getElementById('slider');

let isToggled = false;

toggler.addEventListener('click', () => {
  isToggled = !isToggled;
  updateSliderPosition();

  if (isToggled) {
    // rootElement.style.setProperty('--button-color', '#808080');
    rootElement.style.setProperty('--body-background-color', '#14213d');
    rootElement.style.setProperty('--section-color', '#364958');
    rootElement.style.setProperty('--heading-color', ' #fff');
    circle.style.display = "None";
  }

  else {
    rootElement.style.setProperty('--body-background-color', '#fff');
    rootElement.style.setProperty('--section-color', '#f6f6f6');
    rootElement.style.setProperty('--button-color', '#fad725');
    rootElement.style.setProperty('--heading-blue-color', '#6f77f1');
    rootElement.style.setProperty(' --content-color', '#828282');
    rootElement.style.setProperty('--benefits-section-color', '#666565');
    rootElement.style.setProperty('--heading-color', ' #212528');
    circle.style.display = "block";
  }
});

function updateSliderPosition() {
  const newX = isToggled ? '30px' : '3px';
  slider.style.transform = `translateX(${newX})`;
}
