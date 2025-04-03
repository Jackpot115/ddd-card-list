import { LitElement, html, css } from "lit";
import {DDD} from "@haxtheweb/d-d-d/d-d-d.js";

export class DddCard extends DDD {

  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
      link: { type: String },
      button: { type: String },
      description: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
       :host {
          display: inline-flex;
          border-radius: var(--ddd-border-radius, 8px);
          padding: var(--ddd-spacing-4);
        }
        
        .card {
          display: flex;
          flex-flow: column;
          height: auto;
          max-width: 500px;
          margin: auto;
          border-width: 0px;
          box-sizing: border-box;
          background-color: var(--ddd-theme-default-white);
          color: black;
          border-top-left-radius: var(--ddd-radius-sm);
          border-top-right-radius: var(--ddd-radius-sm);
          transition: all 0.3s ease;
        }

        .card img {
          width: auto;
          height: auto;
          object-fit: cover;
          aspect-ratio: 3/2;
          max-width: 100%;
          height: auto;
          border-top-left-radius: var(--ddd-radius-sm);
          border-top-right-radius: var(--ddd-radius-sm);
        }

        .card #color-line {
          display: flex;
          border-top-width: 12px;
          border-bottom-width: 0px;
          box-sizing: content-box;
          border-style: solid;
          border-color: var(--ddd-theme-default-nittanyNavy);
        }

        
        h3 span {
          font-size: var(--ddd-card-label-font-size, var(--ddd-font-size-s));
        }

        #bottom-card {
          display: flex;
          flex-flow: column;
          align-items: center;
          padding: var(--ddd-spacing-2);
        }
        

        
        .button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          background-color: var(--ddd-theme-default-beaverBlue);
          height: 50px;
          color: var(--ddd-theme-default-white);
          border-radius: 8px;
          border: 2px solid;
          max-width: 450px;
          text-decoration: none;
          font-size: 16px;
          width: 100%;
          cursor: pointer;
        }

        @media (max-width: 1000px) {
          :host {
            max-width: 100%;
            padding: var(--ddd-spacing-8);
          }
          .button {
            width: 100%;
            padding: 8px;
          }
        }
        @media (max-width: 1000px) {
          :host {
            max-width: 100%;
            padding: var(--ddd-spacing-4);
          }
          .button {
            padding: 6px;
          }
        }


      `,
    ];
  }

  handleButtonClick() {
    window.open("https://www.youtube.com", "_blank");
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="card">
        <img src="${this.image}" alt="${this.title || "Card image"}" />

        <div id="color-line"></div>

        <h3>${this.title}</h3>

          <p>${this.description}</p>
   
        <div id=bottom-card>

          

          <button class="button" @click="${this.handleButtonClick}">Explore ></button>

          </div>
      </div>
  </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */


}


globalThis.customElements.define(DddCard.tag, DddCard);
