const rootElement = document.documentElement;
const clientQuoteDesign = document.getElementsByClassName("client-card")
const circle = document.getElementsByClassName("optimisation-circle")[0];
const yellowCircle = document.getElementsByClassName("yellow-circle")[0];
const toggler = document.getElementById("toggler");
const slider = document.getElementById("slider");
const navbarToggler = document.getElementsByClassName("navbar-toggler-icon")[0];

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
    navbarToggler.classList.replace("navbar-light", "navbar-dark");
    circle.style.display = "None";
    yellowCircle.style.display = "None";
    [...clientQuoteDesign].forEach(element => {
      element.classList.remove('client-quote')
    });
  }

  else {
    rootElement.style.setProperty('--body-background-color', '#fff');
    rootElement.style.setProperty('--section-color', '#f6f6f6');
    rootElement.style.setProperty('--card-color', '#fff')
    rootElement.style.setProperty('--heading-color', ' #212528');
    toggler.style.backgroundColor = "#ccc";
    navbarToggler.classList.replace("navbar-dark", "navbar-light");
    circle.style.display = "block";
    yellowCircle.style.display = "block";
    [...clientQuoteDesign].forEach(element => {
      element.classList.add('client-quote')
    });
  }
});

function updateSliderPosition() {
  const newX = isToggled ? '22px' : '0px';
  slider.style.transform = `translateX(${newX})`;
}
