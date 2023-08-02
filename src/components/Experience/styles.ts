import styled, { css } from 'styled-components'

const defaultBtn = css`
    cursor: pointer;
    color: #fff;
    position: absolute;
    z-index: 9;
    font-size: 1.5rem;
    padding: 5px 10px;
    top: 0;

    &:hover {
        color: #e8e8e8;
    }
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: initial;
`

export const StartBtn = styled.a`
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1.1rem;
    border: 1px solid #fff;
    padding: 7px 22px;
    color: #fff;

    &:hover {
        color: #e8e8e8;
        border-color: #e8e8e8;
    }
`

export const HomeBtn = styled.a`
    ${defaultBtn}
    left: 0;
`

export const InfoBtn = styled.a`
    ${defaultBtn}
    right: 0;
`