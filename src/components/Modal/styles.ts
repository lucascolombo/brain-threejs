import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: initial;
`

export const CloseBtn = styled.a`
    cursor: pointer;
    color: #fff;
    position: absolute;
    z-index: 9;
    font-size: 2rem;
    padding: 10px 20px;
    top: 0;
    right: 0;

    &:hover {
        color: #e8e8e8;
    }
`

export const Title = styled.h3`
    font-size: 2.5rem;
    margin: 2.5rem 2rem 2rem 2rem;
    padding: 0;
`

export const Content = styled.div`
    width: 75%;
`

export const Description = styled.p`
    font-size: 1.2rem;
    margin: 0 2rem 1.2rem 2rem;

    & a {
        color: yellow;
    }

    & a:hover {
        color: yellow;
    }
`