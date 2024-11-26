document.addEventListener("DOMContentLoaded", () => {
  const imgProfile = document.getElementById("imgUtenteMenu");
  const nomeUtenteMenu = document.getElementById("nomeUtenteMenu");

  const UtenteSalvato = JSON.parse(localStorage.getItem("User"));

  if (UtenteSalvato) {
    imgProfile.setAttribute("src", `${UtenteSalvato.urlIMG}`);
    nomeUtenteMenu.innerHTML = `${UtenteSalvato.nome} ${UtenteSalvato.cognome}`;
  }

  const colonnaSinistra = document.getElementById("colonna-sinistra");
  const colonnaDestra = document.getElementById("colonna-destra");

  creaColonnaDX(colonnaDestra);
  creaColonnaSX(colonnaSinistra);
});

const creaColonnaSX = function (colonnaSX) {
  colonnaSX.innerHTML = `            
  <div class="p-4">
   <ul class="list-unstyled mb-0">
     <li class="d-flex align-items-center mb-4">
       <i class="bi bi-house-door-fill fs-4 text-light pe-3"></i>
       <a
         href="./homepage.html"
         class="text-light text-decoration-none fs-5"
         >Home</a
       >
     </li>
     <li class="d-flex align-items-center mb-4">
       <i class="bi bi-search fs-4 text-light pe-3"></i>
       <a
         href="./search.html"
         class="text-light text-decoration-none fs-5"
         >Cerca</a
       >
     </li>
     <li class="d-flex align-items-center mb-4">
       <i class="bi bi-collection-play fs-4 text-light pe-3"></i>
       <a
         href="./library.html"
         class="text-light text-decoration-none fs-5"
         >La tua libreria</a
       >
     </li>
     <li class="d-flex align-items-center mb-4">
       <div
         class="bg-body-secondary d-flex align-items-center justify-content-center p-2 me-3 fs-5"
         style="border-radius: 50%; width: 40px; height: 40px"
       >
         <i class="bi bi-plus-lg text-black text-light fs-4"></i>
       </div>
       <a class="text-light text-decoration-none fs-5" href="#"
         >Crea la tua Playlist</a
       >
     </li>

     <li class="d-flex align-items-center mb-4">
       <div
         class="bg-body-secondary d-flex align-items-center justify-content-center p-2 me-3"
         style="
           border-radius: 50%;
           width: 40px;
           height: 40px;
           overflow: hidden;
         "
       >
         <img
           src="./assets/imgs/liked song.png"
           alt="liked song"
           style="height: 200%; object-fit: cover"
         />
       </div>
       <a
         class="text-light text-decoration-none fs-5"
         href="./album-page.html?id=branipreferiti"
         >Brani che ti piacciono</a
       >
     </li>
   </ul>
   <hr class="text-white my-4" />
   <div
     class="scrollable-section"
     style="max-height: calc(100vh - 200px); overflow-y: auto"
   >
     <ul class="list-unstyled mb-0">
       <li class="mt-3 d-flex align-items-center">
         <img
           src="https://images.pexels.com/photos/4629625/pexels-photo-4629625.jpeg"
           alt="early stage"
           class="rounded-circle me-3"
           width="65"
           height="65"
         />
         <span class="fs-5 me-2">🎸</span>
         <a
           class="text-light text-decoration-none fs-5"
           href="./playlistpage.html?id=IndieRock"
           >Early Stage - Indie Rock</a
         >
       </li>
       <li class="mt-2 d-flex align-items-center">
         <img
           src="https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           alt="be the young"
           class="rounded-circle me-3"
           width="65"
           height="65"
         />
         <span class="fs-5 me-2">🎤</span>
         <a
           class="text-light text-decoration-none fs-5"
           href="./playlistpage.html?id=AltRock"
           >Be the Young - Alt Rock</a
         >
       </li>
       <li class="mt-2 d-flex align-items-center">
         <img
           src="https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           alt="kimiko vibes"
           class="rounded-circle me-3"
           width="65"
           height="65"
         />
         <span class="fs-5 me-2">🎶</span>
         <a
           class="text-light text-decoration-none fs-5"
           href="./playlistpage.html?id=IndiePop"
           >Kimiko Vibes - Indie Pop</a
         >
       </li>
       <li class="mt-2 d-flex align-items-center">
         <img
           src="https://images.pexels.com/photos/8112576/pexels-photo-8112576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           alt="saggio vibes"
           class="rounded-circle me-3"
           width="65"
           height="65"
         />
         <span class="fs-5 me-2">🕺</span>
         <a
           class="text-light text-decoration-none fs-5"
           href="./playlistpage.html?id=Afrobeat"
           >Saggio Vibes - Afrobeat</a
         >
       </li>
       <li class="mt-2 d-flex align-items-center">
         <img
           src="https://images.pexels.com/photos/29479795/pexels-photo-29479795/free-photo-of-giovane-donna-che-soffia-un-chewing-gum-da-vicino.jpeg?auto=compress&cs=tinysrgb&w=600"
           alt="main character"
           class="rounded-circle me-3"
           width="65"
           height="65"
         />
         <span class="fs-5 me-2">🌟</span>
         <a
           class="text-light text-decoration-none fs-5"
           href="./playlistpage.html?id=Pop"
           >Main Character - Pop</a
         >
       </li>
       <li class="mt-3 d-flex align-items-center">
         <img
           src="https://images.pexels.com/photos/1280730/pexels-photo-1280730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           alt="coffee vibes"
           class="rounded-circle me-3"
           width="65"
           height="65"
         />
         <span class="fs-5 me-2">☕</span>
         <a
           class="text-light text-decoration-none fs-5"
           href="./playlistpage.html?id=ChillBeats"
           >Coffee Vibes - Chill Beats</a
         >
       </li>
       <li class="mt-3 d-flex align-items-center">
         <img
           src="https://images.pexels.com/photos/15020813/pexels-photo-15020813/free-photo-of-alba-paesaggio-natura-tramonto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           alt="sunset beats"
           class="rounded-circle me-3"
           width="65"
           height="65"
         />
         <span class="fs-5 me-2">🌅</span>
         <a
           class="text-light text-decoration-none fs-5"
           href="./playlistpage.html?id=RelaxingTunes"
           >Sunset Beats - Relaxing Tunes</a
         >
       </li>
       <li class="mt-3 d-flex align-items-center">
         <img
           src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           alt="upbeat tunes"
           class="rounded-circle me-3"
           width="65"
           height="65"
         />
         <span class="fs-5 me-2">🎉</span>
         <a
           class="text-light text-decoration-none fs-5"
           href="./playlistpage.html?id=PartyPlaylist"
           >Upbeat Tunes - Party Playlist</a
         >
       </li>
       <li class="mt-3 d-flex align-items-center">
         <img
           src="https://images.pexels.com/photos/9529373/pexels-photo-9529373.jpeg?auto=compress&cs=tinysrgb&w=600"
           alt="study focus"
           class="rounded-circle me-3"
           width="65"
           height="65"
         />
         <span class="fs-5 me-2">📚</span>
         <a
           class="text-light text-decoration-none fs-5"
           href="./playlistpage.html?id=CencetrationMusic"
           >Study Focus - Concentration Music</a
         >
       </li>
       <li class="mt-2 d-flex align-items-center">
         <img
           src="https://images.pexels.com/photos/19180583/pexels-photo-19180583/free-photo-of-sussurri-dell-handpan-musicista-accattivante-avvolto-nella-nebbia-rosa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           alt="that mood"
           class="rounded-circle me-3"
           width="65"
           height="65"
         />
         <span class="fs-5 me-2">🔪</span>
         <a
           class="text-light text-decoration-none fs-5"
           href="./playlistpage.html?id=Trap"
           >That Mood - Trap</a
         >
       </li>
       <li class="mt-2 d-flex align-items-center">
         <img
           src="https://images.pexels.com/photos/159613/ghettoblaster-radio-recorder-boombox-old-school-159613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           alt="veecarlotta"
           class="rounded-circle me-3"
           width="65"
           height="65"
         />
         <span class="fs-5 me-2">🎧</span>
         <a
           class="text-light text-decoration-none fs-5"
           href="./playlistpage.html?id=HipHop"
           >Vee & Carlotta - Hip-Hop</a
         >
       </li>
       <li class="mt-2 d-flex align-items-center">
         <img
           src="https://images.pexels.com/photos/802195/pexels-photo-802195.jpeg?auto=compress&cs=tinysrgb&w=600"
           alt="emily winchester"
           class="rounded-circle me-3"
           width="65"
           height="65"
         />
         <span class="fs-5 me-2">💀</span>
         <a
           class="text-light text-decoration-none fs-5"
           href="./playlistpage.html?id=DarkPop"
           >Emily Winchester - Dark Pop</a
         >
       </li>
       <li class="mt-2 d-flex align-items-center">
         <img
           src="https://images.pexels.com/photos/1181820/pexels-photo-1181820.jpeg?auto=compress&cs=tinysrgb&w=600"
           alt="landing page"
           class="rounded-circle me-3"
           width="65"
           height="65"
         />
         <span class="fs-5 me-2">🌌</span>
         <a
           class="text-light text-decoration-none fs-5"
           href="./playlistpage.html?id=Experimental"
           >Landing Page - Experimental</a
         >
       </li>
       <li class="mt-2 d-flex align-items-center">
         <img
           src="https://images.pexels.com/photos/3152174/pexels-photo-3152174.jpeg?auto=compress&cs=tinysrgb&w=600"
           alt="2021 lol"
           class="rounded-circle me-3"
           width="65"
           height="65"
         />
         <span class="fs-5 me-2">🎉</span>
         <a
           class="text-light text-decoration-none fs-5"
           href="./playlistpage.html?id=Meshup"
           >2025 LOL - Mashup</a
         >
       </li>
       <li class="mt-2 d-flex align-items-center">
         <img
           src="https://images.pexels.com/photos/7335183/pexels-photo-7335183.jpeg?auto=compress&cs=tinysrgb&w=600"
           alt="honeys and glass"
           class="rounded-circle me-3"
           width="65"
           height="65"
         />
         <span class="fs-5 me-2">🍯</span>
         <a
           class="text-light text-decoration-none fs-5"
           href="./playlistpage.html?id=Chillwave"
           >Honey & Glass - Chillwave</a
         >
       </li>
     </ul>
   </div>
 </div>`;
};

