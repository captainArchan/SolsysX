import { useFrame, useLoader } from '@react-three/fiber';
import { useLayoutEffect, useRef, useState } from 'react';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { TextureLoader } from 'expo-three'
import { planetTexture } from '../component/PlanetAssets';

export function PlanetAndSpin(props) {
    const textturePlanet = planetTexture[props.name];
    const tilted = props.tilted * Math.PI / 180; // องศา
    // const tilted = 112 * Math.PI / 180; // องศา
    const degreePerMinute = (360 / (props.rotate * 60)) * (Math.PI / 180);//0.016667 องศาการหมุน1นาที

    const [diffuse] = useLoader(TextureLoader, [
        textturePlanet
    ]);
    const material = useLoader(MTLLoader, require('../assets/Earth/3d/Earth.mtl'))
    const object = useLoader(
        OBJLoader,
        require('../assets/Earth/3d/Earth.obj'),
        (loader) => {
            material.preload();
            loader.setMaterials(material);
        }
    );
    const mesh = useRef();
    useLayoutEffect(() => {
        object.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.material.map = diffuse;
            }
        })
    }, [object]);

    // object.rotation.set(0,3,5)
    useFrame((state, delta) => {

        mesh.current.rotation.y += degreePerMinute
        mesh.current.rotation.x = tilted


    })

    return (
        <mesh ref={mesh} position={[0,0,0]}>
            {/* <primitive object={object} scale={2} position={[0,0, 0]} /> */}
            <primitive object={object} scale={2} position={[-2, -1, -1.85]} />
        </mesh>
    )
}

