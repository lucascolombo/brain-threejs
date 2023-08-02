import { useTexture } from '@react-three/drei'
import { DoubleSide, MeshBasicMaterial, Vector3 } from 'three'
import { FC, useEffect, useRef } from 'react'
import gsap from 'gsap'

const Sphere: FC<{ texture: string, show: boolean }> = ({ texture, show }) => {
    const meshBasicMaterialRef = useRef<MeshBasicMaterial>(null)

    useEffect(() => {
        if (meshBasicMaterialRef?.current) {
            const fadeIn = gsap.timeline({ 
                paused: true, 
                defaults: { duration: 3 }
            }).to(meshBasicMaterialRef.current, { 
                opacity: 1 
            })
            
            const fadeOut = gsap.timeline({ 
                paused: true, 
                defaults: { duration: 3 }
            }).to(meshBasicMaterialRef.current, { 
                opacity: 0 
            })

            if (show) fadeIn.restart()
            else fadeOut.restart()
        }
    }, [show])

    return (
        <mesh scale={new Vector3(-0.2, 0.2, 0.2)}>
            <sphereGeometry args={[1024, 60, 40]} />
            <meshBasicMaterial 
                opacity={0}
                ref={meshBasicMaterialRef} 
                transparent={true} 
                map={useTexture(texture)} 
                side={DoubleSide} />
        </mesh>
    )
}

export default Sphere
