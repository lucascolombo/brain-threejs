import { FC } from 'react'

import Home from './Home'
import Cats from './Cats'
import Cannes from './Cannes'
import Games from './Games'

const Content: FC<{ env: string }> = ({ env }) => {
    switch (env) {
        case 'initial': return <Home />
        case 'black_cat': return <Cats />
        case 'cannes_lion': return <Cannes />
        case 'nintendo_switch': return <Games />
        default: return null
    }
}

export default Content
