<template>
  <div class="coins-section">

    <h1>ПОКУПА \ ПРОДАЖА МОНЕТ</h1>
    <div class="switchers">
      <toggle :check="console"
              :id="'sw-console'"
              v-on:check="checkConsole($event)"
              :labelon="'XBOX'"
              :labeloff="'PS4'"
              :width="148"></toggle>
      <toggle :check="year"
              :id="'sw-year'"
              v-on:check="checkYear($event)"
              :labelon="'2020'"
              :labeloff="'2021'"
              :width="140"></toggle>
      <toggle :check="currency"
              :id="'sw-currency'"
              v-on:check="checkCurrency($event)"
              :labelon="'PUCKS'"
              :labeloff="$lang.messages.rub"
              :width="160"></toggle>
    </div>

    <h2>{{$lang.messages.coins_h2}}</h2>

    <div class="calc">
      <div class="row">
        <button v-on:click="decrease">-</button>
        <input type="text" v-model.number="sum">
        <button v-on:click="increase">+</button>
      </div>
      <div class="row">
        <button v-on:click="sum = 50000">50k</button>
        <button v-on:click="sum = 100000">100k</button>
        <button v-on:click="sum = 250000">250k</button>
        <button v-on:click="sum = 500000">500k</button>
        <button v-on:click="sum = 1000000">1M</button>
      </div>
    </div>

    <div class="price">
      <div class="main-price">
        <div class="price-text">{{$lang.messages.price}}:</div>
        <div class="price-amount">
          <div><span>400.00</span> Pucks</div>
          <div><span>400.00</span> {{$lang.messages.rubles}}</div>
        </div>
      </div>
      <a class="link-yellow" href="#">{{$lang.messages.how_to_buy}}</a>
    </div>

    <form class="player">
      <input :placeholder="$lang.messages.player" type="text">
      <input :placeholder="$lang.messages.team" type="text">
      <input :placeholder="$lang.messages.rating" type="text">
      <input :placeholder="$lang.messages.initial_price" type="text">
      <input :placeholder="$lang.messages.buyout_price" type="text">
      <input :placeholder="$lang.messages.team_hut" type="text">
      <div class="buy-row">
        <button class="btn btn-yellow" type="submit">{{$lang.messages.buy}}</button>
        <a class="link-light" href="#">{{$lang.messages.sell_to_us}}</a>
      </div>
    </form>
  </div>
</template>

<script>

import Toggle from '../components/Toggle.vue'

export default {
  data () {
    return {
      console: true,
      year: false,
      currency: true,
      sum: 0
    }
  },
  methods: {
    checkConsole: function (event) {
      console.log(event)
      this.console = event
    },
    checkYear: function (event) {
      console.log(event)
      this.year = event
    },
    checkCurrency: function (event) {
      console.log(event)
      this.currency = event
    },
    increase: function () {
      if (this.sum < 10000000) {
        this.sum += 50000
      }
    },
    decrease: function () {
      if (this.sum >= 50000) {
        this.sum -= 50000
      }
    }
  },
  components: {
    Toggle
  }
}
</script>

<style lang="scss" scoped>

  $breakpoint1:500px;

  input {
    &:focus {
      outline: none;
    }
  }

  button {
    border: none;

    &:focus {
      outline: none;
    }
  }

  @mixin flex($horizontal, $vertical) {
    display: flex;
    justify-content: $horizontal;
    align-items: $vertical;
    flex-wrap: wrap;
  }

  .coins-section {
    @include flex(center, center);
    width: 500px;
    padding: 0px 0px 100px 0px;

    h1 {
      font-size: 24px;
      color: white;
      font-weight: 100;
      width: 100%;
      padding:10px;
      box-sizing: border-box;
    }
    @media (max-width: $breakpoint1) {
      & {
        width: 100%;
      }
    }
  }

  .switchers {
    @include flex(space-between, center);
    width: 100%;
    margin-bottom: 20px;
  }

  h2 {
    text-align: center;
    text-transform: uppercase;
    color: white;
    font-size: 14px;
    width: 100%;
    margin-bottom: 17px;
  }

  .calc {
    background: white;
    padding: 28px 24px 28px 24px;
    box-sizing: border-box;
    box-shadow: 0px 0px 2px 0px black;
    width: 100%;
    height: 140px;
    border-radius: 5px;

    .row {
      display: flex;
      justify-content: space-between;

      input {
        color: #404040;
        border: 1px solid #dcdcdc;
        border-radius: 5px;
        width: 300px;
        height: 40px;
        font-weight: bold;
        text-align: center;
        font-size: 16px;
        @media (max-width: $breakpoint1) {
          & {
            width: 250px;
          }
        }
      }

      &:nth-child(1) {
        button {
          width: 40px;
          height: 40px;
          background: #404040;
          color: white;
          border-radius: 5px;
          font-weight: bold;
          font-size: 30px;
          padding-bottom: 10px;
          cursor: pointer;
        }
      }

      &:nth-child(2) {
        padding:0px;
        margin-top: 10px;

        @include flex(center, center);

        @media (max-width: $breakpoint1) {
          & {
            padding: 0;
          }
        }

        button {
          color: #404040;
          border: 1px solid #dcdcdc;
          border-radius: 5px;
          width: 45px;
          height: 40px;
          font-weight: bold;
          font-size: 12px;
          cursor: pointer;
          margin-left:10px;
          margin-right:10px;
        }
      }
    }
  }

  .price {
    @include flex(space-between, center);
    margin-top: 20px;
    padding-left: 210px;
    width: 100%;
    border-bottom: 1px solid white;
    padding-bottom: 15px;

    @media (max-width:$breakpoint1) {
      & {
        padding-left: 0;
      }
    }

    .main-price {
      @include flex(center, flex-start);

      .price-text {
        text-transform: uppercase;
        color: white;
        font-weight: bold;
        font-size: 16px;
        margin-right: 10px;

      }

      .price-amount {
        div {
          color: white;
          font-weight: bold;
          font-size: 16px;

          span {
            color: red;
          }
        }
      }

    }

    .link-yellow {
      font-weight: bold;
      color: #ffff00;
      border-bottom: 1px dashed #ffff00;
      align-self: flex-start;
      text-decoration: none;
    }
  }

  .player {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 25px;

    input {
      border: 2px solid #ffff00;
      background: #404040;
      color: white;
      width: 100%;
      border-radius: 5px;
      padding: 15px;
      margin-bottom: 7px;
      box-sizing: border-box;
    }

    .buy-row {
      width: 100%;
      margin-top: 13px;
      @include flex(center, center);

      .link-light {
        color: white;
        border-bottom: 1px dashed white;
        margin-left: 10px;
        text-decoration: none;
      }
    }
  }

</style>
