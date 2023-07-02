var container = document.querySelector('.gallery');
var images = container.querySelectorAll('img');
var imageCount = images.length;
var imageWidth = images[0].offsetWidth;

container.innerHTML += container.innerHTML;

var scrollPos = 0;
var animationFrameId;

function updateGallery() {
  scrollPos++;
  if (scrollPos >= imageWidth) {
    scrollPos = 0;
    container.scrollLeft = scrollPos;
  } else {
    container.scrollLeft = scrollPos;
  }

  animationFrameId = requestAnimationFrame(updateGallery);
}

updateGallery();

// Stop the animation when the user interacts with the gallery
container.addEventListener('mouseenter', stopGalleryAnimation);
container.addEventListener('mouseleave', resumeGalleryAnimation);

function stopGalleryAnimation() {
  cancelAnimationFrame(animationFrameId);
}

function resumeGalleryAnimation() {
  animationFrameId = requestAnimationFrame(updateGallery);
}

/*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
/*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */

function chgtxt1() {
  var plione = document.getElementById('p-li-one');
  var plitwo = document.getElementById('p-li-two');
  var plithree = document.getElementById('p-li-three');

  plione.innerHTML = "Listening session #00"; plione.style.transition = "all 1s";
  plitwo.innerHTML = "Tuesday 28 March"; plitwo.style.transition = "all 1s";
  plithree.innerHTML = "<i>That really made me think of…</i>"; plithree.style.transition = "all 1s";
}

function chgtxt2() {
  var plione = document.getElementById('p-li-one');
  var plitwo = document.getElementById('p-li-two');
  var plithree = document.getElementById('p-li-three');

  plione.innerHTML = "Listening session #02"; plione.style.transition = "all 1s";
  plitwo.innerHTML = "Tuesday 11 April"; plitwo.style.transition = "all 1s";
  plithree.innerHTML = "<i>Can't get you out of my head</i>"; plithree.style.transition = "all 1s";
}

function chgtxt3() {
  var plione = document.getElementById('p-li-one');
  var plitwo = document.getElementById('p-li-two');
  var plithree = document.getElementById('p-li-three');

  plione.innerHTML = "Listening session #03"; plione.style.transition = "all 1s";
  plitwo.innerHTML = "Tuesday 25 April"; plitwo.style.transition = "all 1s";
  plithree.innerHTML = "<i>One at a time (live)</i>"; plithree.style.transition = "all 1s";
}

function chgtxt4() {
  var plifour = document.getElementById('p-li-four');
  var plifive = document.getElementById('p-li-five');
  var plisix = document.getElementById('p-li-six');

  plifour.innerHTML = "Listening session #04"; plifour.style.transition = "all 1s";
  plifive.innerHTML = "Tuesday 16 May"; plifive.style.transition = "all 1s";
  plisix.innerHTML = "<i>I opposite of love Älg0$P34K</i>"; plisix.style.transition = "all 1s";
}

function chgtxt5() {
  var plifour = document.getElementById('p-li-four');
  var plifive = document.getElementById('p-li-five');
  var plisix = document.getElementById('p-li-six');

  plifour.innerHTML = "Listening session #05"; plifour.style.transition = "all 1s";
  plifive.innerHTML = "Tuesday 23 May"; plifive.style.transition = "all 1s";
  plisix.innerHTML = "<i>Remember you gotta breathe</i>"; plisix.style.transition = "all 1s";
}

function chgtxt6() {
  var plifour = document.getElementById('p-li-four');
  var plifive = document.getElementById('p-li-five');
  var plisix = document.getElementById('p-li-six');
  plifour.innerHTML = "Listening session #06"; plifour.style.transition = "all 1s";
  plifive.innerHTML = "Friday 09 June"; plifive.style.transition = "all 1s";
  plisix.innerHTML = "<i>BLUE+TOOTH</i>"; plisix.style.transition = "all 1s";
}

function resetText() {
  var plione = document.getElementById('p-li-one');
  var plitwo = document.getElementById('p-li-two');
  var plithree = document.getElementById('p-li-three');
  var plifour = document.getElementById('p-li-four');
  var plifive = document.getElementById('p-li-five');
  var plisix = document.getElementById('p-li-six');

  plione.innerHTML = "Session #00—#03";
  plitwo.innerHTML = "ARCHIVE \\ 2023.03—2023.04";
  plithree.innerHTML = "Uma Naddermier, Elsa Basle & Alva Bückling";
  plifour.innerHTML = "Session #00—#03";
  plifive.innerHTML = "ARCHIVE \\ 2023.03—2023.04";
  plisix.innerHTML = "Uma Naddermier, Elsa Basle & Alva Bückling";
}

