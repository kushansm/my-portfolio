import { useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

// Import textures
import EarthDayMap from "/src/assets/img/8k_earth_daymap.jpg";
import EarthNormalMap from "/src/assets/img/8k_earth_normal_map.jpg";
import EarthCloudsMap from "/src/assets/img/8k_earth_clouds.jpg";

export default function Earth() {
    const earthRef = useRef<THREE.Mesh>(null!);
    const cloudsRef = useRef<THREE.Mesh>(null!);

    const [colorMap, normalMap, cloudsMap] = useLoader(TextureLoader, [
        EarthDayMap,
        EarthNormalMap,
        EarthCloudsMap,
    ]);

    // Set renderer exposure
    const { gl } = useThree();
    gl.toneMappingExposure = 1.5;

    useFrame(({ clock }) => {
        const elapsed = clock.getElapsedTime();
        if (earthRef.current) earthRef.current.rotation.y = elapsed / 6;
        if (cloudsRef.current) cloudsRef.current.rotation.y = elapsed / 6;
    });

    return (
        <>
            <ambientLight intensity={0.6} />
            <directionalLight color="#ffffff" position={[5, 2, 5]} intensity={1.5} />

            {/*<Stars radius={300} depth={60} count={20000} factor={7} fade />*/}

            <mesh ref={cloudsRef}>
                <sphereGeometry args={[1.005, 32, 32]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    opacity={0.4}
                    depthWrite
                    transparent
                    side={THREE.DoubleSide}
                />
            </mesh>

            <mesh ref={earthRef}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    metalness={0.4}
                    roughness={0.6}
                    emissive={new THREE.Color(0x111111)}
                    emissiveIntensity={0.1}
                />
            </mesh>

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate
                rotateSpeed={0.5}
                autoRotate
                autoRotateSpeed={0.2}
            />
        </>
    );
}
