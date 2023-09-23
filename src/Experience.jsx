import { FirstPersonControls, OrbitControls, PointerLockControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


const Experience = () => {

    const boxRef = useRef();
    const torusRef = useRef();
    const sphereRef = useRef();
    

    useFrame((state, delta)=>{
        boxRef.current.rotation.x += 1 * delta;
        boxRef.current.position.x =6;
        boxRef.current.position.y = 4 
        boxRef.current.position.y =4*Math.sin(state.clock.getElapsedTime())+2;
        torusRef.current.position.x =5
        torusRef.current.rotation.y = Math.cos(state.clock.getElapsedTime())+3;
        sphereRef.current.position.x = 3*Math.sin(state.clock.getElapsedTime())
        
       
        
    })

   


    return (


        <>
            <OrbitControls />
            <ambientLight intensity={6} />
            <directionalLight position={[5, 4, 6]}  />
            
            <mesh ref={boxRef} position={[1,1,1]} scale={0.4} >
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial position={[300, 10000, -20]} color="red" /> //material no necesita luz
            </mesh>

            <mesh ref={sphereRef}   scale={0.3}  getWorldPosition={[5,100,3]}>
                <sphereGeometry args={[2, 16, 32]} />
                <meshNormalMaterial color={"red"} />
            </mesh>

            <mesh ref={torusRef} scale={0.2}>
                <torusGeometry args={[15, 3, 10, 90]} />
                <meshLambertMaterial wireframe color={"blue"} />
            </mesh>
        </>
    )

}
export default Experience; //sirve para exportar funciones del modulo export multiples valores