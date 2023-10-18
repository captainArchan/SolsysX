import {useFrame, useLoader} from '@react-three/fiber';
import {useLayoutEffect, useRef } from 'react';
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader'
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
import {TextureLoader} from 'expo-three'
import { planetTexture } from '../component/PlanetAssets';

export default function PlanetAndSpin(props){
    const textturePlanet = planetTexture[props.name];

    const [diffuse] = useLoader(TextureLoader, [
        textturePlanet
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

            }
        })
    }, [object]);

    useFrame((state, delta)=>{
        mesh.current.rotation.x += 0.002
        
    })

    return(
        <mesh ref={mesh}>
            <primitive object={object} scale={2} position={[-2,-2,-1.9]}/>
        </mesh>
    )
}