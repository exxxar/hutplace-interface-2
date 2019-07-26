<template>
  <div>
    <header id="pageHeader">
      <div class="center">
        <div class="logo-wrapper">
          <a href="/"><img class="logo" src="@/assets/logo.jpg" alt=""></a>

        </div>
        <button @click="show('payment')" class="btn btn-yellow btn-mobile">{{$lang.messages.recharge}}</button>
        <nav>
          <li @click="show('howtostart')" class="btn btn-black">{{$lang.messages.how_to_start}}</li>
          <li @click="show('history')" class="btn btn-black">{{$lang.messages.history}}</li>
          <li @click="show('help')" class="btn btn-black">{{$lang.messages.help}}</li>
          <li @click="show('faq')" class="btn btn-black">{{$lang.messages.f_a_q}}</li>
          <li @click="show('payment')" class="btn btn-yellow">{{$lang.messages.recharge}}</li>

          <li v-if="!auth" class="auth">
            <button class="btn btn-primary login" @click="show('login')">Login
            </button>
            <button class="btn btn-info register" @click="show('registration')">Register</button>
          </li>

          <li v-if="auth" class="user">
            <div class="info">
              <p class="name">{{user.name}}</p>
              <p class="email">{{user.email}}</p>
              <p class="pucks"><strong>{{user.pucks}}</strong> Pucks</p>
            </div>
            <div class="avatar" @mouseover="menuShow = true">
              <img :src="user.avatar" alt="">
            </div>
            <div v-if="menuShow" class="dropdown" @mouseover="menuShow = true" @mouseleave="menuShow = false">
              <ul>
                <li>
                  <router-link :to="{ name: 'cabinet' }" tag="a">User cabinet</router-link>
                </li>
                <li v-if="auth">
                  <a href="#" @click="auth = false">Logout</a>
                </li>

              </ul>
            </div>

          </li>
        </nav>

      </div>

    </header>

    <scroll id="pageContent" :settings="settings" @ps-scroll-y="scrollHanle">
      <div class="center">

        <keep-alive>
          <router-view></router-view>
        </keep-alive>

      </div>
    </scroll>

    <aside>
      <nav>
        <ul>

          <router-link :to="{ name: 'Playzone' }" tag="li" class="btn btn-black-2">Игровая зона
          </router-link>

          <router-link :to="{ name: 'Market' }" tag="li" class="btn btn-black-2">Маркет
          </router-link>

          <li class="btn btn-black-2" @click="show('promo')">Промокоды</li>
          <li class="btn btn-black-2"><a href="">Достижения</a></li>
          <li class="more-menu">
            <div class="lang">
              <a href=""><img src="@/assets/img/ru.jpg" alt=""></a>
              <a href=""><img src="@/assets/img/en.jpg" alt=""></a>
            </div>
            <ul class="more">
              <li><a href="">Пользовательское соглашение</a></li>
              <li><a href="">Стать поставщиком</a></li>
              <li><a href="">Стать партнером</a></li>
              <li @click="show('report')"><a class="report">Баг-репорты</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>

    <footer id="pageFooter">

    </footer>
    <notifications group="main"/>

    <modal name="report" :adaptive="true" width="100%" height="100%">
      <scroll class="scroll-area">
        <a href="#" @click="hide('report')" class="close"></a>
        <report></report>
      </scroll>
    </modal>

    <modal name="promo" height="auto">
      <a href="#" @click="hide('promo')" class="close"></a>
      <promo></promo>
    </modal>

    <modal name="payment" height="auto">
      <a href="#" @click="hide('payment')" class="close"></a>
      <payment></payment>
    </modal>

    <modal name="howtostart" :adaptive="true" width="100%" height="100%">
      <scroll class="scroll-area">
        <a href="#" @click="hide('howtostart')" class="close"></a>
        <how-to-start></how-to-start>
      </scroll>
    </modal>

    <modal name="history" :adaptive="true" width="100%" height="100%">
      <scroll class="scroll-area">
        <a href="#" @click="hide('history')" class="close"></a>
        <history></history>
      </scroll>
    </modal>

    <modal name="help" height="auto">
      <a href="#" @click="hide('help')" class="close"></a>
      <help></help>
    </modal>

    <modal name="faq" :adaptive="true" width="100%" height="100%">
      <scroll class="scroll-area">
        <a href="#" @click="hide('faq')" class="close"></a>
        <f-a-q></f-a-q>
      </scroll>

    </modal>

    <modal name="login" :adaptive="true" width="100%" height="100%">
      <scroll class="scroll-area">
        <a href="#" @click="hide('login')" class="close"></a>
        <login></login>
      </scroll>

    </modal>

    <modal name="registration" :adaptive="true" width="100%" height="100%">
      <scroll class="scroll-area">
        <a href="#" @click="hide('registration')" class="close"></a>
        <registration></registration>
      </scroll>

    </modal>
  </div>
  </div>
</template>

<script>
  import Payment from '../components/modals/Payment.vue'
  import Help from '../components/modals/Help.vue'
  import History from '../components/modals/History.vue'
  import HowToStart from '../components/modals/Howtostart.vue'
  import FAQ from '../components/modals/FAQ.vue'
  import Promo from '../components/modals/Promo.vue'
  import Report from '../components/modals/Report.vue'
  import Login from '../components/modals/Login.vue'
  import Registration from '../components/modals/Registration.vue'

  import Scroll from 'vue-custom-scrollbar'

  export default {
    name: 'defaultLayout',
    data() {
      return {
        menuShow: false,
        auth: true,
        user: {
          name: 'Alex',
          email: 'exxxar@gmail.com',
          pucks: 100000,
          avatar: 'https://pp.userapi.com/c855424/v855424294/88092/c_1uns8YY7M.jpg?ava=1'
        },
        settings: {
          maxScrollbarLength: 60
        }
      }
    },
    methods: {
      scrollHanle(evt) {
        console.log(evt)
      },

      show(name) {
        this.$modal.show(name)
      },
      hide(name) {
        this.$modal.hide(name)
      },
      load: function () {

        this.$notify({
          group: 'main',
          type: 'success',
          title: 'Important message',
          text: 'Hello user! This is a notification!'
        })
      }
    },
    mounted: function () {
      this.load()
    },
    components: {
      Payment, Help, HowToStart, History, FAQ, Promo, Report, Login, Registration, Scroll
    }
  }
</script>

<style lang="scss" >
  @import '../../node_modules/reset-css/sass/_reset.scss';
  @import '../assets/css/main.scss';
</style>
