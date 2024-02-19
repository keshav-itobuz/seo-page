
const rootElement = document.documentElement;
const circle = document.getElementsByClassName("optimisation-circle")[0];
const toggler = document.getElementById('toggler');
const slider = document.getElementById('slider');

let isToggled = false;

toggler.addEventListener('click', () => {
  isToggled = !isToggled;
  updateSliderPosition();

  if (isToggled) {
    rootElement.style.setProperty('--body-background-color', '#14213d');
    rootElement.style.setProperty('--section-color', '#364958');
    rootElement.style.setProperty('--card-color', '#364958')
    rootElement.style.setProperty('--heading-color', ' #fff');
    toggler.style.backgroundColor = "#364958";
    circle.style.display = "None";
  }

  else {
    rootElement.style.setProperty('--body-background-color', '#fff');
    rootElement.style.setProperty('--section-color', '#f6f6f6');
    rootElement.style.setProperty('--card-color', '#fff')
    rootElement.style.setProperty('--heading-color', ' #212528');
    toggler.style.backgroundColor = "#ccc";
    circle.style.display = "block";
  }
});

function updateSliderPosition() {
  const newX = isToggled ? '22px' : '2px';
  slider.style.transform = `translateX(${newX})`;
}
