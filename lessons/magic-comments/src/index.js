function loadUtils() {
  import(
    /* webpackChunkName: "utils",webpackPrefetch: true */
    './utils.js').then((module) => {
      module.doSomething()
    })
}




document.getElementById('loadButton').addEventListener('click', loadUtils);