// Attach the mouseout event to the images
var images = document.querySelectorAll('.gallery img');
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('mouseout', resetText);
}

/*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
/*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */

function pro() {
  var p = document.getElementsByClassName('project')[0];
  var h = document.getElementsByClassName('home')[0];
  var f = document.getElementsByClassName('feature')[0];
  p.style.display = "grid"; p.style.animation = "fade-in 0.8s ease";
  h.style.display = "none"; f.style.display = "none";
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
}
  function home() {
    var p = document.getElementsByClassName('project')[0];
    var h = document.getElementsByClassName('home')[0];
    var f = document.getElementsByClassName('feature')[0];
    p.style.display = "none"; h.style.animation = "fade-in 0.8s ease";
    h.style.display = "grid";  f.style.display = "grid"; window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      }

    /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
   
    var img1 = document.querySelector('#p-l-img1'); var img2 = document.querySelector('#p-l-img2'); var img3 = document.querySelector('#p-l-img3');
    var img4 = document.querySelector('#p-l-img4'); var img5 = document.querySelector('#p-l-img5'); var img6 = document.querySelector('#p-l-img6');
    var img7 = document.querySelector('#p-l-img7'); var img8 = document.querySelector('#p-l-img8'); var img9 = document.querySelector('#p-l-img9');
    var img10 = document.querySelector('#p-l-img10'); var img11 = document.querySelector('#p-l-img11'); var img12 = document.querySelector('#p-l-img12'); 
    var img13 = document.querySelector('#p-l-img13'); var img14 = document.querySelector('#p-l-img14'); var img15 = document.querySelector('#p-l-img15'); 
    var li1 = document.querySelector('#p-li-1'); var li2 = document.querySelector('#p-li-2'); var li3 = document.querySelector('#p-li-3');
    var par1 = document.querySelector('#p-paragraph-1'); var par2 = document.querySelector('#p-paragraph-2');
    
    function session1() {
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
      var img1 = document.querySelector('#p-l-img1'); var img2 = document.querySelector('#p-l-img2'); var img3 = document.querySelector('#p-l-img3');
      var img4 = document.querySelector('#p-l-img4'); var img5 = document.querySelector('#p-l-img5'); var img6 = document.querySelector('#p-l-img6');
      var img7 = document.querySelector('#p-l-img7'); var img8 = document.querySelector('#p-l-img8'); var img9 = document.querySelector('#p-l-img9');
      var img10 = document.querySelector('#p-l-img10'); var img11 = document.querySelector('#p-l-img11'); var img12 = document.querySelector('#p-l-img12'); 
      var img13 = document.querySelector('#p-l-img13'); var img14 = document.querySelector('#p-l-img14'); var img15 = document.querySelector('#p-l-img15'); 
      var li1 = document.querySelector('#p-li-1'); var li2 = document.querySelector('#p-li-2'); var li3 = document.querySelector('#p-li-3');
      var par1 = document.querySelector('#p-paragraph-1'); var par2 = document.querySelector('#p-paragraph-2');
       /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
      img13.style.display = "grid"; img14.style.display = "grid"; img15.style.display = "grid";
       /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
      img1.src = "img/01/01_session01.jpg"; img2.src = "img/01/02_session01.jpg"; img3.src = "img/01/03_session01.jpg";
      img4.src = "img/01/04a_session01.jpg"; img5.src = "img/01/05_session01.JPG"; img6.src = "img/01/06_session01.jpg";
      img7.src = "img/01/07_session01.jpg"; img8.src = "img/01/08_session01.jpg"; img9.src = "img/01/09_session01.jpg";
      img10.src = "img/01/10_session01.jpg"; img11.src = "img/01/11_session01.jpg"; img12.src = "img/01/12_session01.jpg";
      img13.src = "img/01/13_session01.jpg"; img14.src = "img/01/14_session01.jpg"; img15.src = "img/01/15_session01.PNG";
      li1.innerHTML = "Listening session #00"; li2.innerHTML = "Tuesday 28 March"; li3.innerHTML = "<i>That really made me think of…</i>";
      par1.innerHTML = "<i>“And then they sent me “I miss You” by Blink182 yesterday, and you know I was just wondering what it all means, I mean you would not sent that song to anyone, right?”</i><br><br>For our first listening session we invited each participant to contribute with a song in order to distill all these secret messages that play into the delicate act of sending and receiving music.<br><br>(a song as a memory storage space)<br>(a song as a placeholder for communication)<br>(a song as a message to be yet decoded)<br>(a song as a gift)";
      par2.innerHTML = "After the listening session, we redistributed randomly the songs so that every one went home with another person’s choice. It’s a chain reaction.<br><br><br><br>The compilation can be found <a href=https://open.spotify.com/playlist/4gZtN3apXItOwk2GoQ8Kvx?si=587542029a7f4af4>here</a><br>Food and drinks curated by Hagar Cohen<br>Furniture by Ran-Re Reimann, Sanna Rink and Anaëlle Enjalbert<br>Film photography by Sanna Rink<br><br><button class=p-button onclick=home()>Back to homepage</button>";
     /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
    }

    function session2() {
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
      var img1 = document.querySelector('#p-l-img1'); var img2 = document.querySelector('#p-l-img2'); var img3 = document.querySelector('#p-l-img3');
      var img4 = document.querySelector('#p-l-img4'); var img5 = document.querySelector('#p-l-img5'); var img6 = document.querySelector('#p-l-img6');
      var img7 = document.querySelector('#p-l-img7'); var img8 = document.querySelector('#p-l-img8'); var img9 = document.querySelector('#p-l-img9');
      var img10 = document.querySelector('#p-l-img10'); var img11 = document.querySelector('#p-l-img11'); var img12 = document.querySelector('#p-l-img12'); 
      var img13 = document.querySelector('#p-l-img13'); var img14 = document.querySelector('#p-l-img14'); var img15 = document.querySelector('#p-l-img15'); 
      var li1 = document.querySelector('#p-li-1'); var li2 = document.querySelector('#p-li-2'); var li3 = document.querySelector('#p-li-3');
      var par1 = document.querySelector('#p-paragraph-1'); var par2 = document.querySelector('#p-paragraph-2');
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
      img13.style.display = "grid"; img14.style.display = "grid"; img15.style.display = "grid";
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
      img1.src = "img/02/01_session02.jpg"; img2.src = "img/02/02_session02.jpg"; img3.src = "img/02/03_session02.jpg";
      img4.src = "img/02/04_session02.jpg"; img5.src = "img/02/05_session02.jpg"; img6.src = "img/02/06_session02.jpg";
      img7.src = "img/02/07_session02.jpg"; img8.src = "img/02/08_session02.jpg"; img9.src = "img/02/09_session02.jpg";
      img10.src = "img/02/10_session02.jpg"; img11.src = "img/02/11_session02.jpg"; img12.src = "img/02/12_session02.jpg";
      img13.src = "img/02/13_session02.jpg"; img14.src = "img/02/14_session02.jpg"; img15.src = "img/02/15_session02.jpg";
      li1.innerHTML = "Listening session #02"; li2.innerHTML = "Tuesday 11 April"; li3.innerHTML = "<i>Can’t get you out of my head</i>";
      par1.innerHTML = "For our second listening session we gathered around the prompt of looping and sampling.<br>Through two screens and two sets of speakers we curated an associative video and sound installation referencing each other, creating an eternal loop between the two sides.";
      par2.innerHTML = "One of the works we chose to especially look into was of Pamela Z. Pioneer of live looping, she processes her voice to create complex sonic layers, combines experimental extended vocal techniques, operatic bel canto, found objects, text, digital processing, and wireless MIDI controllers that allow her to manipulate sound with physical gestures. <br><br>“Stay forever and ever and ever”<br><br><br><br>Listen to Pamela Z <a href=https://on.soundcloud.com/xAnas>here.</a><br>Furniture by Ran-Re Reimann, Sanna Rink and Anaëlle Enjalbert<br>Film photography by Sanna Rink<br><br><button class=p-button onclick=home()>Back to homepage</button>";
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */

    }

    function session3() {
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
      var img1 = document.querySelector('#p-l-img1'); var img2 = document.querySelector('#p-l-img2'); var img3 = document.querySelector('#p-l-img3');
      var img4 = document.querySelector('#p-l-img4'); var img5 = document.querySelector('#p-l-img5'); var img6 = document.querySelector('#p-l-img6');
      var img7 = document.querySelector('#p-l-img7'); var img8 = document.querySelector('#p-l-img8'); var img9 = document.querySelector('#p-l-img9');
      var img10 = document.querySelector('#p-l-img10'); var img11 = document.querySelector('#p-l-img11'); var img12 = document.querySelector('#p-l-img12'); 
      var img13 = document.querySelector('#p-l-img13'); var img14 = document.querySelector('#p-l-img14'); var img15 = document.querySelector('#p-l-img15'); 
      var li1 = document.querySelector('#p-li-1'); var li2 = document.querySelector('#p-li-2'); var li3 = document.querySelector('#p-li-3');
      var par1 = document.querySelector('#p-paragraph-1'); var par2 = document.querySelector('#p-paragraph-2');
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
      img13.style.display = "grid"; img14.style.display = "grid"; img15.style.display = "grid";
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
      img1.src = "img/03/01_session03.jpg"; img2.src = "img/03/02_session03.jpg"; img3.src = "img/03/03_session03.jpg";
      img4.src = "img/03/04_session03.jpg"; img5.src = "img/03/05_session03.jpg"; img6.src = "img/03/06_session03.jpg";
      img7.src = "img/03/07_session03.jpg"; img8.src = "img/03/08_session03.jpg"; img9.src = "img/03/09_session03.jpg";
      img10.src = "img/03/10_session03.jpg"; img11.src = "img/03/11_session03.jpg"; img12.src = "img/03/12_session03.jpg";
      img13.src = "img/03/13_session03.jpg"; img14.src = "img/03/14_session03.jpg"; img15.src = "img/03/15_session03.jpg";
      li1.innerHTML = "Listening session #03"; li2.innerHTML = "Tuesday 25 April"; li3.innerHTML = "One at a time (live)";
      par1.innerHTML = "<i>“The troubles of life were pushing them into the tomb,<br>But thanks to the synthesizer,<br>we can gather and welcome”</i><br><br>Multimedia artist and musician Kris van Melle, created a live soundscape for us using their Korg Monolog and Roland drum machine. One note at a time. Playing with the monophonic functions of the synthesiser, they created ten sequences allowing participants to rest in the repetition while being surprised by each new combination of beats. They invited Bowie van Der Loo to join in an improvisation with four hands.";
      par2.innerHTML = "<i>The rhythm built up, high resonant notes, the off-scale dipping warble, the eerie strangely primeval bass of the synthesizer. The others punctuate the music with claps and slowly begin to nod that suggest “this sound might be danceable.” and then stronger nodding, snapping fingers, tapping feets and shy twostepping, that suggest “this is indeed danceable” “its like they speaks with their synthesizer,” I heard someone murmur. “What do they say?”</i><br><br><br><br>Listen to Kris music <a href=https://on.soundcloud.com/MqpQA>here:</a><br>Food, drinks and ceramics by Hagar Cohen<br>Furniture by Ran-Re Reimann, Sanna Rink and Anaëlle Enjalbert<br>Film photography by Sanna Rink<br>Sound support by Timo van Sark<br><br><button class=p-button onclick=home()>Back to homepage</button>";
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
    }

    function session4() {
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
      var img1 = document.querySelector('#p-l-img1'); var img2 = document.querySelector('#p-l-img2'); var img3 = document.querySelector('#p-l-img3');
      var img4 = document.querySelector('#p-l-img4'); var img5 = document.querySelector('#p-l-img5'); var img6 = document.querySelector('#p-l-img6');
      var img7 = document.querySelector('#p-l-img7'); var img8 = document.querySelector('#p-l-img8'); var img9 = document.querySelector('#p-l-img9');
      var img10 = document.querySelector('#p-l-img10'); var img11 = document.querySelector('#p-l-img11'); var img12 = document.querySelector('#p-l-img12'); 
      var img13 = document.querySelector('#p-l-img13'); var img14 = document.querySelector('#p-l-img14'); var img15 = document.querySelector('#p-l-img15'); 
      var li1 = document.querySelector('#p-li-1'); var li2 = document.querySelector('#p-li-2'); var li3 = document.querySelector('#p-li-3');
      var par1 = document.querySelector('#p-paragraph-1'); var par2 = document.querySelector('#p-paragraph-2');
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
      img1.src = "img/04/01_session04.jpg"; img2.src = "img/04/02_session04.jpg"; img3.src = "img/04/03_session04.jpg";
      img4.src = "img/04/04_session04.jpg"; img5.src = "img/04/05_session04.jpg"; img6.src = "img/04/06_session04.jpg";
      img7.src = "img/04/07_session04.jpg"; img8.src = "img/04/08_session04.jpg"; img9.src = "img/04/09_session04.jpg";
      img10.src = "img/04/10_session04.jpg"; img11.src = "img/04/11_session04.jpg"; img12.src = "img/04/12_session04.jpg";
      img13.style.display = "none"; img14.style.display = "none"; img15.style.display = "none";
      li1.innerHTML = "Listening session #04"; li2.innerHTML = "Tuesday 16 May"; li3.innerHTML = "<i>I opposite of love Älg0$P34K</i>";
      par1.innerHTML = "Formerly known as DJ NYC, p3A and Raf works are often created from an interest in sound and technology.  They are interested in the progression of softwares and technology and how they are infiltrated in everyday life. The intersection of communication and technology often appears in their works.";
      par2.innerHTML = "Words like pussy, sex work, porn, lesbian are being increasingly replaced to circumvent the censorship of social media platforms like TikTok. The ever-changing language is known as ‘Algospeak’. Curated by p3A and Raf, our forth listening session Älg0$p34k was dedicated to uncovering and decomposing this new language through sound. With a setup of 16 speakers they created a mesmerising polyphonic choir with Tik Tok’s 4 different text to speech voices. The collective voicing tried to find a common spoken tone in the different speakers, figuring out how to get to the common understanding of these words.<br><br><i> <br>Xx.<br>Sese s X.<br>Se es x g.<br>Seegee ge eg x.<br>Xxsss eeess x ge.<br>G se ss ee ggs.<br>Gg seeg ss.<br>Gsee gg s.<br>Seegs gg se.<br>seggs.<br>Sx.<br>Sees ss xx.<br>Se es ge eg.<br>Seegee x gege.<br>See g sss x.<br>Se es g se g ssi.<br>Gg see g ss.<br>See g s.<br>Seegs s.<br>seegs.<br>Xs s.</i><br><br><br><br>Follow p3A and Raf’s work <a href=https://www.instagram.com/_p3a___/?hl=sv>here</a> and <a href=https://www.instagram.com/raf_m2m/?hl=sv>here.</a><br>Food and drinks curated by Hagar Cohen<br>Film photography by Sanna Rink<br><br><button class=p-button onclick=home()>Back to homepage</button>";
    }

    function session5() {
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
      var img1 = document.querySelector('#p-l-img1'); var img2 = document.querySelector('#p-l-img2'); var img3 = document.querySelector('#p-l-img3');
      var img4 = document.querySelector('#p-l-img4'); var img5 = document.querySelector('#p-l-img5'); var img6 = document.querySelector('#p-l-img6');
      var img7 = document.querySelector('#p-l-img7'); var img8 = document.querySelector('#p-l-img8'); var img9 = document.querySelector('#p-l-img9');
      var img10 = document.querySelector('#p-l-img10'); var img11 = document.querySelector('#p-l-img11'); var img12 = document.querySelector('#p-l-img12'); 
      var img13 = document.querySelector('#p-l-img13'); var img14 = document.querySelector('#p-l-img14'); var img15 = document.querySelector('#p-l-img15'); 
      var li1 = document.querySelector('#p-li-1'); var li2 = document.querySelector('#p-li-2'); var li3 = document.querySelector('#p-li-3');
      var par1 = document.querySelector('#p-paragraph-1'); var par2 = document.querySelector('#p-paragraph-2');
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
      img13.style.display = "grid"; img14.style.display = "none"; img15.style.display = "none";
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
      img1.src = "img/05/01_session05.jpg"; img2.src = "img/05/02_session05.jpg"; img3.src = "img/05/03_session05.jpg";
      img4.src = "img/05/04_session05.JPG"; img5.src = "img/05/05_session05.jpg"; img6.src = "img/05/06_session05.jpg";
      img7.src = "img/05/07_session05.JPG"; img8.src = "img/05/08_session05.JPG"; img9.src = "img/05/09_session05.jpg";
      img10.src = "img/05/10_session05.jpg"; img11.src = "img/05/11_session05.jpg"; img12.src = "img/05/12_session05.jpg"; img13.src = "img/05/13_session05.jpg";
      li1.innerHTML = "Listening session #05"; li2.innerHTML = "Tuesday 23 May"; li3.innerHTML = "<i>Remember you gotta breathe</i>";
      par1.innerHTML = "<i>“Welcome the spring, the summer rain”</i>Beverly Glenn-Copeland is a 79-year-old musician who found his first widespread audience in 2015, when Keyboard Fantasies” was rediscovered by the Japanese record collector Ryota Masuko and subsequently reissued. The soothing, spiritual undercurrent of his compositions offers a particular respite from contemporary reality; it has a way of sounding above it all, even as Glenn-Copeland remains immensely grounded and present in real life.";
      par2.innerHTML = "This special session started with a short meditation and listening session of Copeland’s work followed by a screening of the documentary ‘Keyboard Fantasies’ about the life of the time-travelling, wonderful, incomparable singer and composer.<br><br><br><br>Listen to Glenn’s music<a href=https://on.soundcloud.com/UCWsd> here</a> <br>and watch the Keyboard Fantasies documentary<a href=https://www.keyboardfantasies.movie/> here.</a><br>Food and drinks curated by Hagar Cohen";
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
    }

    function session6() {
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
      var img1 = document.querySelector('#p-l-img1'); var img2 = document.querySelector('#p-l-img2'); var img3 = document.querySelector('#p-l-img3');
      var img4 = document.querySelector('#p-l-img4'); var img5 = document.querySelector('#p-l-img5'); var img6 = document.querySelector('#p-l-img6');
      var img7 = document.querySelector('#p-l-img7'); var img8 = document.querySelector('#p-l-img8'); var img9 = document.querySelector('#p-l-img9');
      var img10 = document.querySelector('#p-l-img10'); var img11 = document.querySelector('#p-l-img11'); var img12 = document.querySelector('#p-l-img12'); 
      var img13 = document.querySelector('#p-l-img13'); var img14 = document.querySelector('#p-l-img14'); var img15 = document.querySelector('#p-l-img15'); 
      var li1 = document.querySelector('#p-li-1'); var li2 = document.querySelector('#p-li-2'); var li3 = document.querySelector('#p-li-3');
      var par1 = document.querySelector('#p-paragraph-1'); var par2 = document.querySelector('#p-paragraph-2');
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
      img13.style.display = "none"; img14.style.display = "none"; img15.style.display = "none";
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
      img1.src = "img/06/01_session06.jpg"; img2.src = "img/06/02_session06.jpg"; img3.src = "img/06/03_session06.JPG";
      img4.src = "img/06/04_session06.JPG"; img5.src = "img/06/05_session06.jpg"; img6.src = "img/06/06_session06.jpg";
      img7.src = "img/06/07_session06.jpg"; img8.src = "img/06/08_session06.jpg"; img9.src = "img/06/09_session06.jpg";
      img10.src = "img/06/10_session06.jpg"; img11.src = "img/06/11_session06.jpg"; img12.src = "img/06/12_session06.jpg";
      li1.innerHTML = "Listening session #06"; li2.innerHTML = "Friday 09 June"; li3.innerHTML = "BLUE+TOOTH";
      par1.innerHTML = "<i>“What I want to write about is not of tip of the tongue gliding over the sleek back of your front teeth while forming the B of blue, or the grinding, washing and sieving it takes to transform lapis lazuli into ultramarine.”</i><br>Under the strong sun of June we gathered in the shadow of Rietveld’s garden to listen to the blue Satin Bowerbird lecture of designer and writer Hanako Eden.<br><br>Followed by a very blue listening session curated by Mae and Lizzy -about collaboration, linking up and blue teeth. Hearing each other’s songs through one device, sharing experiences, a space to platonically come closer together.";
      par2.innerHTML = "<i>“I will never know how you see [colour] and you will never know how I see it. But this separation of consciousness is recognized only after a failure of communication, and our first movement is to believe in an undivided being between us…“</i> — Anne Carson<br><br><br><br>The compilation can be found<a href=https://open.spotify.com/playlist/5Nfvp4G7OMAZ6tIrVAMowc?si=30eeaf7fa5f14c57> here</a><br>Food and drinks curated by Kateryna Lymar & Ethan Lieutet Khnafo<br>Furniture by Ran-Re Reimann<br><br><button class=p-button onclick=home()>Back to homepage</button>";
      /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /*  /* */
    }