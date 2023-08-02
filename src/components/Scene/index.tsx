import { FC, useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { MathUtils } from 'three'

import Objects from '../Objects'
import Background from '../Background'
import Title from '../Title'
import Content from '../Content'

let isUserInteracting = false, 
    distance = 10, 
    onPointerDownPointerX = 0, 
    phi = 0, 
    theta = 0, 
    lon = 0, 
    lat = 0, 
    onPointerDownPointerY = 0, 
    onPointerDownLon = 0, 
    onPointerDownLat = 0,
    limitLon = 65,
    limitLat = 20

const Scene: FC<{ env: string, setEnv: React.Dispatch<React.SetStateAction<string>> }> = ({ env, setEnv }) => {
    const updateCamera = () => {
        lat = Math.max(-85, Math.min(85, lat))
        phi = MathUtils.degToRad(90 - lat)
        theta = MathUtils.degToRad(lon)

        camera.position.x = distance * Math.sin(phi) * Math.cos(theta)
        camera.position.y = distance * Math.cos(phi)
        camera.position.z = distance * Math.sin(phi) * Math.sin(theta)

        camera.lookAt(0, 0, 0)
    }

    const onPointerUp = () => {
        isUserInteracting = false
    }

    const onMoveEvent = (e: any) => {
        if (isUserInteracting === true) {
            const calcLon =
            (onPointerDownPointerX - e.clientX) * 0.1 +
            onPointerDownLon
            const calcLat =
            (onPointerDownPointerY - e.clientY) * 0.1 +
            onPointerDownLat

            lon = calcLon < -limitLon ? -limitLon : calcLon > limitLon ? limitLon : calcLon
            lat = calcLat < -limitLat ? -limitLat : calcLat > limitLat ? limitLat : calcLat

            updateCamera()
        }
    }

    const onTouchMove = (e: any) => {
        if (e.touches.length === 1) {
            onMoveEvent(e.touches[0])
        }
    }

    const onPointerMove = (e: any) => {
        onMoveEvent(e)
    }

    const onPointerDown = (e: any) => {
        isUserInteracting = true

        onPointerDownPointerX = e.clientX
        onPointerDownPointerY = e.clientY

        onPointerDownLon = lon
        onPointerDownLat = lat
    }

    const addEvents = () => {
        document.addEventListener('pointerdown', onPointerDown)
        document.addEventListener('pointermove', onPointerMove)
        document.addEventListener('pointerup', onPointerUp)
        window.addEventListener('touchmove', onTouchMove)
    }

    useEffect(() => {
        addEvents()
    }, [])

    const camera = useThree(({ camera }) => camera)
    updateCamera()

    return (
        <> 
            <Title env={env} />
            <Content env={env} />
            <Background env={env} />
            <Objects onChangeEnv={setEnv} />
        </>
    )
}

export default Scene
