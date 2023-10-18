import { useFrame, useLoader } from '@react-three/fiber';
import { useLayoutEffect, useRef } from 'react';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { TextureLoader } from 'expo-three'
import { planetTexture } from '../component/PlanetAssets';
import { View } from 'react-native';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

export default function Compare2Planet(props) {
    console.log(props.name1)
    const texturePlanet1 = planetTexture[props.name1];
    const texturePlanet2 = planetTexture[props.name2];
    const [diffuse1, diffuse2] = useLoader(TextureLoader, [
        texturePlanet1, texturePlanet2
    ]);
    const material1 = useLoader(MTLLoader, require('../assets/Earth/3d/Earth.mtl'));
    const material2 = useLoader(MTLLoader, require('../assets/Earth/3d/Earth.mtl'));
    const object1 = useLoader(
        OBJLoader,
        require('../assets/Earth/3d/Earth.obj'),
        (loader) => {
            material1.preload();
            loader.setMaterials(material1);
        }
    );
    const object2 = useLoader(
        OBJLoader,
        require('../assets/Earth/3d/Earth.obj'),
        (loader) => {
            material2.preload();
            loader.setMaterials(material2);
        }
    );
    const mesh1 = useRef();
    const mesh2 = useRef();
    useLayoutEffect(() => {
        object1.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.material.map = diffuse1;

            }
        })
    }, [object1]);
    useLayoutEffect(() => {
        object2.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.material.map = diffuse2;

            }
        })
    }, [object2]);
    useFrame((state, delta) => {
        mesh1.current.rotation.x += 0.002
        mesh2.current.rotation.x += 0.1
    })

    return (
        <Canvas style={{ flex: 1 }}>
            <color attach="background" args={['#000000']} />
            <ambientLight color={0xc6c1c1} intensity={4} />
            <Suspense fallback={null}>
                <mesh ref={mesh1}>
                    <primitive object={object1} scale={2} position={[-2, -2, -1.9]} />
                </mesh>
                <mesh>
                    <primitive object={object2} scale={4} position={[2, -2, -1.9]} />
                </mesh>
            </Suspense>
        </Canvas>

    )
}