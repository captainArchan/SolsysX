import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { MeshBasicMaterial } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";


export function RenderRing(props) {
    console.log(props.name)
    const createRing = () => {
        const mesh = useRef();
        useFrame((state, delta) => {
            mesh.current.rotation.x = 300 * Math.PI / 180
        })
        return (
            <mesh ref={mesh} position={props.position} >
                <ringGeometry args={props.args} />
                <meshStandardMaterial color={props.color} />
            </mesh>
        )

    }

    if (props.name == 'Saturn') {
        return createRing();
    }
    else {
        return null;
    }




}