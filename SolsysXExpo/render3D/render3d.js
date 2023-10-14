import {useFrame, useLoader} from '@react-three/fiber';
import {useLayoutEffect, useRef } from 'react';
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader'
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
import {TextureLoader} from 'expo-three'

export default function PlanetAndSpin(planet){
    const [bump, diffuse] = useLoader(TextureLoader, [
        require('../assets/Earth/3d/bump.jpg'),
        require('../assets/Earth/3d/Earth.jpg')
    ]);
    const material = useLoader(MTLLoader, require('../assets/Earth/3d/Earth.mtl'))
    const object = useLoader(
        OBJLoader,
        require('../assets/Earth/3d/Earth.obj'),
        (loader) =>{
            material.preload();
            loader.setMaterials(material);
        }
    );
    const mesh = useRef();
    useLayoutEffect(()=>{
        object.traverse((child)=>{
            if (child instanceof THREE.Mesh){
                child.material.map = diffuse;
                child.material.bump = bump;
            }
        })
    }, [object]);

    useFrame((state, delta)=>{
        mesh.current.rotation.y += 0.002
        
    })

    return(
        <mesh ref={mesh}>
            <primitive object={object} scale={2} position={[-2,-2,-1.9]}/>
        </mesh>
    )
}