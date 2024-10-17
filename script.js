function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const names = ["Application Developer", "Web Developer", "Frontend Developer"];
  let index = 0;

  const nameElement = document.querySelector('.name-change');

  function changeName() {
    nameElement.classList.remove('visible');
    setTimeout(() => {
      nameElement.textContent = names[index];
      nameElement.classList.add('visible');
      index = (index + 1) % names.length;
    }, 500);
  }

  setInterval(changeName, 2000);