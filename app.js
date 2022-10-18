var jet = document.getElementById("jet");
var board = document.getElementById("board");
const spacebar = 32;
const kiri = 65;
const kanan = 68;

// test dari farish

window.addEventListener("keydown", (e) => {
  var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
  if (e.key == "ArrowLeft" && left > 0) {
    jet.style.left = left - 10 + "px";
  } else if (e.key == "ArrowRight" && left <= 460) {
    jet.style.left = left + 10 + "px";
  }

  if (e.key == spacebar || e.keyCode == 32) {
    //TOMBOL MENEMBAK

    var bullet = document.createElement("div");
    bullet.classList.add("bullets");
    board.appendChild(bullet);

    var movebullet = setInterval(() => {
      var rocks = document.getElementsByClassName("rocks");

      for (var i = 0; i < rocks.length; i++) {
        var rock = rocks[i];
        if (rock != undefined) {
          var rockbound = rock.getBoundingClientRect();
          var bulletbound = bullet.getBoundingClientRect();

          if (
            bulletbound.left >= rockbound.left &&
            bulletbound.right <= rockbound.right &&
            bulletbound.top <= rockbound.top &&
            bulletbound.bottom <= rockbound.bottom //kiri kanan
          ) {
            rock.parentElement.removeChild(rock);

            let score = (document.getElementById("points").innerHTML =
              parseInt(document.getElementById("points").innerHTML) + 1);
            // ini nah lang
            if (score > 10) {
              var moverocks = setInterval(() => {
                var rocks = document.getElementsByClassName("rocks");

                if (rocks != undefined) {
                  for (var i = 0; i < rocks.length; i++) {
                    var rock = rocks[i];
                    var rocktop = parseInt(
                      window.getComputedStyle(rock).getPropertyValue("top")
                    ); // OBSTACLE KEBAWAH

                    if (rocktop >= 475) {
                      alert("Game Over"); // TEXT GAME OVER
                      clearInterval(moverocks);
                      window.location.reload();
                    }

                    rock.style.top = rocktop + 10 + "px"; //MEMPERLAMBAT/MEMPERCEPAT OBSTCLE

                    // if ()
                  }
                }
              }, 90);
            }
          }
        }
      }
      var bulletbottom = parseInt(
        window.getComputedStyle(bullet).getPropertyValue("bottom")
      );

      if (bulletbottom >= 500) {
        clearInterval(movebullet);
      }
      //membatasi bullet di frame

      bullet.style.left = left + "px";
      bullet.style.bottom = bulletbottom + 3 + "px";
    });
  }
});

var generaterocks = setInterval(() => {
  // MULAI GAME
  var rock = document.createElement("div");
  rock.classList.add("rocks");

  var rockleft = parseInt(
    window.getComputedStyle(rock).getPropertyValue("left")
  );

  rock.style.left = Math.floor(Math.random() * 450) + "px";

  board.appendChild(rock);
}, 1500); //MEMPERBANYAK/MENGURANGI OBSTCLE

var moverocks = setInterval(() => {
  var rocks = document.getElementsByClassName("rocks");

  if (rocks != undefined) {
    for (var i = 0; i < rocks.length; i++) {
      var rock = rocks[i];
      var rocktop = parseInt(
        window.getComputedStyle(rock).getPropertyValue("top")
      ); // OBSTACLE KEBAWAH

      if (rocktop >= 475) {
        alert("Game Over"); // TEXT GAME OVER
        clearInterval(moverocks);
        window.location.reload();
      }

      rock.style.top = rocktop + 10 + "px"; //MEMPERLAMBAT/MEMPERCEPAT OBSTCLE

      // if ()
    }
  }
}, 450);
