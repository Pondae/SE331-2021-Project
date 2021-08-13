<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
    crossorigin="anonymous"
  />
  <div class="about">
    <br><br><br>
    <div class="container">
      <h1>DEVELOPER's profiles</h1>
    </div>
    <div class="container">
      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="" class="image">
      <div class="accordion-menu">
        <div class="item" id="item1">
          <a href="#item1" class="title">
            <span>Pasakon Paingjai</span>
            <i class="icon"></i>
          </a>
          <p class="text">
            <img src="https://images-ext-2.discordapp.net/external/Xyn9XLVBxbCo-U3jWFY6S506oIFzmoUD5949frVkmJI/%3F_nc_cat%3D111%26ccb%3D1-4%26_nc_sid%3D174925%26_nc_eui2%3DAeGstUn2KnFmhaB77tMtIA7UFYm4hJbdrAYVibiElt2sBh76zqf_bjCia5pnnz-lH_uEjSkmOTUGB58NJF64LbWY%26_nc_ohc%3DRUW1OrqYP0UAX_M0mMZ%26_nc_ht%3Dscontent.fcnx2-1.fna%26oh%3D7fc10a8ed9e35309e8003ca4f5814c4a%26oe%3D613CBB35/https/scontent.fcnx2-1.fna.fbcdn.net/v/t1.6435-9/90055791_2588892788103529_5478246643067256832_n.jpg" alt="">
          </p>
          <h1 class="text">622115028</h1>
        </div>

        <div class="item" id="item2">
          <a href="#item2" class="title">
            <span>Phonmongkhon Phuthijaem</span>
            <i class="icon"></i>
          </a>
          <p class="text">
            <img src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.6435-9/67936740_2491821724208762_1931982319598436352_n.jpg?_nc_cat=109&ccb=1-4&_nc_sid=174925&_nc_eui2=AeGzPFtOtgfscf1Gx3JQBfwpr5XUrLd4VKCvldSst3hUoEvnlwi-2JdMNufBhNQAWLmvRDjvI2O-2qUbMtYQqgvH&_nc_ohc=A-EykaBuRcgAX_JTlEp&_nc_ht=scontent.fcnx4-1.fna&oh=01ca5750c867bdbb461246231b1b58c8&oe=613A8A6E" alt="">
          </p>
          <h1 class="text">622115026</h1>
        </div>

        <div class="item" id="item3">
          <a href="#item3" class="title">
            <span>Thitisan chailuek</span>
            <i class="icon"></i>
          </a>
          <p class="text">
            <img src="https://media.discordapp.net/attachments/686962571160453145/875740123059327037/pun.jpg" alt="">
          </p>
          <h1 class="text">622115017</h1>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<style scoped>
.text img{
  width: 250px;
  height: 250px;
  border-radius: 50%;
}
.item a{
  text-decoration: none;
}

.container{
  max-width: 1200px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.image, .accordion-menu{
  width: calc(50% - 20px);
}

.title{
  background-color: #1b65a6;
  color: #f2f2f2;
  display: flex;
  padding: 20px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  align-items: center;
  justify-content: space-between;
}

.icon{
  position: relative;
  width: 14px;
}

.icon::before, .icon::after{
  content: "";
  position: absolute;
  width: 14px;
  height: 3px;
  background-color: #f2f2f2;
  top: -1.5px
}

.icon::after{
  transform: rotate(90deg);
  transition: .5s linear;
}

.text{
  color: #30618C;
  line-height: 26px;
  margin: 6px 0;
  opacity: 0;
  height: 0;
}

.item:target .text{
  height: auto;
  opacity: 1;
  padding: 20px;
  margin: 12px 0;
}

.item:target .icon::after{
  transform: rotate(0);
}

@media screen and (max-width:960px){
  .container{
    max-width: 600px;
  }

  .image, .accordion-menu{
    width: 100%;
    margin: 20px 0;
  }
}
</style>
