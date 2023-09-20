import { FirstPersonControls, OrbitControls, PointerLockControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";




const Experience   = () =>{
   const boxRef = useRef();
   const circuloRef = useRef();
   const torusRef = useRef();

   useFrame(( state,delta ) => {
      boxRef.current.rotation.x += 1 * delta;
      circuloRef.current.position.x = Math.sin(state.clock.getElapsedTime()) +8
      torusRef.current.rotation.x += 1 * delta;
   })



return (
  
      
    <>
    <PointerLockControls/>
    <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
     <mesh ref={boxRef}>
        <boxGeometry  args={[2, 2, 2]} />
        <meshStandardMaterial position={[2,2,2]} color = "yellow"/> //material no necesita luz 
     </mesh>
     
     <mesh ref= {circuloRef} position-x={-10}>
                <sphereGeometry args={[2,16 ,32]}/>
                <meshNormalMaterial color={"red"}/> 
            </mesh>
            <mesh ref={torusRef}>
            <torusGeometry args={[1, 16, 32,40]} />
            <meshLambertMaterial  wireframe color={"blue"} />
            </mesh>
     </>
)

}
export default Experience; //sirve para exportar funciones del modulo export multiples valores