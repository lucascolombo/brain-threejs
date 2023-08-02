import { FC } from 'react'
import { VscClose } from 'react-icons/vsc'

import { Container, Title, Content, Description, CloseBtn } from './styles.ts'

const Modal: FC<{ handleClose: () => void }> = ({ handleClose }) => {
    return (
        <Container onClick={handleClose}>
            <CloseBtn><VscClose/></CloseBtn>
            <Title>About</Title>
            <Content>
                <Description>This project was made using <a href="https://react.dev/" target="_blank">React</a>, <a href="https://threejs.org/" target="_blank">ThreeJS</a> (three, <a href="https://github.com/pmndrs/react-three-fiber" target="_blank">@react-three/fiber</a>, <a href="https://github.com/pmndrs/drei" target="_blank">@react-three/drei</a>), <a href="https://www.midjourney.com/" target="_blank">Midjourney</a> and <a href="https://play.ht/" target="_blank">PlayHT</a>.</Description>
                <Description>All images and VO's used in this project are generated by AI.</Description>
            </Content>
        </Container>
    )
}

export default Modal