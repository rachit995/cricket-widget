const template = document.createElement('template')
template.innerHTML = `
  <style>
    #score-card-wrapper {
      position: absolute;
      perspective: 1500px;
      top: 100px;
      left: 100px;
      cursor: move;
    }

    .score-card-box {
      position: relative;
      transform-style: preserve-3d;
      animation-name: rotate-score-card;
      animation-duration: 20s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    @keyframes rotate-score-card {
      0% {
        transform: rotate3d(0, 0, 0, 0);
      }
      15% {
        transform: rotate3d(0, 0, 0, 0);
      }
      30% {
        transform: rotate3d(0, 1, 0, 120deg);
      }
      50% {
        transform: rotate3d(0, 1, 0, 120deg);
      }
      65% {
        transform: rotate3d(0, 1, 0, 240deg);
      }
      85% {
        transform: rotate3d(0, 1, 0, 240deg);
      }
      100% {
        transform: rotate3d(0, 1, 0, 360deg);
      }
    }

    .score-card-box-faces {
      position: absolute;
      width: 100px;
      height: 100px;
      overflow: hidden;
    }

    .score-card-information {
      padding: 8px;
      font-family: sans-serif;
      font-size: 12px;
      color: white;
    }

    .cricket-icon {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 45%;
    }

    #score-card-box-front {
      transform: translateX(-50px) translateY(-50px) translateZ(28.8675134595px);
      background: rgb(38, 102, 193);
      background: linear-gradient(
        135deg,
        rgba(38, 102, 193, 1) 0%,
        rgba(25, 57, 138, 1) 100%
      );
    }

    #score-card-box-right {
      transform: translateY(-50px) translateX(-50px) rotateY(120deg)
        translateZ(28.8675134595px);
      background: rgb(38, 102, 193);
      background: radial-gradient(
        circle,
        rgba(38, 102, 193, 1) 0%,
        rgba(25, 57, 138, 1) 100%
      );
    }

    #score-card-box-left {
      transform: translateY(-50px) translateX(-50px) rotateY(240deg)
        translateZ(28.8675134595px);
      background: rgb(177, 63, 63);
      background: linear-gradient(
        135deg,
        rgba(177, 63, 63, 1) 0%,
        rgba(129, 12, 12, 1) 100%
      );
    }

    .score-card-box {
      transform: rotateX(90deg) rotateY(90deg);
    }

    .action-btn {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      border: none;
      padding: 6px 8px;
      cursor: pointer;
      position: absolute;
      right: -105px;
    }

    .zoom-button {
      top: 0px;
    }

    .hide-button {
      top: -45px;
    }

    .action-btn svg {
      width: 20px;
      height: 20px;
    }

    .player-image {
      width: 100px;
      height: 100px;
      object-fit: contain;
    }
  </style>
  <div id="score-card-wrapper">
    <div class="score-card-box">
      <div id="score-card-box-front" class="score-card-box-faces">
        <div class="score-card-information">
          <strong>
            Punjab Kings vs Delhi Capitals
          </strong>
          <br />
          <strong>
            DC:
          </strong>
          166/6 (20/20)
          <img src="" class="cricket-icon" alt="cricket icon" />
        </div>
      </div>
      <div id="score-card-box-right" class="score-card-box-faces">
        <img src="" class="player-image" alt="player photo" />
      </div>
      <div id="score-card-box-left" class="score-card-box-faces">
        <div class="score-card-information">
          <strong>
            Partnership:
          </strong>
          18(13)
          <br />
          <strong>
            Last 5 overs:
          </strong>
          39 runs, 4 wkts
          <img src="" class="cricket-icon" alt="cricket icon" />
        </div>
      </div>
    </div>
    <button class="hide-button action-btn" id="visibility-button" title="Hide Widget">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    </button>
    <button class="zoom-button action-btn" id="zoom-button" title="Zoom Widget">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    </button>
  </div>
`;

var element = document.createElement(`score-card-${Math.random().toString(36).slice(2)}`);
var element_shadow_root = element.attachShadow({ mode: 'open' });
element.shadowRoot.appendChild(template.content.cloneNode(true))
var visibility = true;
var zoom = true;

function toggleVisibility() {
  visibility = !visibility;
  const box = element.shadowRoot.querySelector('.score-card-box')
  const toggleBtn = element.shadowRoot.querySelector('#visibility-button')
  if (visibility) {
    box.style.display = 'block';
    toggleBtn.title = 'Hide Widget'
    toggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
      `;
  } else {
    box.style.display = 'none';
    toggleBtn.title = 'Show Widget'
    toggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
      `;
  }
}

function toggleZoom() {
  zoom = !zoom;
  const info = element.shadowRoot.querySelector('#score-card-wrapper')
  const toggleBtn = element.shadowRoot.querySelector('#zoom-button')
  if (zoom) {
    info.style.transform = 'scale(1)';
    toggleBtn.title = 'Zoom in Widget'
    toggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
      `;
  } else {
    info.style.transform = 'scale(1.5)';
    toggleBtn.title = 'Zoom out Widget'
    toggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
      </svg>
      `;
  }
}


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(element.shadowRoot.querySelector('#score-card-wrapper'));

element.shadowRoot.querySelector('#visibility-button').addEventListener('click', () => toggleVisibility())
element.shadowRoot.querySelector('#zoom-button').addEventListener('click', () => toggleZoom())
element.shadowRoot.querySelector(".player-image").src = chrome.extension.getURL("images/1.png")
for (var e of element.shadowRoot.querySelectorAll(".cricket-icon")) {
  e.src = chrome.extension.getURL("images/cricket-icon.svg")
}

document.body.appendChild(element);




