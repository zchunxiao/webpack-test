// src/index.js
document.getElementById('loadButton').addEventListener('click', () => {
  import('./module.js')
    .then(module => {
      const greeting = module.greet('World');
      alert(greeting);
    })
    .catch(err => {
      console.error('Error loading module:', err);
    });
});