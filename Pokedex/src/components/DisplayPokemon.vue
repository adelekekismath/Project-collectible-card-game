<template>
  <div>
    <div>
      <v-col>
        <!-- Card -->
        
            <v-img class="rounded-image" :width="373" :src="pokemon.images.large" max alt="Eevee" ></v-img>

          <!-- <v-btn
              @click="showModal = true"
              class="mx-2 center"
              fab
              dark
              color="blue"
            >
              <v-icon dark> mdi-plus </v-icon>
            </v-btn> -->
      </v-col>
    </div>
    <!-- Modal to show more detail about pokemon-->
    <Detail
      :pokemon="pokemon"
      :name="name"
      v-show="showModal"
      @close-modal="showModal = false"
    />
  </div>
</template>

<script>
import Detail from "./Detail.vue";

export default {
  name: "DisplayPokemon",
  
  components: {
    Detail,
  },

  data() {
    return {
      isFront: true,
      currentImg: "",
   
      showModal: false,
    };
  },
  props: {
    id: Number,
    name: String,
    url: String,
    pokemon : Object
  },
};
</script>

<style lang="scss" scoped>

.rounded-image {
  border-radius: 5%;
}
header {
  display: flex;
  align-items: center;
  padding: 20px 4%;
  margin-bottom: 20px;
  //background: rgb(25, 20, 20);
  @media screen and (max-width: 768px) {
    flex-flow: column;
  }
  h1,
  p {
    width: 50%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  p {
    text-align: right;
    color: rgba(white, 0.65);
    @media screen and (max-width: 768px) {
      text-align: left !important;
      margin-top: 10px;
      text-indent: 63px;
    }
  }
  img {
    width: 200px;
    height: 250px;
    vertical-align: middle;
    margin-right: 10px;
  }
}

@import url("https://fonts.googleapis.com/css?family=Open+Sans|Open+Sans+Condensed:300,700");
body {
  font-family: "Open Sans", Helvetica, sans-serif;
  text-align: center;
  margin: 20px;
}

img {
  max-height: 150px;
  margin: auto;
  display: inline-block;
}
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  font-weight: 400;
}

.card {
  display: inline-block;
  width: 300px;
  padding: 1em;
  border-radius: 15px;
  margin: 10px;
  background: #ddd;

  &__caption {
    background-color: rgba(#ffffff, 0.65);
    padding: 1em;
    position: relative;
    border-radius: 0 0 3px 3px;
  }
  &__image-container {
    background-color: rgba(#000000, 0.7);
    text-align: center;
    padding: 1em 1em 0;
    border-radius: 3px 3px 0 0;
  }

  &__type {
    position: absolute;
    top: 0;
    right: 1em;
    transform: translateY(-50%);
    color: #ffffff;
    text-transform: uppercase;
    font-family: "Open Sans Condensed", "Open Sans", helvetica, sans-serif;
    letter-spacing: 0.1em;
    padding: 0.25em;
    line-height: 1;
    border-radius: 2px;
    background: #bbbbbb;
  }

  &__label {
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 400;
    display: block;
    margin-bottom: 3px;
  }

  &__name {
    font-family: "Open Sans Condensed", "Open Sans", helvetica, sans-serif;
    text-align: center;
    font-size: 1.5em;
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  &__stats {
    margin: 1em 0;
    th {
      font-family: "Open Sans Condensed", "Open Sans", helvetica, sans-serif;
      text-align: right;
      font-weight: 300;
    }
    width: 100%;

    th,
    td {
      width: 50%;
      padding: 0.25em 0.5em 0;
    }
  }

  &__abilities {
    display: flex;
    justify-content: space-between;
  }
  &__ability {
    margin-top: 1em;
    flex: 1 0;
  }

  box-shadow: 0px 5px 20px -10px #111111;

  &--normal {
    background: linear-gradient(110deg, #fdbb2d 0%, #3a1c71 100%);
    box-shadow: 0px 5px 20px -10px #3a1c71;
    .card__type {
      background-color: #c08a53;
    }
  }

  &--water {
    background: linear-gradient(120deg, #1cb5e0 0%, #000851 100%);
    box-shadow: 0px 5px 20px -10px #000851;
    .card__type {
      background-color: #1cb5e0;
    }
  }
  &--electric {
    background: linear-gradient(
      90deg,
      rgba(255, 222, 0, 1) 34%,
      rgba(232, 255, 153, 1) 83%
    );
    .card__type {
      background-color: #000;
    }
  }
  &--fire {
    background: linear-gradient(
      0deg,
      rgba(199, 24, 0, 1) 10%,
      rgba(252, 194, 69, 1) 100%
    );
    .card__type {
      background-color: rgba(199, 24, 0, 1);
    }
  }

  &--psychic {
    background: linear-gradient(
      140deg,
      rgba(255, 167, 249, 1) 0%,
      rgba(255, 44, 195, 1) 39%,
      rgba(255, 227, 167, 1) 100%
    );
    .card__type {
      background: #ff2cc3;
    }
  }

  &--dark {
    background: linear-gradient(
      20deg,
      rgba(25, 25, 25, 1) 0%,
      rgba(16, 11, 50, 1) 33%,
      rgba(92, 2, 73, 1) 100%
    );
    .card__type {
      background: #5c0249;
    }
  }
  &--grass {
    background: linear-gradient(
      140deg,
      rgba(196, 218, 61, 1) 0%,
      rgba(110, 127, 14, 1) 69%,
      rgba(39, 80, 9, 1) 100%
    );

    .card__type {
      background: #6e7f0e;
    }
  }

  &--ice {
    background: linear-gradient(
      230deg,
      rgba(202, 234, 246, 1) 0%,
      rgba(160, 234, 241, 1) 46%,
      rgba(111, 184, 235, 1) 100%
    );
    .card__type {
      background: #6fb8eb;
    }
  }

  &--fairy {
    background: linear-gradient(
      45deg,
      rgba(255, 230, 240, 1) 0%,
      rgba(255, 197, 224, 1) 34%,
      rgba(255, 166, 185, 1) 71%,
      rgba(255, 138, 149, 1) 100%
    );

    .card__type {
      background: #ff8a95;
    }
  }
  &--bug {
    background: linear-gradient(
      45deg,
      rgb(167, 92, 160) 0%,
      rgba(255, 197, 224, 1) 34%,
      rgba(255, 166, 185, 1) 71%,
      rgba(255, 138, 149, 1) 100%
    );

    .card__type {
      background: #ff8a95;
    }
  }

  &--poison {
    background: linear-gradient(
      45deg,
      rgb(136, 207, 224) 0%,
      rgba(255, 197, 224, 1) 34%,
      rgba(255, 166, 185, 1) 71%,
      rgba(255, 138, 149, 1) 100%
    );

    .card__type {
      background: #ff8a95;
    }
  }

  &--ground {
    background: linear-gradient(
      45deg,
      rgba(136, 184, 74, 0.103) 0%,
      rgba(255, 197, 224, 1) 34%,
      rgba(255, 166, 185, 1) 71%,
      rgba(255, 138, 149, 1) 100%
    );

    .card__type {
      background: #ff8a95;
    }
  }

  position: relative;
  transition: 0.4s;

  @for $i from 1 through 9 {
    &:nth-child(#{$i}) {
      $rotation: (5 - random(10)) + deg;
      transform: translateY(0px) rotate($rotation);
    }
  }

  &:hover {
    z-index: 5;
    box-shadow: 0px 13px 30px -15px #000000;
    transform: translateY(-10px);
  }
}
</style>

