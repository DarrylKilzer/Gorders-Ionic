import { masks } from 'pixel-sprite-generator-nodejs'
const newMasks = {
    bathingsuitbottoms: masks.bathingsuitbottoms,
    bathingsuittops: masks.bathingsuittops,
    bug: masks.bug,
    creature: masks.creature,
    dragon: masks.dragon,
    empty: masks.empty,
    face: masks.face,
    humanoid: masks.humanoid,
    masks: masks.masks,
    spaceship: masks.spaceship,
    tailcritter: {
        width: 12,
        height: 12,
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0,
            0, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 0,
            0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0,
            0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
            0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
            0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0,
            0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0,
            0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0,
            0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ]
    }
}
Object.assign(newMasks, masks)
export const Masks = newMasks