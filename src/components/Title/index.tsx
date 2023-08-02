import { FC, useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { Text3D, useMatcapTexture } from '@react-three/drei'
import gsap from 'gsap'

import data from '../../data'

const Title: FC<{ env: string }> = ({ env }) => {
    const textRef = useRef<Mesh>(null)
    
    const [ matcapTexture ] = useMatcapTexture('C35C04_F9C30C_EE9F04_E08304', 256)

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
            .to(textRef.current.scale, { x: 3, y: 3, z: 3 })
        }
    }, [env])

    return (
        <mesh ref={textRef} position={[-40, 20, 0]} scale={0}>
            <Text3D 
                font="/fonts/pulp_fiction.json" 
                position={[-10, 0, 0]}>
                
                {data.map(object => object.id === env ? object.title : '')}

                <meshMatcapMaterial matcap={matcapTexture}  />
            </Text3D>
        </mesh>
    )
}

export default Title
