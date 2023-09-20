$(document).ready(function () {
  $(".tombol1").click(function () {
    // bagian 1
    $(".penutup1").replaceWith(
      "<img src='./img/reine.jpg' class='card-img-top' alt='merak'/>"
    );
    $("<audio></audio>").attr({
      src: "./audio/merak.mp3",
      volume: "0.5",
      autoplay: "autoplay",
    });
  });
  //   bagian 2
  $(".tombol2").click(function () {
    // Mengganti <p> tag dengan <h2> tag
    $(".penutup2").replaceWith(
      "<img src='./img/owl.jpg' class='card-img-top' alt='merak'/>"
    );
    $("<audio></audio>").attr({
      src: "./audio/owl.mp3",
      volume: "0.5",
      autoplay: "autoplay",
    });
  });
  //   bagian 3
  $(".tombol3").click(function () {
    // Mengganti <p> tag dengan <h2> tag
    $(".penutup3").replaceWith(
      "<img src='./img/elang.jpg' class='card-img-top' alt='merak'/>"
    );
    $("<audio></audio>").attr({
      src: "./audio/elang.mp3",
      volume: "0.5",
      autoplay: "autoplay",
    });
  });
  //   batas unggas------------------------
  $(".tombol4").click(function () {
    // Mengganti <p> tag dengan <h2> tag
    $(".penutup4").replaceWith(
      "<img src='./img/uler.jpg' class='card-img-top' alt='merak'/>"
    );
    $("<audio></audio>").attr({
      src: "./audio/uler.mp3",
      volume: "0.5",
      autoplay: "autoplay",
    });
  });
  $(".tombol5").click(function () {
    // Mengganti <p> tag dengan <h2> tag
    $(".penutup5").replaceWith(
      "<img src='./img/lion.jpg' class='card-img-top' alt='merak'/>"
    );
    $("<audio></audio>").attr({
      src: "./audio/lion.mp3",
      volume: "0.5",
      autoplay: "autoplay",
    });
  });
  $(".tombol6").click(function () {
    // Mengganti <p> tag dengan <h2> tag
    $(".penutup6").replaceWith(
      "<img src='./img/serigala.jpg' class='card-img-top' alt='merak'/>"
    );
    $("<audio></audio>").attr({
      src: "./audio/serigala.mp3",
      volume: "0.5",
      autoplay: "autoplay",
    });
  });
  // batas hewan buas------------------------
  $(".tombol7").click(function () {
    
    $(".penutup7").replaceWith(
      "<img src='./img/cow.jpg' class='card-img-top' alt='merak'/>"
    );
    $("<audio></audio>").attr({
      src: "./audio/cow.mp3",
      volume: "0.5",
      autoplay: "autoplay",
    });
  });
  $(".tombol8").click(function () {
    
    $(".penutup8").replaceWith(
      "<img src='./img/kambing.jpg' class='card-img-top' alt='merak'/>"
    );
    $("<audio></audio>").attr({
      src: "./audio/kambing.mp3",
      volume: "0.5",
      autoplay: "autoplay",
    });
  });
  $(".tombol9").click(function () {
   
    $(".penutup9").replaceWith(
      "<img src='./img/chicken.jpg' class='card-img-top' alt='merak'/>"
    );
    $("<audio></audio>").attr({
      src: "./audio/chicken.mp3",
      volume: "0.5",
      autoplay: "autoplay",
    });
  });
});
