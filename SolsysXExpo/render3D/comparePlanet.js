import { useFrame, useLoader } from '@react-three/fiber';
import { useLayoutEffect, useRef, useState } from 'react';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { TextureLoader } from 'expo-three'
import { planetTexture } from '../component/PlanetAssets';

export function PlanetAndSpin(props) {
    // tilted rotate position
    const textturePlanet = planetTexture[props.name];
    const tilted = props.tilted * Math.PI / 180; // องศา
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

    useFrame((state, delta) => {

        mesh.current.rotation.y += degreePerMinute
        mesh.current.rotation.x = tilted

    })

    return (
        <mesh ref={mesh} position={props.position} >
            <primitive object={object} scale={2} position={[-2, -2, -1.85]} />
        </mesh>
    )
}

