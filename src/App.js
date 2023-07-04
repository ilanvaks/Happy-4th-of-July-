import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import ParticlesOptions from "./data/fireworks.json"
import './styles/App.css';

function App() {
  const particlesInit= useCallback(
    main => {loadFull(main)}, []
  )
  
  return (
   <>
   <h1
    style={{color:"#0000ff"}}>Fireworks happy 4th!!
   </h1>
   <Particles
    options = {ParticlesOptions}
    init = {particlesInit}
   />
   </>
  );
}

export default App;
