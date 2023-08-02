import { FC, useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import { Text3D, useMatcapTexture } from '@react-three/drei'
import gsap from 'gsap'

const Home: FC = () => {
    const textRef = useRef<Group>(null)    
    const [ subtitleTexture ] = useMatcapTexture('C35C04_F9C30C_EE9F04_E08304', 256)

    useFrame((state) => { 
        if (textRef?.current) {
            textRef?.current.lookAt(state.camera.position)
        }
    })

    useEffect(() => {
        if (textRef?.current) {
            gsap
            .timeline({ defaults: { duration: 0.5 } })
            .from(textRef.current.scale, { x: 0, y: 0, z: 0 })
            .to(textRef.current.scale, { x: 1, y: 1, z: 1 })
        }
    }, [])

    return (
        <group ref={textRef} position={[-40, 5, 3]} scale={0}>
            <mesh scale={2}>
                <Text3D 
                    font="/fonts/pulp_fiction.json" 
                    position={[-8, 0, 0]}>
                    Role
                    <meshMatcapMaterial matcap={subtitleTexture}  />
                </Text3D>
            </mesh>

            <mesh scale={1.5}>
                <Text3D 
                    font="/fonts/pulp_fiction.json" 
                    position={[2, 0, 0]}>
                    Lead Frontend
                    <meshBasicMaterial color={'#666'} />
                </Text3D>
                <Text3D 
                    font="/fonts/pulp_fiction.json" 
                    position={[2, -2, 0]}>
                    Lab Team
                    <meshBasicMaterial color={'#666'} />
                </Text3D>
            </mesh>

            <mesh scale={2}>
                <Text3D 
                    font="/fonts/pulp_fiction.json" 
                    position={[-8, -4.5, 0]}>
                    Skills
                    <meshMatcapMaterial matcap={subtitleTexture}  />
                </Text3D>
            </mesh>

            <mesh scale={1.5}>
                <Text3D 
                    font="/fonts/pulp_fiction.json" 
                    position={[2, -5.7, 0]}>
                    Collaborative
                    <meshBasicMaterial color={'#666'} />
                </Text3D>
                <Text3D 
                    font="/fonts/pulp_fiction.json" 
                    position={[2, -7.7, 0]}>
                    Commitment
                    <meshBasicMaterial color={'#666'} />
                </Text3D>
                <Text3D 
                    font="/fonts/pulp_fiction.json" 
                    position={[2, -9.7, 0]}>
                    Problem-solver
                    <meshBasicMaterial color={'#666'} />
                </Text3D>
            </mesh>

            <mesh scale={2}>
                <Text3D 
                    font="/fonts/pulp_fiction.json" 
                    position={[-8, -10, 0]}>
                    Tech Goals
                    <meshMatcapMaterial matcap={subtitleTexture}  />
                </Text3D>
            </mesh>

            <mesh scale={1.5}>
                <Text3D 
                    font="/fonts/pulp_fiction.json" 
                    position={[2, -13.2, 0]}>
                    AI - Midjourney - Stable Diffusion
                    <meshBasicMaterial color={'#666'} />
                </Text3D>
                <Text3D 
                    font="/fonts/pulp_fiction.json" 
                    position={[2, -15.2, 0]}>
                    React - JS - TS
                    <meshBasicMaterial color={'#666'} />
                </Text3D>
                <Text3D 
                    font="/fonts/pulp_fiction.json" 
                    position={[2, -17.2, 0]}>
                    Criativity - UX
                    <meshBasicMaterial color={'#666'} />
                </Text3D>
            </mesh>
        </group>
    )
}

export default Home
