const particles = 300, container = document.querySelector("div");

function generateParticles(){
  console.log(window.visualViewport.height, window.visualViewport.width)
  if (container.children.length > 0) container.replaceChildren()
  const x_axis = window.crypto.getRandomValues(new Uint8Array(particles)),
        y_axis = window.crypto.getRandomValues(new Uint8Array(particles));

  for (let index = 0; index < particles; index++){
    const particle = document.createElement("i"), random_value = Math.random();

    particle.style.width = particle.style.height = `${random_value * 3}px`;
    particle.style.left = ((x_axis[index] / 255) * window.visualViewport.width) + "px";
    particle.style.top = ((y_axis[index] / 255) * window.visualViewport.height) + "px";
    particle.style.filter = `blur(${random_value}px)`;

    container.appendChild(particle);
  };
};

window.addEventListener("load", generateParticles)
window.addEventListener("resize", generateParticles);