const creaColonnaDX = function (colonnaDX) {
  colonnaDX.innerHTML = `       <div class="p-4">
  <!-- Header -->
  <div
    class="header d-flex justify-content-between align-items-center flex-column mt-4"
  >
    <h4 class="text-light fs-6">Attività amici</h4>
    <div class="icons">
      <i class="bi bi-person-plus text-light fs-5 me-4"></i>
      <i onclick ="chiudiColonna()" id="icon-x" class="bi bi-x-lg text-light fs-5"></i>
    </div>
  </div>
  <hr class="text-white my-4" />

  <!-- Scrollable Section -->
  <div class="scrollable-section text-white">
    <ul class="list-unstyled text-white">
      <!-- Singolo elemento -->
      <li
        class="list-item rounded-2 d-flex justify-content-between align-items-center p-3"
      >
        <div class="content d-flex flex-column align-items-center">
          <div
            class="avatar-wrapper d-flex justify-content-center align-items-center bg-light"
            style="width: 65px; height: 65px; border-radius: 10px"
          >
            <img
              src="./assets/imgs/imgProfile/user_1.jpg"
              class="img-fluid"
              style="
                border-radius: 10px; 
                width: 100%;
                height: 100%;
                object-fit: cover;
              "
              alt="Charlie Hookham"
            />
          </div>
          <div class="details mt-3 text-center text-white">
            <h6 class="mb-1">Charlie Hookham</h6>
            <p class="mb-0">In Camera · Yumi Zouma</p>
            <p class="mb-0">
              <i class="bi bi-pause-circle"></i> EP III
              <span class="hour text-muted mb-0 ps-4">4 ore</span>
            </p>
          </div>
        </div>
      </li>

      <li
        class="list-item rounded-2 d-flex justify-content-between align-items-center p-3"
      >
        <div class="content d-flex flex-column align-items-center">
          <div
            class="avatar-wrapper d-flex justify-content-center align-items-center bg-light"
            style="width: 65px; height: 65px; border-radius: 10px"
          >
            <img
              src="./assets/imgs/imgProfile/user_2.jpg"
              class="img-fluid"
              style="
                border-radius: 10px;
                width: 100%;
                height: 100%;
                object-fit: cover;
              "
              alt="lightdark02"
            />
          </div>
          <div class="details mt-3 text-center text-white">
            <h6 class="mb-1">lightdark02</h6>
            <p class="mb-0">Aimed to kill · Jade LeMac</p>
            <p class="mb-0">
              <i class="bi bi-pause-circle"></i> Aimed to Kill
              <span class="hour text-muted mb-0 ps-4">8 ore</span>
            </p>
          </div>
        </div>
      </li>

      <li
        class="list-item rounded-2 d-flex justify-content-between align-items-center p-3"
      >
        <div class="content d-flex flex-column align-items-center">
          <div
            class="avatar-wrapper d-flex justify-content-center align-items-center bg-light"
            style="width: 65px; height: 65px; border-radius: 10px"
          >
            <img
              src="./assets/imgs/imgProfile/user_3.jpg"
              class="img-fluid"
              style="
                border-radius: 10px;
                width: 100%;
                height: 100%;
                object-fit: cover;
              "
              alt="Valeria Traverso"
            />
          </div>
          <div class="details mt-3 text-center text-white">
            <h6 class="mb-1">Valeria Traverso</h6>
            <p class="mb-0">New Kings · Sleeping wolf</p>
            <p class="mb-0">
              <i class="bi bi-music-note-beamed"></i> Twist bedass
              mood
              <span class="hour text-muted mb-0 ps-5">4 ore</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
`;
};

const colonnaCentrale = document.getElementById("colonna-centrale");
const colonnaDestra = document.getElementById("colonna-destra");

const listaAmici = function () {
  const amici = document.getElementById("amici");
  colonnaCentrale.classList.remove("col-xl-9");
  colonnaCentrale.classList.add("col-xl-7");
  colonnaDestra.classList.remove("d-none");
  colonnaDestra.classList.add("col-xl-block");
  amici.classList.remove("d-xl-block");
};

const chiudiColonna = function () {
  colonnaCentrale.classList.add("col-xl-9");
  colonnaCentrale.classList.remove("col-xl-7");
  colonnaDestra.classList.add("d-none");
  colonnaDestra.classList.remove("col-xl-block");
  amici.classList.add("d-xl-block");
};

const esci = function () {
  localStorage.removeItem("FlagLogin");
  window.location.href = "./welcome-page.html";
};
