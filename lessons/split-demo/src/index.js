// import './moduleA';
// import './moduleB';


const loadModuleA = () => import('./moduleA');
const loadModuleB = () => import('./moduleB');

loadModuleA();
loadModuleB();