import { Canvas } from "@react-three/fiber"
import Experience from "./Experience";

const App =()=>{
    return (
        
        <>
        <info/> 
        <Canvas
            camera = {{position:[0,0,8]}}
        >
            <Experience/>

            </Canvas>
        </>
    
    )
}
export default App;