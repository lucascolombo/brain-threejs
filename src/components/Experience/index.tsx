import { Canvas } from '@react-three/fiber'
import { FC, useState, Suspense, useEffect } from 'react'
import { VscHome, VscInfo } from "react-icons/vsc"

import Scene from '../Scene/index.tsx'
import Modal from '../Modal/index.tsx'

import data from '../../data/index.ts'

import { Container, StartBtn, HomeBtn, InfoBtn } from './styles.ts'

let vo = new Audio()
let played: string[] = []

const Experience: FC = () => {
  const [start, setStart] = useState(false)
  const [env, setEnv] = useState('initial')
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    if (start) {
      vo.pause()
      data.forEach(object => {
        if (object.id === env && (object.audioInfinite || !played.includes(object.id))) {
          vo.src = `/voice/${object.audio}`
          vo.play()
          played.push(object.id)
        }
      })
    }
  }, [start, env])

  if (!start) 
    return (
      <Container>
        <StartBtn onClick={() => setStart(true)}>Start Experience</StartBtn>
      </Container>
    )
  
  return (
    <>
      {openModal && <Modal handleClose={() => setOpenModal(false)} />}

      <HomeBtn onClick={() => setEnv('initial')}><VscHome/></HomeBtn>
      <InfoBtn onClick={() => setOpenModal(true)}><VscInfo/></InfoBtn>

      <Canvas>
        <Suspense fallback={null}>
          <Scene env={env} setEnv={setEnv}/>  
        </Suspense>
      </Canvas>
    </>
  )
}

export default Experience
