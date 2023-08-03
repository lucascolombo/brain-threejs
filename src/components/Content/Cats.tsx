import { FC, useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import { useTexture } from '@react-three/drei'
import gsap from 'gsap'

const Cats: FC = () => {
    const textRef = useRef<Group>(null)    
    
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
        <group ref={textRef} position={[-60, 20, 20]} scale={0}>
            <group position={[-15, -25, 0]} rotation={[0, 0, 0.1]}>
                <mesh scale={15} renderOrder={1} position={[0.3, 2, 0]}>
                    <planeGeometry args={[1, 1.2]}/>
                    <meshBasicMaterial  
                        map={useTexture(`/img/cats/1.jpeg`)}/>
                </mesh>
                <mesh scale={16.5} renderOrder={0} position={[0, 0, -2]}>
                    <planeGeometry args={[1, 1.4]}/>
                    <meshBasicMaterial color={'#fff'}/>
                </mesh>
            </group>

            <group position={[3, -30, 1]} rotation={[0, 0, -0.1]}>
                <mesh scale={15} renderOrder={3} position={[-0.3, 2.5, 0]}>
                    <planeGeometry args={[1, 1.4]}/>
                    <meshBasicMaterial  
                        map={useTexture(`/img/cats/2.jpeg`)}/>
                </mesh>
                <mesh scale={17} renderOrder={2} position={[0, 0, -2]}>
                    <planeGeometry args={[1, 1.6]}/>
                    <meshBasicMaterial color={'#fff'}/>
                </mesh>
            </group>

            <group position={[20, -45, 0]} rotation={[0, 0, 0.1]}>
                <mesh scale={15} renderOrder={1} position={[0.3, 2.5, 0]}>
                    <planeGeometry args={[1, 1.2]}/>
                    <meshBasicMaterial  
                        map={useTexture(`/img/cats/3.jpeg`)}/>
                </mesh>
                <mesh scale={17} renderOrder={0} position={[0.7, -1, -2]}>
                    <planeGeometry args={[1, 1.4]}/>
                    <meshBasicMaterial color={'#fff'}/>
                </mesh>
            </group>

            <group position={[4, -60, 0]} rotation={[0, 0, 0]}>
                <mesh scale={15} renderOrder={1} position={[0.3, 2.5, 0]}>
                    <planeGeometry args={[1, 1.2]}/>
                    <meshBasicMaterial  
                        map={useTexture(`/img/cats/4.jpeg`)}/>
                </mesh>
                <mesh scale={17} renderOrder={0} position={[0.7, -1, -2]}>
                    <planeGeometry args={[1, 1.4]}/>
                    <meshBasicMaterial color={'#fff'}/>
                </mesh>
            </group>

            <group position={[40, -20, 0]} rotation={[0, 0, -0.01]}>
                <mesh scale={15} renderOrder={1} position={[-0.5, 0.5, 0]}>
                    <planeGeometry args={[1, 1.2]}/>
                    <meshBasicMaterial  
                        map={useTexture(`/img/cats/5.jpeg`)}/>
                </mesh>
                <mesh scale={17} renderOrder={0} position={[0.7, -1, -2]}>
                    <planeGeometry args={[1, 1.3]}/>
                    <meshBasicMaterial color={'#fff'}/>
                </mesh>
            </group>

            <group position={[5, 6, 0]} rotation={[0, 0, 0]}>
                <mesh scale={15} renderOrder={1} position={[0.6, -0.3, 0]}>
                    <planeGeometry args={[1, 1.2]}/>
                    <meshBasicMaterial  
                        map={useTexture(`/img/cats/6.jpeg`)}/>
                </mesh>
                <mesh scale={17} renderOrder={0} position={[0.7, -1, -2]}>
                    <planeGeometry args={[1, 1.3]}/>
                    <meshBasicMaterial color={'#fff'}/>
                </mesh>
            </group>

            <group position={[25, 3, 0]} rotation={[0, 0, -0.11]}>
                <mesh scale={15} renderOrder={1} position={[0, -0.2, 0]}>
                    <planeGeometry args={[1, 1.2]}/>
                    <meshBasicMaterial  
                        map={useTexture(`/img/cats/7.jpeg`)}/>
                </mesh>
                <mesh scale={17} renderOrder={0} position={[0.7, -1, -2]}>
                    <planeGeometry args={[1, 1.3]}/>
                    <meshBasicMaterial color={'#fff'}/>
                </mesh>
            </group>

        </group>
    )
}

export default Cats
