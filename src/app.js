const myDiv = document.getElementById('myDiv');
const fadeIn = () => {
  myDiv.classList.remove('opacity-0');
  myDiv.classList.add('opacity-100');
};

// Use Framer Motion to trigger the animation
const { motion } = window;
motion(myDiv).animate({ opacity: 1 }, { duration: 500 }).then(fadeIn);