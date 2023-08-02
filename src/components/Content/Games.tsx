import { FC, useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import { Text3D, useMatcapTexture, useTexture } from '@react-three/drei'
import gsap from 'gsap'

const Games: FC = () => {
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
                    position={[-10, 0, 0]}>
                    Playing Now
                    <meshMatcapMaterial matcap={subtitleTexture}  />
                </Text3D>
            </mesh>

            <mesh scale={2}>
                <Text3D 
                    font="/fonts/pulp_fiction.json" 
                    position={[5, 0, 0]}>
                    On the list
                    <meshMatcapMaterial matcap={subtitleTexture}  />
                </Text3D>
            </mesh>

            <group position={[-11.2, -16, 0]}>
                <mesh scale={18}>
                    <planeGeometry args={[1, 1.5]}/>
                    <meshBasicMaterial  
                        map={useTexture(`/img/games/pokemon_scarlet.png`)}
                        transparent={true}
                        alphaTest={0.9}/>
                </mesh>
            </group>

            <group position={[14.7, -10, 0]}>
                <mesh scale={10} position={[0, 0, 0]}>
                    <planeGeometry args={[1, 1.5]}/>
                    <meshBasicMaterial  
                        map={useTexture(`/img/games/mario_odissey.png`)}
                        transparent={true}
                        alphaTest={0.9}/>
                </mesh>

                <mesh scale={10} position={[12, 0, 0]}>
                    <planeGeometry args={[1, 1.5]}/>
                    <meshBasicMaterial  
                        map={useTexture(`/img/games/animal_crossing.png`)}
                        transparent={true}
                        alphaTest={0.9}/>
                </mesh>

                <mesh scale={10} position={[0, -17, 0]}>
                    <planeGeometry args={[1, 1.5]}/>
                    <meshBasicMaterial  
                        map={useTexture(`/img/games/triangle_strategy.png`)}
                        transparent={true}
                        alphaTest={0.9}/>
                </mesh>
            </group>

        </group>
    )
}

export default Games
