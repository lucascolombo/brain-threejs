export default [
    {
        id: 'initial',
        ref: null,
        position: null,
        scale: 0,
        invert: 1,
        bg: 'white_room.png',
        variation: null,
        title: '         WELCOME TO MY BRAIN',
        audio: 'neil_degrasse_tyson.wav',
        audioInfinite: false,
    },
    {
        id: 'black_cat',
        ref: null,
        position: { x: -20, y: 15, z: -32 },
        variation: { y: 0.37, duration: 0.55 },
        invert: -1,
        scale: 12,
        bg: 'cat_temple.png',
        title: '',
        audio: 'happy_happy_happy.mp3',
        audioInfinite: true,
    },
    {
        id: 'cannes_lion',
        ref: null,
        position: { x: -20, y: 6, z: 40 },
        variation: { y: 0.23, duration: 0.63 },
        scale: 9,
        invert: 1,
        bg: 'award.png',
        title: 'CANNES ACHIEVEMENT UNLOCKED',
        audio: 'will_smith.wav',
        audioInfinite: false,
    },
    {
        id: 'nintendo_switch',
        ref: null,
        position: { x: -25, y: -37, z: 88 },
        variation: { y: 0.2, duration: 0.6 },
        invert: 1,
        scale: 25,
        bg: 'game_world.png',
        title: '                   ITS ME LUCAS',
        audio: 'snes.mp3',
        audioInfinite: true,
    },
    {
        id: 'x_wing',
        ref: null,
        position: { x: -2, y: -16, z: -32 },
        variation: { y: 0.32, duration: 0.52 },
        invert: -1,
        scale: 10,
        bg: 'hoth.png',
        title: 'MAY THE FORCE BE WITH YOU',
        audio: 'vader.wav',
        audioInfinite: true,
    },
]