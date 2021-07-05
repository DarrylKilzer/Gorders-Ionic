import { Sprite, SpriteCanvasHelper } from "mixel";
export class GorderMaker {
    static createCanvas(sprite) {
        let canvas = SpriteCanvasHelper.createCanvas(sprite);
        const scaledCanvas = SpriteCanvasHelper.resizeCanvas(canvas, 4);
        return (canvas = scaledCanvas);
    }

    static makeGorder(mask, elem = null, seed = null, colored = true) {
        const saturation = Math.random() + 0.1;
        let edgeBrightness = Math.random() + 0.1;
        if (colored && edgeBrightness > 0.3) {
            edgeBrightness -= 0.4;
        }
        const sprite = new Sprite(mask, {
            colored,
            saturation: 1,
            edgeBrightness: 0.1,
            seed,
            colorVariations: .7
        });

        const canvas = this.createCanvas(sprite);
        canvas.classList.add("wiggle");
        if (!elem) {
            document.querySelector('#gorder').appendChild(canvas);
        } else {
            elem.appendChild(canvas)
        }
    }
}