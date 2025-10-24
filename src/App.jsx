// App.jsx
import React, { useState } from "react";
import "./App.css";

const sounds = {
  Musicas: [
     { name: "Musica Sigma Estourado", src: "https://www.myinstants.com/instant/musica-de-sigma-estourado-56275/embed/" },
    { name: "Sede de Ser Campeão", src: "https://www.myinstants.com/instant/sede-de-ser-campeao-66684/embed/" },
    { name: "Davy J", src: "https://www.myinstants.com/instant/davy-j-eu-quero-todos-os-pals-81467/embed/" },
    { name: "Teto Dia Azul", src: "https://www.myinstants.com/instant/teto-dia-azul-estourado-8758/embed/" },
    { name: "Tu-tu-tu-du Max Verstappen", src: "https://www.myinstants.com/instant/tu-tu-tu-du-max-verstappen-18834/embed/" },
    { name: "Aura 100", src: "https://www.myinstants.com/instant/100-aura-78972/embed/" },
    { name: "Aura 12130", src: "https://www.myinstants.com/instant/aura-12130/embed/" },
    { name: "Song Aura", src: "https://www.myinstants.com/instant/song-aura-34116/embed/" },
    { name: "Ai Que Delícia Mickey", src: "https://www.myinstants.com/instant/ai-que-delicia-mickey-78918/embed/" },
    { name: "Bem-te-vi Eletrônica", src: "https://www.myinstants.com/instant/bem-te-vi-eletronica-72731/embed/" },
    { name: "Tiomnaia Noch", src: "https://www.myinstants.com/instant/tiomnaia-noch-62853/embed/" },
    { name: "Mao Zedong Propaganda Music", src: "https://www.myinstants.com/instant/mao-zedong-propaganda-music-red-sun-in-the-sky-54449/embed/" },
    { name: "4092 Mango Phonk", src: "https://www.myinstants.com/instant/4092-mango-phonk-39459/embed/" },
    { name: "Tik Tok India", src: "https://www.myinstants.com/instant/tik-tok-india-5164/embed/" },
    { name: "Nyan Cat", src: "https://www.myinstants.com/instant/nyan-cat/embed/" },
    { name: "Touch My Tralala", src: "https://www.myinstants.com/instant/touch-my-tralala-32121/embed/" },
    { name: "Popular Vibe", src: "https://www.myinstants.com/instant/popular-vibe-18708/embed/" },
    { name: "Song", src: "https://www.myinstants.com/instant/song/embed/" },
    { name: "Popular The Weekend", src: "https://www.myinstants.com/instant/popular-the-weekend-56170/embed/" },
    { name: "We The Best Music", src: "https://www.myinstants.com/instant/we-the-best-music-55171/embed/" },
    { name: "Stardust Music Sounds Better With You", src: "https://www.myinstants.com/instant/stardust-music-sounds-better-with-you-5444/embed/" },
    { name: "Channel Intro Music That Sounds Good", src: "https://www.myinstants.com/instant/channel-intro-music-that-sounds-good-84118/embed/" },
    { name: "Outro Song", src: "https://www.myinstants.com/instant/outro-song-77850/embed/" },
    { name: "Goofy Ahh Song", src: "https://www.myinstants.com/instant/goofy-ahh-song-91208/embed/" },
    { name: "This Is A 3 Second Song", src: "https://www.myinstants.com/instant/this-is-a-3-second-song-22034/embed/" },
    { name: "Music", src: "https://www.myinstants.com/instant/music/embed/" },
    { name: "Elevator Music Background", src: "https://www.myinstants.com/instant/elevator-music-background-5865/embed/" },
    { name: "Happy Happy Happy Song", src: "https://www.myinstants.com/instant/happy-happy-happy-song-980/embed/" },
    { name: "Epic Song", src: "https://www.myinstants.com/instant/epic-song/embed/" },
    { name: "Sound Board Song #1", src: "https://www.myinstants.com/instant/sound-board-song-1-2598/embed/" },
    { name: "Dramatic Music", src: "https://www.myinstants.com/instant/dramatic-music-13919/embed/" },
    { name: "Rat Dance Music", src: "https://www.myinstants.com/instant/rat-dance-music-93451/embed/" },
    { name: "Doors Elevator Music", src: "https://www.myinstants.com/instant/doors-elevator-music-49654/embed/" },
    { name: "Why Do I Hear Boss Music", src: "https://www.myinstants.com/instant/why-do-i-hear-boss-music-87609/embed/" },
    { name: "Spiderman Meme Song", src: "https://www.myinstants.com/instant/spiderman-meme-song-37638/embed/" },
    { name: "Sad Meow Song", src: "https://www.myinstants.com/instant/sad-meow-song-88771/embed/" },
    { name: "Windows XP Error Music", src: "https://www.myinstants.com/instant/windows-xp-error-music/embed/" },
    { name: "Creepy Tune Music Sound", src: "https://www.myinstants.com/instant/creepy-tune-music-sound-7225/embed/" },
    { name: "Ao Oni Chase Music", src: "https://www.myinstants.com/instant/ao-oni-chase-music-11325/embed/" },
    { name: "Conversation Music", src: "https://www.myinstants.com/instant/conversation-music-94366/embed/" },
    { name: "Squid Game Music Tone", src: "https://www.myinstants.com/instant/squid-game-music-tone-63477/embed/" },
    { name: "Gadkii Ia", src: "https://www.myinstants.com/instant/gadkii-ia-73558/embed/" },
  ],
  Memes: [
    { name: "Vine Boom", src: "https://www.myinstants.com/instant/vine-boom-sound-70972/embed/" },
    { name: "Among Us Role Reveal", src: "https://www.myinstants.com/instant/among-us-role-reveal-sound-34956/embed/" },
    { name: "Foi Quando Gyro Entendeu", src: "https://www.myinstants.com/instant/foi-quando-gyro-finalmente-entendeu-41342/embed/" },
    { name: "E Pra Apanhar e Ficar Calado", src: "https://www.myinstants.com/instant/e-pra-apanhar-e-ficar-calado-71549/embed/" },
    { name: "He He He Ha", src: "https://www.myinstants.com/instant/he-he-he-ha-clash-royale-deep-fried-59551/embed/" },
    { name: "Aqui é Papo de Mendigo", src: "https://www.myinstants.com/instant/aqui-e-papo-de-mendigo-14380/embed/" },
    { name: "Dom Dom Tava Aqui no Baile", src: "https://www.myinstants.com/instant/dom-dom-tava-aqui-no-baile-68119/embed/" },
    { name: "Ain Meu Czinho", src: "https://www.myinstants.com/instant/ain-meu-czinho-5223/embed/" },
    { name: "Marretada do Galego", src: "https://www.myinstants.com/instant/marretada-do-galego-30451/embed/" },
    { name: "Ai Meu C", src: "https://www.myinstants.com/instant/ai-meu-c-25533/embed/" },
    { name: "Meme", src: "https://www.myinstants.com/instant/meme/embed/" },
    { name: "Catchy As Meme", src: "https://www.myinstants.com/instant/catchy-as-meme-69038/embed/" },
    { name: "Okay Meme", src: "https://www.myinstants.com/instant/okay-meme-4840/embed/" },
    { name: "Wut The Hell Goofy Ahh Sound Meme", src: "https://www.myinstants.com/instant/wut-the-hell-goofy-ahh-sound-meme-35663/embed/" },
    { name: "What Bottom Text Meme Sanctuary Guardian S", src: "https://www.myinstants.com/instant/what-bottom-text-meme-sanctuary-guardian-s-24591/embed/" },
    { name: "Discord Call Bass Boosted Low Quality Meme", src: "https://www.myinstants.com/instant/discord-call-bass-boosted-low-quality-meme-33889/embed/" },
    { name: "Brain Fart Long Meme", src: "https://www.myinstants.com/instant/brain-fart-long-meme-53874/embed/" },
    { name: "Mortis Sweep Meme", src: "https://www.myinstants.com/instant/mortis-sweep-meme-69830/embed/" },
    { name: "Arabic Singing Meme", src: "https://www.myinstants.com/instant/arabic-singing-meme-3805/embed/" },
    { name: "Driving In My Car Deltarune Meme", src: "https://www.myinstants.com/instant/driving-in-my-car-deltarune-meme-42828/embed/" },
    { name: "Chat Music Meme Get Rotated Idiot Theme", src: "https://www.myinstants.com/instant/chat-music-meme-get-rotated-idiot-theme-47071/embed/" },
    { name: "Sebastian Kurz Ich Will Nicht Mehr", src: "https://www.myinstants.com/instant/sebastian-kurz-ich-will-nicht-mehr-13862/embed/" },
    { name: "Pokemon Exclamation Mark Sound Effect", src: "https://www.myinstants.com/instant/pokemon-exclamation-mark-sound-effect-85560/embed/" },
    { name: "Follower Sound Cheer Predator", src: "https://www.myinstants.com/instant/follower-sound-cheer-predator-74338/embed/" },
    { name: "Horror Sound", src: "https://www.myinstants.com/instant/horror-sound/embed/" },
    { name: "Cartoon Jump", src: "https://www.myinstants.com/instant/cartoon-jump-80656/embed/" },
    { name: "Gong Sound Effect", src: "https://www.myinstants.com/instant/gong-sound-effect-21524/embed/" },
    { name: "Cartoon Boinging Sound Effect", src: "https://www.myinstants.com/instant/cartoon-boinging-sound-effect-64768/embed/" },
    { name: "Fahhh Sound Effect", src: "https://www.myinstants.com/instant/fahhh-sound-effect-36222/embed/" },
    { name: "Fart Sound Effect Epicfart", src: "https://www.myinstants.com/instant/fart-sound-effect-epicfart-10053/embed/" },
    { name: "Arab Funny", src: "https://www.myinstants.com/instant/arab-funny-77217/embed/" },
    { name: "Warna", src: "https://www.myinstants.com/instant/warna-75611/embed/" },
    { name: "Funny Warning", src: "https://www.myinstants.com/instant/funny-warning-63398/embed/" },
    { name: "Super Super Duper Funny Sound", src: "https://www.myinstants.com/instant/super-super-duper-funny-sound-86436/embed/" },
    { name: "How Funny", src: "https://www.myinstants.com/instant/how-funny-88076/embed/" },
    { name: "Nolezy Funny Groan", src: "https://www.myinstants.com/instant/nolezy-funny-groan-90322/embed/" },
    { name: "Wow Really Funny", src: "https://www.myinstants.com/instant/wow-really-funny-53166/embed/" },
    { name: "Beijo Mãe", src: "https://www.myinstants.com/instant/beijo-mae-57023/embed/" },
    { name: "Vine Bomb Sound Effect Viral", src: "https://www.myinstants.com/instant/vine-bomb-sound-effect-viral-76098/embed/" },
    { name: "Momo Viral", src: "https://www.myinstants.com/instant/momo-viral-50134/embed/" },
    { name: "Esto Va Aser Viral Y Tendencia", src: "https://www.myinstants.com/instant/esto-va-aser-viral-y-tendencia-64205/embed/" },
    { name: "Youre Going To Brazil", src: "https://www.myinstants.com/instant/youre-going-to-brazil-72549/embed/" },
    { name: "Bawer Brazil", src: "https://www.myinstants.com/instant/bawer-brazil-90828/embed/" },
    { name: "Laranja Do Chat Do Exo Brazil", src: "https://www.myinstants.com/instant/laranja-do-chat-do-exo-brazil-64939/embed/" },
    { name: "Brinca Brinca Phonk", src: "https://www.myinstants.com/instant/brinca-brinca-phonk-99357/embed/" },
    { name: "Kevin Phonk Drop", src: "https://www.myinstants.com/instant/kevin-phonk-drop-22205/embed/" },
    { name: "67 Kid Meme Phonk", src: "https://www.myinstants.com/instant/67-kid-meme-phonk-78323/embed/" },
    { name: "Phonk Metro Man", src: "https://www.myinstants.com/instant/phonk-metro-man-68256/embed/" },
    { name: "Salesman Squid Game Edit Audio Blah Phonk", src: "https://www.myinstants.com/instant/salesman-squid-game-edit-audio-blah-phonk-13283/embed/" },
    { name: "Anime Weird", src: "https://www.myinstants.com/instant/anime-weird-47903/embed/" },
    { name: "Anime Discussion Starter", src: "https://www.myinstants.com/instant/anime-discussion-starter/embed/" },
    { name: "Anime Vanguards Is Free Dawg", src: "https://www.myinstants.com/instant/anime-vanguards-is-free-dawg-60478/embed/" },
    { name: "Orange Orange", src: "https://www.myinstants.com/instant/orange-orange-94764/embed/" },
    { name: "Ridiculo Ridiculo Guru Guru", src: "https://www.myinstants.com/instant/ridiculo-ridiculo-guru-guru-8439/embed/" },
    { name: "Bomb", src: "https://www.myinstants.com/instant/bomb/embed/" },
    { name: "Game Grumps Assetry", src: "https://www.myinstants.com/instant/game-grumps-assetry-25935/embed/" },
    { name: "Mario Game Over Bruh", src: "https://www.myinstants.com/instant/mario-game-over-bruh-83678/embed/" },
    { name: "Game Start 1", src: "https://www.myinstants.com/instant/game-start-1-37080/embed/" },
    { name: "Game Grumps Cactus Juice", src: "https://www.myinstants.com/instant/game-grumps-cactus-juice/embed/" },
    { name: "Pummel Party Mini Game Finish Ring", src: "https://www.myinstants.com/instant/pummel-party-mini-game-finish-ring-98771/embed/" },
    { name: "Squid Game Player Eliminated", src: "https://www.myinstants.com/instant/squid-game-player-eliminated-21772/embed/" },
    { name: "Game Timer", src: "https://www.myinstants.com/instant/game-timer-28555/embed/" },
    { name: "GF Lets Play A Game", src: "https://www.myinstants.com/instant/gf-lets-play-a-game-86705/embed/" },
    { name: "Disgracado Rica Games", src: "https://www.myinstants.com/instant/disgracado-rica-games-70494/embed/" },
    { name: "Movie Intro", src: "https://www.myinstants.com/instant/movie-intro-21133/embed/" },
    { name: "Sting Whistle Movie", src: "https://www.myinstants.com/instant/sting-whistle-movie-22021/embed/" },
    { name: "My Reaction To Slenderman Movie", src: "https://www.myinstants.com/instant/my-reaction-to-slenderman-movie-64874/embed/" },
    { name: "Leaked Lego Movie 3 Trailer", src: "https://www.myinstants.com/instant/leaked-lego-movie-3-trailer-4924/embed/" },
    { name: "Troll", src: "https://www.myinstants.com/instant/troll/embed/" },
    { name: "Daisy Troll", src: "https://www.myinstants.com/instant/daisy-troll-32842/embed/" },
    { name: "Meme Troll", src: "https://www.myinstants.com/instant/meme-troll-38855/embed/" },
    { name: "Oblitus Casa Troll Jumpscare Sound", src: "https://www.myinstants.com/instant/oblitus-casa-troll-jumpscare-sound-19812/embed/" },
    { name: "Strawberry Elephant Spawn Troll Steal A Brainrot", src: "https://www.myinstants.com/instant/strawberry-elephant-spawn-troll-steal-a-brainrot-97854/embed/" },
    { name: "Brian Kibler Laugh", src: "https://www.myinstants.com/instant/brian-kibler-laugh/embed/" },
    { name: "Noahs Laugh", src: "https://www.myinstants.com/instant/noahs-laugh/embed/" },
    { name: "Tyler Laugh", src: "https://www.myinstants.com/instant/tyler-laugh-8268/embed/" },
    { name: "Hahaha Carti Laugh", src: "https://www.myinstants.com/instant/hahaha-carti-laugh-35592/embed/" },
    { name: "Sham Laugh", src: "https://www.myinstants.com/instant/sham-laugh-74870/embed/" },
    { name: "Weird Dolphin Ahh Laugh", src: "https://www.myinstants.com/instant/weird-dolphin-ahh-laugh-69155/embed/" },
    { name: "Talking Ginger Laughing", src: "https://www.myinstants.com/instant/talking-ginger-laughing-27552/embed/" },
    { name: "Laugh It Up Distorted", src: "https://www.myinstants.com/instant/laugh-it-up-distorted-77990/embed/" },
    { name: "Omega Rugal Laugh And Scream", src: "https://www.myinstants.com/instant/omega-rugal-laugh-and-scream-76826/embed/" },
    { name: "Tai Lung Como Não Posso", src: "https://www.myinstants.com/instant/tai-lung-como-nao-posso-22618/embed/" },
    { name: "Anime Ahh", src: "https://www.myinstants.com/instant/anime-ahh-73606/embed/" },
    { name: "Gopgopgop", src: "https://www.myinstants.com/instant/gopgopgop-41469/embed/" },
    { name: "Uepa Ratinho", src: "https://www.myinstants.com/instant/uepa-ratinho-539/embed/" },
    { name: "What The Hell Meme Sound Effect", src: "https://www.myinstants.com/instant/what-the-hell-meme-sound-effect-95969/embed/" },
  ],
  "Efeitos / Outros": [
     { name: "Alarme Muito Alto", src: "https://www.myinstants.com/instant/alarme-muito-alto-80877/embed/" },
    { name: "Hub Intro Sound", src: "https://www.myinstants.com/instant/hub-intro-sound-55662/embed/" },
    { name: "Briga", src: "https://www.myinstants.com/instant/briga-34918/embed/" },
    { name: "Pop SFX", src: "https://www.myinstants.com/instant/pop-sfx-75405/embed/" },
    { name: "Popular Riser Metallic Sound Effect", src: "https://www.myinstants.com/instant/popular-riser-metallic-sound-effect-41559/embed/" },
    { name: "Ding Sound Effect", src: "https://www.myinstants.com/instant/ding-sound-effect/embed/" },
    { name: "Correct Sound Effect", src: "https://www.myinstants.com/instant/correct-sound-effect-93659/embed/" },
    { name: "Insert", src: "https://www.myinstants.com/instant/insert-21515/embed/" },
    { name: "Core Sound Effect", src: "https://www.myinstants.com/instant/core-sound-effect-57998/embed/" },
    { name: "ЪЭХ", src: "https://www.myinstants.com/instant/ekh-53738/embed/" },
    { name: "Anime Wow", src: "https://www.myinstants.com/instant/anime-wow/embed/" },
    { name: "Click Here!", src: "https://www.myinstants.com/instant/click-here/embed/" },
    { name: "Funny Sounds", src: "https://www.myinstants.com/instant/funny-sounds/embed/" },
    { name: "Bruh", src: "https://www.myinstants.com/instant/bruh/embed/" },
    { name: "RUN Vine Effect Sound", src: "https://www.myinstants.com/instant/run-vine-effect-sound-63565/embed/" },
    { name: "Wetin Be This Sound Comedy By Kenny", src: "https://www.myinstants.com/instant/wetin-be-this-sound-comedy-by-kenny-90115/embed/" },
    { name: "Ki Kore", src: "https://www.myinstants.com/instant/ki-kore-56705/embed/" },
    { name: "Oh No No No Tik Tok Song Sound Effect", src: "https://www.myinstants.com/instant/oh-no-no-no-tik-tok-song-sound-effect-63466/embed/" },
    { name: "Funny Cool Sound Effect Xd.mp4", src: "https://www.myinstants.com/instant/funny-cool-sound-effect-xd-mp4-59803/embed/" },
    { name: "Yaaaaaaay", src: "https://www.myinstants.com/instant/yaaaaaaaay/embed/" },
    { name: "Netflix Intro", src: "https://www.myinstants.com/instant/netflix-intro-79459/embed/" },
    { name: "Random Button", src: "https://www.myinstants.com/instant/random-button-15804/embed/" },
    { name: "Old Spice Whistle", src: "https://www.myinstants.com/instant/old-spice-whistle-matthq/embed/" },
    { name: "Allah Akbar", src: "https://www.myinstants.com/instant/allah-akbar-36328/embed/" },
  ],
};

function App() {
  const [activeCategory, setActiveCategory] = useState("Musicas");
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);
  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setMenuAberto(false);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Soundboard</h1>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuAberto ? "open" : ""}`}></div>
          <div className={`bar ${menuAberto ? "open" : ""}`}></div>
          <div className={`bar ${menuAberto ? "open" : ""}`}></div>
        </div>
      </header>

      {menuAberto && (
        <nav className="menu">
          {Object.keys(sounds).map((cat) => (
            <button
              key={cat}
              className={`menu-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>
      )}

      <div className="grid">
        {sounds[activeCategory].map((sound, index) => (
          <div key={index} className="iframe-container">
            <iframe
              src={sound.src}
              frameBorder="0"
              scrolling="no"
              title={sound.name}
              width="110"
              height="200"
            ></iframe>
            <p>{sound.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
