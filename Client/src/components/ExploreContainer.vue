<template>
  <div id="container">
    <strong>{{ name }}</strong>
    <ion-button v-on:click="makeBathingSuitBottom">
      makeBathingSuitBottom
    </ion-button>
    <ion-button v-on:click="makeBathingSuitTop">
      make BathingSuitTop
    </ion-button>
    <ion-button v-on:click="makeBug"> make Bug </ion-button>
    <ion-button v-on:click="makeCreature"> make Creature </ion-button>
    <ion-button v-on:click="makeDragon"> make Dragon </ion-button>
    <ion-button v-on:click="makeEmpty"> make Empty </ion-button>
    <ion-button v-on:click="makeHumanoid"> make Humanoid </ion-button>
    <ion-button v-on:click="makeFace"> make Face </ion-button>
    <ion-button v-on:click="makeSpaceship"> make Spaceship </ion-button>
    <ion-button v-on:click="makeTailCritter"> make TailCritter </ion-button>
    <div id="gorder" style="height: 70vh"></div>
  </div>
</template>

<script lang="ts">
import { GorderMaker } from "../GorderMaker/index.js";
import { Masks } from "../GorderMaker/Masks.js";
export default {
  name: "ExploreContainer",
  props: {
    name: String,
  },
  setup() {
    console.log();
    return {
      makeBathingSuitBottom() {
        GorderMaker.makeGorder(Masks.bathingsuitbottoms);
      },
      makeBathingSuitTop() {
        GorderMaker.makeGorder(Masks.bathingsuittops);
      },
      makeBug() {
        GorderMaker.makeGorder(Masks.bug);
      },
      makeCreature() {
        GorderMaker.makeGorder(Masks.creature);
      },
      makeDragon() {
        GorderMaker.makeGorder(Masks.dragon);
      },
      makeFace() {
        GorderMaker.makeGorder(Masks.face);
      },
      makeHumanoid() {
        GorderMaker.makeGorder(Masks.humanoid);
      },
      makeSpaceship() {
        GorderMaker.makeGorder(Masks.spaceship);
      },
      makeTailCritter() {
        const permArr: any = [],
          usedChars: any = [];

        function permute(input: any) {
          let i, ch;
          for (i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length == 0) {
              permArr.push(usedChars.slice());
            }
            permute(input);
            input.splice(i, 0, ch);
            usedChars.pop();
          }
          return permArr;
        }

        permute(["Man", "Ni", "Zop", "Tu", "Ge"]);

        permArr.forEach((runeCombo: any) => {
          GorderMaker.makeGorder(Masks.tailcritter, null, runeCombo.join(""));
        });
      },
    };
  },
};
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>