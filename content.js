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

      100% {
        transform: rotate3d(0, 1, 0, 360deg);
        ;
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
      transform: translateX(-50px) translateY(-50px) translateZ(50px);
      background: rgb(27, 76, 146);
      background-image: linear-gradient(43deg, rgba(27, 76, 146, 1) 0%, rgba(25, 57, 138, 1) 100%);
    }

    #score-card-box-back {
      transform: translateX(-50px) translateY(-50px) translateZ(-50px) rotateY(180deg);
      background: rgb(27, 76, 146);
      background-image: linear-gradient(43deg, rgba(27, 76, 146, 1) 0%, rgba(25, 57, 138, 1) 100%);
    }

    #score-card-box-right {
      transform: translateY(-50px) rotateY(90deg);
      background: rgb(146, 27, 27);
      background-image: linear-gradient(45deg, rgba(147, 57, 57, 1) 0%, rgba(129, 12, 12, 1) 100%);
    }

    #score-card-box-left {
      transform: translateY(-50px) translateX(-100px) rotateY(270deg);
      background: rgb(146, 27, 27);
      background-image: linear-gradient(45deg, rgba(147, 57, 57, 1) 0%, rgba(129, 12, 12, 1) 100%);
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
    }

    .zoom-button {
      top: 0px;
      right: -125px;
    }

    .hide-button {
      top: -45px;
      right: -125px;
    }

    .action-btn svg {
      width: 20px;
      height: 20px;
    }
  </style>
  <div id="score-card-wrapper">
    <div class="score-card-box">
      <div id="score-card-box-front" class="score-card-box-faces">
        <div class="score-card-information">
          <strong>
            Punjab Kings vs Delhi Capitals
          </strong>
          <?xml version="1.0" encoding="utf-8"?><svg class="cricket-icon" fill="rgba(255, 255, 255, 0.4)" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 119.79 122.88" style="enable-background:new 0 0 119.79 122.88" xml:space="preserve">
            <g>
              <path d="M72.38,34.18c-1.47-0.79-2.97-2.03-4.59-3.66c-0.32-0.32-0.75-0.49-1.18-0.49c-0.43,0-0.86,0.16-1.19,0.48l0,0L6.68,89.26 c-4.24,4.24-3.77,10.15-0.96,15.38c1.12,2.09,2.61,4.07,4.32,5.8c1.71,1.73,3.64,3.22,5.67,4.33c4.79,2.63,10.06,3.08,13.75-0.62 l59.79-59.79c0.32-0.32,0.49-0.75,0.49-1.18c0-0.43-0.16-0.86-0.48-1.18h-0.01c-1.71-1.71-3-3.24-3.82-4.77 C79.58,45.99,73.62,40.27,72.38,34.18L72.38,34.18z M76.92,90.59c-0.01,0.07-0.04,0.14-0.07,0.21l-0.41,0.9 c-0.22,0.49-0.8,0.71-1.3,0.49c-0.27-0.12-0.46-0.35-0.54-0.62c-1.41,0.74-2.7,1.68-3.81,2.8c-2.81,2.81-4.55,6.7-4.55,11 c0,4.3,1.74,8.18,4.55,11c0.12,0.12,0.24,0.24,0.37,0.35c0.07-0.04,0.15-0.07,0.23-0.09c0.53-0.13,1.06,0.19,1.19,0.72 c0.03,0.14,0.08,0.28,0.13,0.42c0.04,0.11,0.09,0.22,0.13,0.33c0.52,0.37,1.06,0.7,1.63,1c-1.71-4.32-2.21-10.22-1.35-15.85 c0.76-4.95,2.57-9.73,5.54-13.11C78.08,90.25,77.49,90.4,76.92,90.59L76.92,90.59z M69.28,111.7c0-0.54,0.44-0.98,0.98-0.98 c0.54,0,0.98,0.44,0.98,0.98c0,0.26,0.02,0.56,0.06,0.85c0.04,0.29,0.09,0.59,0.16,0.83c0.14,0.52-0.18,1.06-0.7,1.2 c-0.52,0.14-1.06-0.18-1.2-0.7c-0.08-0.31-0.15-0.7-0.2-1.08C69.31,112.4,69.28,112.01,69.28,111.7L69.28,111.7z M68.93,105.82 c0.05-0.54,0.52-0.94,1.06-0.89c0.54,0.05,0.94,0.52,0.89,1.06c-0.01,0.12,0,0.42,0.02,0.77c0.02,0.41,0.07,0.85,0.11,1.16 c0.07,0.54-0.3,1.03-0.84,1.11c-0.54,0.07-1.03-0.3-1.11-0.84c-0.05-0.35-0.1-0.86-0.13-1.31 C68.92,106.46,68.91,106.06,68.93,105.82L68.93,105.82z M69.93,99.63c0.15-0.52,0.69-0.82,1.21-0.68c0.52,0.15,0.82,0.69,0.68,1.21 c-0.04,0.14-0.1,0.42-0.16,0.74l-0.01,0.03c-0.07,0.38-0.14,0.81-0.19,1.11c-0.08,0.54-0.58,0.91-1.11,0.83 c-0.54-0.08-0.91-0.58-0.83-1.11c0.04-0.29,0.12-0.75,0.21-1.19l0.01-0.03C69.81,100.16,69.88,99.82,69.93,99.63L69.93,99.63z M72.14,94.13c0.22-0.49,0.8-0.71,1.3-0.49c0.49,0.22,0.71,0.8,0.49,1.3l-0.75,1.65c-0.22,0.49-0.8,0.71-1.3,0.49 c-0.49-0.22-0.71-0.8-0.49-1.3L72.14,94.13L72.14,94.13z M79.48,120.74c0.08-0.4,0.4-0.73,0.82-0.79c0.54-0.08,1.04,0.29,1.11,0.83 c0.01,0.04,0.01,0.08,0.02,0.13c0.12,0,0.24,0,0.35,0c4.29,0,8.18-1.74,11-4.55c2.81-2.81,4.55-6.7,4.55-11 c0-4.29-1.74-8.18-4.55-11c-2-2-4.53-3.45-7.37-4.13l-0.14,0.24c-0.27,0.47-0.87,0.63-1.34,0.36c-0.34-0.2-0.52-0.57-0.49-0.94 c-0.54-0.06-1.09-0.09-1.65-0.09c-3.7,2.99-5.9,8.22-6.74,13.72c-0.95,6.22-0.18,12.71,2.11,16.69 C77.93,120.45,78.7,120.63,79.48,120.74L79.48,120.74z M77.02,115.91c-0.08-0.54,0.29-1.04,0.83-1.11s1.04,0.29,1.11,0.83 c0.03,0.22,0.09,0.45,0.16,0.68c0.08,0.26,0.19,0.54,0.31,0.8c0.23,0.49,0.01,1.07-0.48,1.3c-0.49,0.23-1.07,0.01-1.3-0.48 c-0.14-0.31-0.28-0.66-0.4-1.03C77.15,116.56,77.06,116.22,77.02,115.91L77.02,115.91z M76.22,109.7c0.05-0.54,0.53-0.93,1.07-0.88 c0.54,0.05,0.93,0.53,0.88,1.07c-0.02,0.24-0.03,0.55-0.02,0.86c0.01,0.3,0.04,0.6,0.08,0.84c0.09,0.53-0.28,1.04-0.81,1.12 c-0.53,0.09-1.04-0.28-1.12-0.81c-0.05-0.32-0.09-0.71-0.1-1.1C76.18,110.41,76.18,110.02,76.22,109.7L76.22,109.7z M76.43,103.81 c0.1-0.53,0.62-0.88,1.15-0.78c0.53,0.1,0.88,0.62,0.78,1.15c-0.03,0.13-0.04,0.43-0.06,0.76c-0.01,0.41-0.02,0.86,0,1.17 c0.02,0.54-0.4,1-0.94,1.02s-1-0.4-1.02-0.94c-0.01-0.35-0.01-0.86,0-1.31C76.36,104.44,76.39,104.03,76.43,103.81L76.43,103.81z M78.03,97.75c0.2-0.5,0.77-0.75,1.27-0.56c0.5,0.2,0.75,0.77,0.56,1.27c-0.05,0.14-0.14,0.41-0.23,0.72 c-0.11,0.39-0.23,0.83-0.31,1.12c-0.13,0.53-0.66,0.85-1.19,0.72c-0.53-0.13-0.85-0.66-0.72-1.19c0.08-0.31,0.2-0.78,0.33-1.2 C77.85,98.26,77.96,97.93,78.03,97.75L78.03,97.75z M80.76,92.48c0.27-0.47,0.87-0.63,1.34-0.36c0.47,0.27,0.63,0.87,0.36,1.34 l-0.9,1.57c-0.27,0.47-0.87,0.63-1.34,0.36c-0.47-0.27-0.63-0.87-0.36-1.34L80.76,92.48L80.76,92.48z M76.31,122 c-0.06-0.01-0.12-0.03-0.17-0.06c-2.56-0.87-4.86-2.32-6.73-4.2c-3.17-3.17-5.13-7.55-5.13-12.39c0-4.84,1.96-9.22,5.13-12.39 c3.17-3.17,7.55-5.13,12.39-5.13c4.84,0,9.22,1.96,12.39,5.13c3.17,3.17,5.13,7.55,5.13,12.39s-1.96,9.22-5.13,12.39 c-3.17,3.17-7.55,5.13-12.39,5.13C79.88,122.88,78.04,122.57,76.31,122L76.31,122z M64.1,66.26c0.69-0.69,1.81-0.69,2.49,0 s0.69,1.81,0,2.49l-35.23,35.23c-0.69,0.69-1.81,0.69-2.49,0c-0.69-0.69-0.69-1.81,0-2.49L64.1,66.26L64.1,66.26z M110.16,0.68 l8.94,8.94c0.46,0.46,0.68,1.06,0.68,1.65c0,0.6-0.23,1.2-0.68,1.65l-8.63,8.63l-0.01,0c-0.46,0.46-1.05,0.68-1.64,0.68 c-0.37,0-0.74-0.09-1.08-0.27c-1.54,1.51-3.29,3.18-5.08,4.88c-4.61,4.39-9.48,9.03-13,13.23c-1.42,1.7-1.9,3.04-1.59,4.3 c0.35,1.46,1.65,3.08,3.68,5.11l0,0c1.01,1.02,1.52,2.35,1.52,3.67c0,1.33-0.51,2.67-1.52,3.68l-59.79,59.79 c-5,5.01-11.84,4.56-17.94,1.21c-2.32-1.27-4.53-2.97-6.48-4.95c-1.95-1.97-3.64-4.23-4.92-6.6c-3.51-6.53-3.98-14,1.57-19.55 l58.73-58.73l0.01,0c1.01-1.01,2.34-1.52,3.67-1.52c1.33,0,2.66,0.51,3.68,1.52c1.98,1.98,3.6,3.22,5.07,3.56 c1.29,0.3,2.64-0.15,4.28-1.47c4.13-3.32,9.02-8.47,13.53-13.22c1.64-1.73,3.24-3.41,4.65-4.86c-0.18-0.34-0.26-0.71-0.26-1.08 c0-0.6,0.23-1.2,0.68-1.65l8.63-8.63h0.01c0.46-0.46,1.05-0.68,1.65-0.68C109.11,0,109.71,0.23,110.16,0.68L110.16,0.68z" />
            </g>
          </svg>
        </div>
      </div>
      <div id="score-card-box-right" class="score-card-box-faces">
        <div class="score-card-information">
          <strong>
            Delhi Capitals
          </strong>
          166/6 (20/20)
          <br />
          <strong>
            Run Rate:
          </strong>
          9.45
        </div>
      </div>
      <div id="score-card-box-back" class="score-card-box-faces">
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
        </div>
      </div>
      <div id="score-card-box-left" class="score-card-box-faces">
        <div class="score-card-information">
          <strong>Last Wkt:</strong> Matthew Waite c Croft b Lamb 1(2) - 110/7 in 17.6 ov.
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
var zoom = false;

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

document.body.appendChild(element);
