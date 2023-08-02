import { FC, useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import { Text3D, useMatcapTexture, useTexture } from '@react-three/drei'
import gsap from 'gsap'

const Cannes: FC = () => {
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
            <mesh scale={2.5}>
                <Text3D 
                    font="/fonts/pulp_fiction.json" 
                    position={[-8, 0, 0]}>
                    Project
                    <meshBasicMaterial color={'#fff'} />
                </Text3D>
            </mesh>

            <mesh scale={2.5}>
                <Text3D 
                    font="/fonts/pulp_fiction.json" 
                    position={[-0.5, 0, 0]}>
                    Scrolling Therapy
                    <meshMatcapMaterial matcap={subtitleTexture}  />
                </Text3D>
            </mesh>

            <group position={[-10, -25, 0]} rotation={[0, 0, 0.1]}>
                <mesh scale={15} renderOrder={1} position={[0, 2.2, 0]}>
                    <planeGeometry args={[2, 1]}/>
                    <meshBasicMaterial  
                        map={useTexture(`/img/scrolling_therapy/1.png`)}/>
                </mesh>
                <mesh scale={17} renderOrder={0} position={[0, 0, -2]}>
                    <planeGeometry args={[2, 1.2]}/>
                    <meshBasicMaterial color={'#fff'}/>
                </mesh>
            </group>

            <group position={[10, -15, 0]} rotation={[0, 0, -0.001]}>
                <mesh scale={15} renderOrder={1} position={[0, 2.2, -5]}>
                    <planeGeometry args={[2, 1]}/>
                    <meshBasicMaterial  
                        map={useTexture(`/img/scrolling_therapy/2.png`)}/>
                </mesh>
                <mesh scale={17} renderOrder={0} position={[0, 0, -7]}>
                    <planeGeometry args={[2, 1.2]}/>
                    <meshBasicMaterial color={'#fff'}/>
                </mesh>
            </group>

            <group position={[30, -30, 0]} rotation={[0, 0, -0.01]}>
                <mesh scale={15} renderOrder={1} position={[-0.3, 2.2, -3]}>
                    <planeGeometry args={[2, 1]}/>
                    <meshBasicMaterial  
                        map={useTexture(`/img/scrolling_therapy/3.png`)}/>
                </mesh>
                <mesh scale={17} renderOrder={0} position={[0, 0, -4]}>
                    <planeGeometry args={[2, 1.2]}/>
                    <meshBasicMaterial color={'#fff'}/>
                </mesh>
            </group>

        </group>
    )
}

export default Cannes
