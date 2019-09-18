<template>

    <div class="modal-body">
        <div class="modal-logo"><img v-lazy="'/static/img/money-card-icon-1.png'" alt=""></div>
        <h1>Введите сумму пополнения</h1>
        <div class="input-group">
            <label for="input-value">Сумма пополнения</label>
            <input type="number" autocomplete="off" min="1" id="input-value" v-model="money">
        </div>

        <div class="input-group">
            <label for="select-payment">Платежная система</label>
            <select id="select-payment" v-model="payment_system">
                <option value="test">Test.Деньги</option>
                <option value="yandex">Яндекс.Деньги</option>
                <option value="webmoney">WebMoney</option>
                <option value="paypal">PAYPAL</option>
            </select>
        </div>

        <div class="input-group">

            <button class="btn btn-yellow full" @click="requestPayment()">Пополнить</button>

        </div>
    </div>

</template>
<script>

export default {
  name: 'payment',
  data () {
    return {
      payment_system: 'test',
      money: ''
    }
  },
  methods: {
    message (title, message, type) {
      this.$notify({
        group: 'main',
        type: type,
        title: title,
        text: message
      })
    },
    selfHide () {
      this.$emit('self-hide')
    },
    requestPayment () {
      this.message('Ошибка', `Для пополнения счета авторизуйтесь!`, 'warn')
      this.selfHide()
    }

  }
}
</script>
<style lang="scss" >
  @import "../../assets/css/utilits.scss";

  .modal-body {

    min-height: 300px;
    height: auto;
    width: 500px;
    padding:20px;
    box-sizing: border-box;

  @media (max-width: 600px) {
  & {
    width: 100%;
  }
  }
  .modal-logo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:20px;
    box-sizing: border-box;
  }

  p {
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    text-transform: uppercase;
    color:$color4;
  span {
    color:$color3;
  }
  }
  hr {
    border:none;
    width:100%;
    height:1px;
    background-color: $color4;
  }
  h1 {
    width: 100%;
    text-align: center;
    font-weight: 100;
    font-size: 24px;
    line-height: 150%;
    text-transform: uppercase;
    color:$color4;
    padding: 10px;
    box-sizing: border-box;
  }

  h2 {
    width: 100%;
    text-align: center;
    font-weight: 900;
    font-size: 24px;
    line-height: 150%;
    text-transform: uppercase;
    color:$color4;
  span {
    color:$color3;
  }
  }

  .input-group {
    width:100%;
    box-sizing: border-box;
    padding: 10px;

    .btn {
      margin-top: 20px;
      padding: 20px 20px;
      text-align: center;
      font-weight: 800;
      list-style: none;
      cursor: pointer;
      border: none;
      width: 100%;
      box-shadow: 0px 0px 3px 0px black;
      transition: .5s;

      a {
        text-decoration: none;

      }

      &:focus {
        outline: none;
      }

      &.btn-yellow {
        color: #393939;
        background-color: yellow;

        a {
          color: #393939;
        }

        &:hover {
          background-color: white;
          transition: .5s;
          color: #393939;

          a {
            color: #393939;
          }
        }

      }

      &.btn-black {
        color: white;
        background-color: #393939;
        box-shadow: 0px 0px 3px 0px black, 0px 0px 5px 2px white inset;

        a {
          color: white;
        }

        &:hover {
          box-shadow: 0px 0px 3px 0px black, 0px 0px 5px 2px yellow inset;

          transition: .5s;

        }

      }

      &.btn-black-2 {
        color: white;
        background-color: #393939;
        box-shadow: 0px 0px 3px 0px black;

        a {
          color: white;
        }

        &:hover {
          transition: .5s;
          background-color: white;
          color: #393939;

          a {
            color: #393939;
          }

        }

        &.active {
          background-color: yellow;
          color: #393939;

        }
      }

      &.btn-primary {
        color: white;
        background-color: #7ab300;

        a {
          color: white;
        }

        &:hover {
          background-color: white;
          transition: .5s;
        }
      }

      &.btn-info {
        color: white;
        background-color: #007fb3;

        a {
          color: white;
        }

        &:hover {
          background-color: white;
          transition: .5s;
        }
      }

    }
    
  @include flex(flex-start, center);
  label {
    font-weight: 600;
    font-size: 10px;
    color:$color4;
  }

  textarea,
  select,
  input {
    border: none;
    border-bottom: 1px solid $color4;
    color:$color4;
    font-weight:100 ;
    font-size:24px;
    width: 100%;
    text-align: center;
    background:transparent;
    padding: 15px;
    box-sizing: border-box;
    text-transform: uppercase;
    font-family: 'Open Sans';
  option {
    color:$color2;
  }
  }

  textarea {
    font-size:16px;
    text-align: left;
  }
  select {
    font-size:16px;
    text-transform: initial;
  }
  }
  }
</style>
