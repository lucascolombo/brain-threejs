import { FC, useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { Vector3, Group, DoubleSide } from 'three'
import gsap from 'gsap'

import objects from '../../data'

const Objects: FC<{ onChangeEnv: React.Dispatch<React.SetStateAction<string>> }> = ({ onChangeEnv }) => {
    const data = objects.map((obj) => {
        return { ...obj, ref: useRef<Group>(null) }
    })

    useFrame((state) => { 
        data.forEach(object => {
            if (object?.ref?.current && object.position) {
                object?.ref.current.lookAt(state.camera.position)
            }
        })
    })

    useEffect(() => {
        data.forEach(object => {
            if (object?.ref?.current && object.position) {
                gsap
                .timeline({ repeat: -1, defaults: { duration: object.variation.duration } })
                .to(object.ref.current.position, { y: object.position.y })
                .to(object.ref.current.position, { y: object.position.y + object.variation.y })
                .to(object.ref.current.position, { y: object.position.y })
            }
        })
    }, [])

    return (
        <group>
            {data.map(object => {
                if (object.position)
                    return (
                        <group
                            key={object.id}
                            ref={object.ref}
                            onClick={() => { onChangeEnv(object.id) }}
                            onPointerEnter={() => { 
                                document.body.style.cursor = 'pointer'
                                object.ref.current?.scale.set(object.invert * 1.05, 1.05, 1.05) 
                            }}
                            onPointerLeave={() => { 
                                document.body.style.cursor = 'inherit' 
                                object.ref.current?.scale.set(object.invert, 1, 1)
                            }}
                            scale={new Vector3(object.invert, 1, 1)} 
                            position={new Vector3(object.position.x, object.position.y, object.position.z)}>
                            <mesh scale={ object.scale }>
                                <planeGeometry args={[1, 1]}/>

                                <meshBasicMaterial  
                                    map={useTexture(`/objects/${object.id}.png`)}
                                    transparent={true}
                                    alphaTest={0.8}
                                    onUpdate={
                                        (self) => {
                                            self.needsUpdate = true
                                            self.transparent = true
                                        }
                                    }/>
                            </mesh>
                        </group>  
                    )
                
                return null
            })}
        </group>
    )
}

export default Objects
