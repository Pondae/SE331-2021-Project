<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
  />
  <div class="footer-dark" >
    <footer>
      <div class="container"> 
          <p/>
        <div class="row">
            
          <div class="col-sm-6 col-md-3 item">
             
            <div class="nameC">Services</div>
            <ul style="margin-left:22px">
              <li><a href="/">Home page</a></li>
              <li style="margin-left:13px"><a href="/About">About us</a></li>
            </ul>
          </div>
          <div class="col-md-6 item ">
           <div>
          <p class="nameC">Chick-Goal-Ya &copy;</p>
          <p>
            Our aim is to let everyone notice about Covid-19 and share you with
            thier name.
          </p>
        </div>
          </div>
          <div class="col item social">
            <a href="#"><i class="icon ion-social-facebook"></i></a
            ><a href="#"><i class="icon ion-social-twitter"></i></a
            ><a href="#"><i class="icon ion-social-snapchat"></i></a
            ><a href="#"><i class="icon ion-social-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped>
footer {
  position: relative;
  color: white;
}
.footer-dark {
  padding: 25px 0;
  color: blue;
  background-color: #282d32;
}

.footer-dark h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-dark ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
}

.footer-dark ul a:hover {
  opacity: 0.8;
}

@media (max-width: 767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
}

.footer-dark .item.text {
  margin-bottom:1px;
}

@media (max-width: 767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

.footer-dark .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer-dark .item.social {
  text-align: center;
}

@media (max-width: 991px) {
  .footer-dark .item.social {
    text-align: center;
    margin-top: 20px;
  }
}

.footer-dark .item.social > a {
  font-size: 20px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
  margin: 0 8px;
  color: white;
  opacity: 0.75;
}

.footer-dark .item.social > a:hover {
  opacity: 0.9;
}

.footer-dark .copyright {
  text-align: center;
  padding-top: 24px;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}
.nameC{
    font-size: 26px;
}
.container{
    color: white;
}
</style>