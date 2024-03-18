export function generatePage() {
  document.body.innerHTML = `
  <main class="page__main main">
    <div class="main__hangman hangman">
      <div class="hangman__result">
        <div class="hangman__image">
          <img
            src="../assets/head.png"
            alt="head"
            class="hangman__part"
            id="head" />
          <img
            src="../assets/body.png"
            alt="body"
            class="hangman__part"
            id="body" />
          <img
            src="../assets/left.png"
            alt="left arm"
            class="hangman__part"
            id="left-arm" />
          <img
            src="../assets/right.png"
            alt="right arm"
            class="hangman__part"
            id="right-arm" />
          <img
            src="../assets/left.png"
            alt="left leg"
            class="hangman__part"
            id="left-leg" />
          <img
            src="../assets/right.png"
            alt="right leg"
            class="hangman__part"
            id="right-leg" />
        </div>
      </div>
      <h1 class="hangman__title">Hangman game</h1>
    </div>
    <div class="main__interface interface">
      <div class="interface__word" id="word"></div>
      <p class="interface__hint">Hint: <span id="hint-placeholder"></span></p>
      <p class="interface__guesses">
        Incorrect guesses:
        <span class="interface__count">
          <span id="guesses-placeholder">0</span> / 6
        </span>
      </p>
      <div class="interface__keyboard keyboard">
        <button class="keyboard__button button">a</button>
        <button class="keyboard__button button">b</button>
        <button class="keyboard__button button">c</button>
        <button class="keyboard__button button">d</button>
        <button class="keyboard__button button">e</button>
        <button class="keyboard__button button">f</button>
        <button class="keyboard__button button">g</button>
        <button class="keyboard__button button">h</button>
        <button class="keyboard__button button">i</button>
        <button class="keyboard__button button">j</button>
        <button class="keyboard__button button">k</button>
        <button class="keyboard__button button">l</button>
        <button class="keyboard__button button">m</button>
        <button class="keyboard__button button">n</button>
        <button class="keyboard__button button">o</button>
        <button class="keyboard__button button">p</button>
        <button class="keyboard__button button">q</button>
        <button class="keyboard__button button">r</button>
        <button class="keyboard__button button">s</button>
        <button class="keyboard__button button">t</button>
        <button class="keyboard__button button">u</button>
        <button class="keyboard__button button">v</button>
        <button class="keyboard__button button">w</button>
        <button class="keyboard__button button">x</button>
        <button class="keyboard__button button">y</button>
        <button class="keyboard__button button">z</button>
      </div>
    </div>
  </main>
  <div class="main__modal modal modal_hidden" id="modal">
    <div class="modal__backdrop"></div>
    <div class="modal__content">
      <p class="modal__message" id="modal-message-placeholder"></p>
      <p class="modal__word">
        Secret word was:
        <span class="modal__secret-word" id="secret-word-placeholder"></span>
      </p>
      <button class="modal__button button">Play again!</button>
    </div>
  </div>
  `;
  document.body.className = "page";
}