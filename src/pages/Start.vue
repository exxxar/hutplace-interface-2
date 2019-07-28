<template>
  <div>

    <header>
      <div class="center">
        <div class="logo-wrapper">
          <div class="logo">
            <a href="/index">   <img src="../assets/img/logo.png" alt=""></a>

          </div>
        </div>

        <p>Начни с этого момента <i class="fas fa-arrow-right"></i></p>
        <ul class="social">
          <li><i class="fab fa-vk"></i></li>
          <li><i class="fab fa-facebook-f"></i></li>
          <li><i class="fab fa-telegram-plane"></i></li>
        </ul>
      </div>
    </header>
    <section class="section-1">
      <div class="center">
        <h1><span>Дешелве, чем</span> когда-<br>либо!</h1>
        <h3>Успей купить карточки любых игроков!</h3>
        <nav>
          <ul>
            <li>
              <h5>Быстрая доставка</h5>
              <p>Отправка выигрыша осуществляется оператором в течнии 15 минут после розыгрыша</p>
              <p>Получение карточек осуществляется в течении 24х часов.</p>
            </li>
            <li>
              <h5>Приз практически бесплатно</h5>
              <p>У нас Вы можете получить вещь в 100 раз дешевле!</p>
            </li>
            <li>
              <h5>Уникальный рандом алгоритм</h5>
              <p>Мы используем систему Random.org для определения случайного победителя!</p>
            </li>
          </ul>
        </nav>
      </div>
    </section>

    <section class="section-2">
      <div class="center">
        <div class="left"><img src="../assets/img/cards-block.png" alt=""></div>
        <div class="right">
          <div class="text">
            <p>
              <del>999 РУБ!</del>
              попробуй бесплатно!
            </p>
            <p><strong>Авторизуйся</strong></p>
            <p>и почувствуй вкус победы!</p>
          </div>
          <ul class="social">
            <li><i class="fab fa-vk"></i></li>
            <li><i class="fab fa-facebook-f"></i></li>
            <li><i class="fab fa-telegram-plane"></i></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section-3">
      <div class="center">
        <h1>Статистика</h1>
        <ul>
          <li>
            <h4>Куплено мест</h4>
            <div class="circle">
              <p>410</p>
            </div>
          </li>

          <li>
            <h4>Игроки сэкономили</h4>
            <div class="circle large">
              <p>14580</p>
              <p>Рублей</p>
            </div>
          </li>

          <li>
            <h4>Проведено игр</h4>
            <div class="circle">
              <p>92</p>
            </div>
          </li>
        </ul>

      </div>
    </section>
    <section class="section-4">
      <div class="center">
        <h1>Работа с платежными системами</h1>
        <ul>
          <li><a href=""><img src="../assets/img/WebMoney_logo_blue.svg" alt=""></a></li>
          <li><a href=""><img src="../assets/img/1280px-Qiwi_logo.svg.png" alt=""></a></li>
          <li><a href=""><img src="../assets/img/MasterCard_Logo.svg.png" alt=""></a></li>
          <li><a href=""><img src="../assets/img/Visa_Inc._logo.svg.png" alt=""></a></li>
          <li><a href=""><img src="../assets/img/1280px-Логотип_Яндекс.Денег.svg.png" alt=""></a></li>
        </ul>
      </div>
    </section>

    <section class="section-5">
      <div class="center">
        <div class="slider">
          <carousel-3d :autoplay="true" :perspective="20" :width="270" :height="370" :display="10" :space="210">
            <slide :index="0">
              <img src="../assets/img/card-example.jpg" alt="">
              <div class="shadow"></div>
            </slide>
            <slide :index="1">
              <img src="../assets/img/card-example.jpg" alt="">
              <div class="shadow"></div>
            </slide>
            <slide :index="2">
              <img src="../assets/img/card-example.jpg" alt="">
              <div class="shadow"></div>
            </slide>
            <slide :index="3">
              <img src="../assets/img/card-example.jpg" alt="">
              <div class="shadow"></div>
            </slide>
            <slide :index="4">
              <img src="../assets/img/card-example.jpg" alt="">
              <div class="shadow"></div>
            </slide>
            <slide :index="5">
              <img src="../assets/img/card-example.jpg" alt="">
              <div class="shadow"></div>
            </slide>
            <slide :index="6">
              <img src="../assets/img/card-example.jpg" alt="">
              <div class="shadow"></div>
            </slide>
          </carousel-3d>
        </div>

      </div>

      <div class="modal">
        <div class="center">
          <h1>Для участия необходимо авторизоваться</h1>
          <ul class="social">
            <li><i class="fab fa-vk"></i></li>
            <li><i class="fab fa-facebook-f"></i></li>
            <li><i class="fab fa-telegram-plane"></i></li>
          </ul>

        </div>
      </div>

    </section>

    <section class="section-6">
      <div class="center">
        <h1>Реальные <span>соперники</span>,<br>честная борьба!</h1>
        <div class="bonus">
          <img src="../assets/img/ach-3.png" v-tooltip.bottom="'Третье место в общем рейтинге<br> +50 000 Coins'"
               alt="">
          <img src="../assets/img/ach-2.png" v-tooltip.bottom="'Второе место в общем рейтинге<br> +200 Exp'" alt="">
          <img src="../assets/img/ach-1.png" v-tooltip.bottom="'Первое место в общем рейтинге<br> +500 Pucks'" alt="">

        </div>
        <div class="arrow">
          <img src="../assets/img/arrow-2.png" alt="">
        </div>

        <h2>Регистрируйся, участвуй,<br>получай достижения и боунсы</h2>
      </div>
    </section>

    <section class="section-8">
      <div class="center">
        <div class="logo"><i class="fas fa-gifts"></i></div>
        <h1>Начни сразу с <span>бонусами</span></h1>
        <div class="row">
          <div class="input-group">
            <label for="promo">Введи промокод:</label><input id="promo" MAXLENGTH="25" placeholder="Место для промокода"
                                                             type="text">
            <button class="btn btn-yellow">Активировать</button>
          </div>
        </div>
        <div class="row">
          <a href="">Условия использования</a>
        </div>

        <ul class="social">
          <li><i class="fab fa-vk"></i></li>
          <li><i class="fab fa-facebook-f"></i></li>
          <li><i class="fab fa-telegram-plane"></i></li>
        </ul>

      </div>
    </section>

    <section class="section-7">
      <div class="center">
        <h1 class="top">Посети <span>игровые</span> разделы</h1>
        <ul>
          <li>
            <p>Игровая зона</p>
          </li>
          <li>
            <p>Маркет</p>
          </li>
        </ul>
        <h1 class="bottom">и наш <span>маркет</span></h1>
      </div>
    </section>

    <footer>
      <div class="center">

        <div class="logo">
          <img src="../assets/img/logo.png" alt="">
        </div>

        <p>Все права защищены(c)HUT-PLACES.COM</p>

      </div>
    </footer>
  </div>
</template>

<script>

import {Carousel3d, Slide} from 'vue-carousel-3d'

export default {
  name: 'Start',
  components: {
    Carousel3d,
    Slide
  }
}
</script>

<style lang="scss">

  @import "../assets/css/start.scss";

  .carousel-3d-container {
    height: 390px !important;
    padding: 10px;
    box-sizing: border-box;

    .carousel-3d-slide {

      border: none;
      box-shadow: 0px 0px 5px 0px black;

      img {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 0;
      }

      .shadow {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        box-shadow: 0px 0px 11px 5px white inset;
      }

      background-color: red !important;

      .title {
        font-size: 222px;
      }
    }
  }

</style>
