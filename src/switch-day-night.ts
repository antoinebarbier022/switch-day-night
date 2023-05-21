import { LitElement, PropertyValueMap, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("switch-day-night")
export class MySwitch extends LitElement {
  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  defaultChecked = false;

  @property({ type: Boolean })
  checked?: boolean;

  handleClick(event: Event) {
    event.preventDefault();
    this.checked = !this.checked;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.checked = this.defaultChecked;
  }

  protected firstUpdated(): void {
    if (!this.checked) {
      this.checked = this.defaultChecked;
    }
  }

  protected updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (_changedProperties.has("checked")) {
      this.dispatchEvent(
        new CustomEvent("onChange", {
          detail: {
            checked: this.checked,
          },
        })
      );
    }
  }
  render() {
    return html`<button
      class="switch"
      role="checkbox"
      aria-label="switch"
      aria-checked=${this.checked}
      aria-disabled=${this.disabled}
      ?disabled=${this.disabled}
      @click=${this.handleClick}
    >
      <div class="dot">
        <svg
          class="moon"
          viewBox="0 0 53 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_i_0_1)">
            <circle cx="22.9108" cy="5.57832" r="5.13325" fill="#9DA5B5" />
          </g>
          <g filter="url(#filter1_i_0_1)">
            <circle cx="13.5501" cy="34.2639" r="12.6822" fill="#9DA5B5" />
          </g>
          <g filter="url(#filter2_i_0_1)">
            <circle cx="44.9536" cy="31.8484" r="7.85086" fill="#9DA5B5" />
          </g>
          <defs>
            <filter
              id="filter0_i_0_1"
              x="17.7776"
              y="0.445068"
              width="10.2666"
              height="10.8705"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.603912" />
              <feGaussianBlur stdDeviation="1.20782" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_0_1"
              />
            </filter>
            <filter
              id="filter1_i_0_1"
              x="0.86792"
              y="21.5818"
              width="25.3643"
              height="25.9682"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.603912" />
              <feGaussianBlur stdDeviation="1.20782" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_0_1"
              />
            </filter>
            <filter
              id="filter2_i_0_1"
              x="37.1028"
              y="23.9976"
              width="15.7017"
              height="16.3056"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.603912" />
              <feGaussianBlur stdDeviation="1.20782" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_0_1"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <svg
        class="stars"
        viewBox="0 0 108 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M54.2901 12.5494C53.9389 12.8996 53.5079 13.0873 53.0024 13.1076C53.5079 13.133 53.9336 13.3157 54.2901 13.6659C54.6413 14.016 54.8168 14.4322 54.8168 14.9194C54.8168 14.4322 54.9924 14.016 55.3436 13.6659C55.6948 13.3157 56.1204 13.1279 56.6259 13.1076C56.1204 13.0873 55.6948 12.8996 55.3436 12.5494C54.9924 12.1992 54.8168 11.7831 54.8168 11.2959C54.8168 11.7831 54.6413 12.1992 54.2901 12.5494Z"
          fill="white"
        />
        <path
          d="M60.8584 42.8357C60.6243 43.0691 60.337 43.1943 60 43.2078C60.337 43.2247 60.6208 43.3465 60.8584 43.58C61.0925 43.8134 61.2096 44.0909 61.2096 44.4156C61.2096 44.0909 61.3267 43.8134 61.5608 43.58C61.7949 43.3465 62.0787 43.2214 62.4156 43.2078C62.0787 43.1943 61.7949 43.0691 61.5608 42.8357C61.3267 42.6022 61.2096 42.3248 61.2096 42C61.2096 42.3248 61.0925 42.6022 60.8584 42.8357Z"
          fill="white"
        />
        <path
          d="M21.4337 3.34266C20.4972 4.27644 19.3479 4.77716 18 4.8313C19.3479 4.89896 20.483 5.38615 21.4337 6.31993C22.3702 7.25371 22.8384 8.36342 22.8384 9.66259C22.8384 8.36342 23.3066 7.25371 24.2431 6.31993C25.1795 5.38615 26.3147 4.88543 27.6626 4.8313C26.3147 4.77716 25.1795 4.27644 24.2431 3.34266C23.3066 2.40888 22.8384 1.29917 22.8384 0C22.8384 1.29917 22.3702 2.40888 21.4337 3.34266Z"
          fill="white"
        />
        <path
          d="M92.0668 43.6264C91.1303 44.5601 89.981 45.0609 88.6331 45.115C89.981 45.1827 91.1161 45.6698 92.0668 46.6036C93.0032 47.5374 93.4714 48.6471 93.4714 49.9463C93.4714 48.6471 93.9397 47.5374 94.8761 46.6036C95.8126 45.6698 96.9477 45.1691 98.2956 45.115C96.9477 45.0609 95.8126 44.5601 94.8761 43.6264C93.9397 42.6926 93.4714 41.5829 93.4714 40.2837C93.4714 41.5829 93.0032 42.6926 92.0668 43.6264Z"
          fill="white"
        />
        <path
          d="M86.4337 7.34266C85.4972 8.27644 84.3479 8.77716 83 8.8313C84.3479 8.89896 85.483 9.38615 86.4337 10.3199C87.3702 11.2537 87.8384 12.3634 87.8384 13.6626C87.8384 12.3634 88.3066 11.2537 89.2431 10.3199C90.1795 9.38615 91.3147 8.88543 92.6626 8.8313C91.3147 8.77716 90.1795 8.27644 89.2431 7.34266C88.3066 6.40888 87.8384 5.29917 87.8384 4C87.8384 5.29917 87.3702 6.40888 86.4337 7.34266Z"
          fill="white"
        />
        <path
          d="M1.71685 22.6713C1.24862 23.1382 0.673969 23.3886 0 23.4156C0.673969 23.4495 1.24152 23.6931 1.71685 24.16C2.18508 24.6269 2.4192 25.1817 2.4192 25.8313C2.4192 25.1817 2.65331 24.6269 3.12154 24.16C3.58977 23.6931 4.15733 23.4427 4.8313 23.4156C4.15733 23.3886 3.58977 23.1382 3.12154 22.6713C2.65331 22.2044 2.4192 21.6496 2.4192 21C2.4192 21.6496 2.18508 22.2044 1.71685 22.6713Z"
          fill="white"
        />
        <path
          d="M104.24 20.2141C103.772 20.6809 103.197 20.9313 102.523 20.9584C103.197 20.9922 103.765 21.2358 104.24 21.7027C104.708 22.1696 104.942 22.7244 104.942 23.374C104.942 22.7244 105.177 22.1696 105.645 21.7027C106.113 21.2358 106.681 20.9854 107.354 20.9584C106.681 20.9313 106.113 20.6809 105.645 20.2141C105.177 19.7472 104.942 19.1923 104.942 18.5427C104.942 19.1923 104.708 19.7472 104.24 20.2141Z"
          fill="white"
        />
        <path
          d="M28.8584 36.8357C28.6243 37.0691 28.337 37.1943 28 37.2078C28.337 37.2247 28.6208 37.3465 28.8584 37.58C29.0925 37.8134 29.2096 38.0909 29.2096 38.4156C29.2096 38.0909 29.3267 37.8134 29.5608 37.58C29.7949 37.3465 30.0787 37.2214 30.4156 37.2078C30.0787 37.1943 29.7949 37.0691 29.5608 36.8357C29.3267 36.6022 29.2096 36.3248 29.2096 36C29.2096 36.3248 29.0925 36.6022 28.8584 36.8357Z"
          fill="white"
        />
        <path
          d="M80.8584 27.8357C80.6243 28.0691 80.337 28.1943 80 28.2078C80.337 28.2247 80.6208 28.3465 80.8584 28.58C81.0925 28.8134 81.2096 29.0909 81.2096 29.4156C81.2096 29.0909 81.3267 28.8134 81.5608 28.58C81.7949 28.3465 82.0787 28.2214 82.4156 28.2078C82.0787 28.1943 81.7949 28.0691 81.5608 27.8357C81.3267 27.6022 81.2096 27.3248 81.2096 27C81.2096 27.3248 81.0925 27.6022 80.8584 27.8357Z"
          fill="white"
        />
        <path
          d="M16.2876 49.2535C15.9365 49.6037 15.5055 49.7914 15 49.8117C15.5055 49.8371 15.9311 50.0198 16.2876 50.37C16.6388 50.7201 16.8144 51.1363 16.8144 51.6235C16.8144 51.1363 16.99 50.7201 17.3412 50.37C17.6923 50.0198 18.118 49.832 18.6235 49.8117C18.118 49.7914 17.6923 49.6037 17.3412 49.2535C16.99 48.9033 16.8144 48.4872 16.8144 48C16.8144 48.4872 16.6388 48.9033 16.2876 49.2535Z"
          fill="white"
        />
      </svg>

      <svg
        class="clouds"
        viewBox="0 0 216 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.6"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M212.725 60.2153C221.885 54.584 227.993 44.4699 227.993 32.9292C227.993 15.252 213.663 0.921875 195.985 0.921875C178.308 0.921875 163.978 15.252 163.978 32.9292C163.978 35.9244 164.39 38.8236 165.159 41.5732C163.337 41.1598 161.44 40.9415 159.493 40.9415C146.668 40.9415 136.054 50.4096 134.26 62.7374C130.111 59.7413 124.792 57.9415 118.993 57.9415C107.561 57.9415 97.996 64.9351 95.5812 74.2994C94.2601 74.0647 92.8929 73.9415 91.4929 73.9415C85.76 73.9415 80.5768 76.0077 76.8565 79.3383C74.624 78.614 72.2417 78.2226 69.7678 78.2226C57.0936 78.2226 46.8192 88.4971 46.8192 101.171C46.8192 113.845 57.0936 124.12 69.7678 124.12C79.3379 124.12 87.5398 118.262 90.9833 109.936C91.1527 109.94 91.3225 109.941 91.4929 109.941C100.135 109.941 107.527 105.246 110.543 98.603C111.748 98.9995 112.998 99.3137 114.286 99.5377C113.226 102.294 112.646 105.288 112.646 108.418C112.646 122.093 123.731 133.179 137.406 133.179C151.081 133.179 162.166 122.093 162.166 108.418C162.166 101.95 159.686 96.0605 155.624 91.6499C156.886 91.8419 158.178 91.9415 159.493 91.9415C164.115 91.9415 168.45 90.7118 172.188 88.5618C176.718 94.3967 183.799 98.1517 191.758 98.1517C205.433 98.1517 216.518 87.0661 216.518 73.3913C216.518 68.5489 215.128 64.0311 212.725 60.2153ZM23.8705 119.289C36.5447 119.289 46.8192 109.014 46.8192 96.34C46.8192 83.6658 36.5447 73.3913 23.8705 73.3913C11.1963 73.3913 0.921875 83.6658 0.921875 96.34C0.921875 109.014 11.1963 119.289 23.8705 119.289Z"
          fill="#F3FDFF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M217.655 67.2124C230.89 60.81 238.415 47.4368 234.908 34.9373C230.879 20.5803 213.818 12.8126 196.803 17.5878C179.787 22.3629 169.259 37.8726 173.288 52.2297C173.779 53.9788 174.463 55.6301 175.317 57.1728C173.497 59.2022 172.006 61.534 170.93 64.0835C170.13 63.9896 169.316 63.9414 168.493 63.9414C159.153 63.9414 151.143 70.1375 147.74 78.9605C147.412 78.9477 147.084 78.9412 146.753 78.9412C142.026 78.9412 137.608 80.266 133.851 82.5646C129.405 79.0718 123.489 76.9414 116.993 76.9414C107.472 76.9414 99.1946 81.5183 94.9725 88.2532C92.3526 86.781 89.3295 85.9414 86.1103 85.9414C81.9223 85.9414 78.0662 87.3624 74.9978 89.7486C71.1144 86.7353 66.2375 84.9414 60.9416 84.9414C56.1137 84.9414 51.6341 86.4322 47.9379 88.9786C43.7712 83.1953 36.9782 79.4302 29.3058 79.4302C16.6316 79.4302 6.35718 89.7047 6.35718 102.379C6.35718 115.053 16.6316 125.328 29.3058 125.328C34.1337 125.328 38.6133 123.837 42.3095 121.29C46.4762 127.074 53.2692 130.839 60.9416 130.839C68.728 130.839 75.6086 126.961 79.7576 121.031C81.7345 121.771 83.8751 122.176 86.1103 122.176C92.1098 122.176 97.4283 119.26 100.725 114.768C105.098 117.993 110.781 119.941 116.993 119.941C120.443 119.941 123.729 119.341 126.718 118.254C131.22 124.44 138.517 128.462 146.753 128.462C157.176 128.462 166.095 122.022 169.747 112.904C178.503 112.38 185.924 106.406 189.199 98.0441C190.675 98.3185 192.197 98.462 193.753 98.462C207.428 98.462 218.514 87.3764 218.514 73.7016C218.514 71.4562 218.215 69.2806 217.655 67.2124Z"
          fill="#F3FDFF"
        />
      </svg>
    </button>`;
  }

  static styles = css`
    :host {
      display: inline-flex;
      width: fit-content;
      outline: none;

      --switch-width: 120px;
      --switch-height: 60px;
      --switch-border-radius: 30px;
      --switch-padding: 6px;

      --bg-sun: #fed62e;
      --bg-moon: #c4c9d2;
      --bg-sky: #3a8dca;
      --bg-night: #1b1d2a;
    }

    button.switch {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: content-box;
      width: var(--switch-width);
      height: var(--switch-height);
      border-radius: var(--switch-border-radius);
      border: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      overflow: hidden;
      box-shadow: inset 0px 7px 9px rgba(0, 0, 0, 0.25),
        inset 0px -1px 13px rgba(0, 0, 0, 0.25);
      transition: all 500ms cubic-bezier(0.69, 0.08, 0.27, 0.95);
    }

    .dot {
      display: block;
      border-radius: 80%;
      margin: 0 calc(var(--switch-padding) / 2);
      width: calc(var(--switch-height) - var(--switch-padding));
      height: calc(var(--switch-height) - var(--switch-padding));
      z-index: 1;
      transform: translateX(0);
      transition: all 700ms cubic-bezier(0.69, 0.08, 0.27, 0.95);
    }

    .stars {
      position: absolute;
      width: 50%;
      height: 60%;
      opacity: 0;
      transition: all 700ms cubic-bezier(0.69, 0.08, 0.27, 0.95);
      animation: myAnimationStart 1.5s linear forwards;
      animation-delay: 500ms;
    }

    @keyframes myAnimationStart {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes myAnimationEnd {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    .moon {
      position: absolute;
      inset: 0;
      display: flex;
      margin: auto;
      opacity: 0;
      width: 70%;
      height: 70%;
    }

    .clouds {
      position: absolute;
      width: 100%;
      transform: scaleX(105%);
      height: 100%;
      transition: all 700ms cubic-bezier(0.69, 0.08, 0.27, 0.95);
    }

    /* Day */

    button.switch[aria-checked="true"] {
      background-color: var(--bg-sky);
    }

    button.switch[aria-checked="true"] .dot {
      background-color: var(--bg-sun);
      box-shadow: 0px 0px 0px calc(2 * var(--switch-height) / 2)
          rgba(255, 255, 255, 0.1),
        0px 0px 0px calc(2 * var(--switch-height) / 3) rgba(255, 255, 255, 0.1),
        0px 0px 0px calc(2 * var(--switch-height) / 6) rgba(255, 255, 255, 0.1),
        0px 3px 3px rgba(0, 0, 0, 0.25), 3px 4px 5px rgba(0, 0, 0, 0.25),
        inset 0px -3px 3px #b49a2c, inset 3px 4px 4px rgba(254, 255, 237, 0.61);
    }

    button.switch[aria-checked="true"] .stars {
      transform: translateY(calc(-1 * var(--switch-height)));
    }

    /* Night */
    button.switch[aria-checked="false"] {
      background-color: var(--bg-night);
    }

    button.switch[aria-checked="false"] .dot {
      background-color: var(--bg-moon);
      box-shadow: 0px 0px 0px calc(2 * var(--switch-height) / 2)
          rgba(255, 255, 255, 0.1),
        0px 0px 0px calc(2 * var(--switch-height) / 3) rgba(255, 255, 255, 0.1),
        0px 0px 0px calc(2 * var(--switch-height) / 6) rgba(255, 255, 255, 0.1),
        0px 3px 3px rgba(0, 0, 0, 0.25), 3px 4px 5px rgba(0, 0, 0, 0.25),
        inset 0px -3px 3px rgba(0, 0, 0, 0.25),
        inset 3px 4px 4px rgba(254, 255, 237, 0.61);
    }

    button.switch[aria-checked="false"] .moon {
      opacity: 0;
      animation: myAnimationStart 700ms linear forwards;
      animation-delay: 200ms;
    }

    button.switch[aria-checked="false"] .dot {
      transform: translateX(calc(var(--switch-width) - var(--switch-height)));
    }

    button.switch[aria-checked="false"] .clouds {
      transform: translateY(var(--switch-height));
    }

    /** Disabled */

    button:not(:disabled) {
      cursor: pointer;
    }
    button:disabled::after {
      content: "";
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      background-color: #bebebe69;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "switch-day-night": MySwitch;
  }
}
