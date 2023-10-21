import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";


export function RenderRing(){

    const mesh = useRef();
    useFrame((state, delta) => {
        mesh.current.rotation.x = 300*Math.PI/180

    })

    return (
        <mesh ref={mesh} position={[0,0,1]} scale={[3.5,2,0]}>
            <ringGeometry innerRadius={1} />
        </mesh>
    )
}