import { FC } from 'react'

import Sphere from '../Sphere'

import data from '../../data'

const Background: FC<{ env: string }> = ({ env }) => {
    return (
        <>
            {data.map((texture) => 
                <Sphere 
                    key={texture.id} 
                    texture={`/backgrounds/${texture.bg}`} 
                    show={texture.id === env}/>
            )}
        </>
    )
}

export default Background
