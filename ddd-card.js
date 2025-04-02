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
      url: { type: String },
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
          border: 1px solid var(--ddd-border-color, white);
          border-radius: var(--ddd-border-radius, 8px);
          padding: var(--ddd-spacing-3);
          max-width: 300px;
          text-align: center;
          --component-color: var(--ddd-theme-primary, var(--ddd-theme-default-link)
 
          );
         
        }
        
        .card {
          display: flex;
          flex-flow: column;
          height: 100%;
          max-width: 500px;
          margin: auto;
          border-width: 0px;
          box-sizing: border-box;
          background-color: var(--ddd-theme-default-roarLight);
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
          border-color: var(--ddd-theme-default-forestGreen);

        }


        h3 span {
          font-size: var(--ddd-card-label-font-size, var(--ddd-font-size-s));
        }

        .wrapper {
          width: var(--ddd-spacing-64);
          height: var(--ddd-spacing-64);
        }

        

        .button {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: blue;
          color: white;
          padding: 10px;
          border-radius: 4px;
          text-decoration: none;
          width: 100%;
          cursor: pointer;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          :host {
            max-width: 100%;
            padding: var(--ddd-spacing-8);
          }

          .button {
            width: 100%;
            padding: 8px;
          }
        }

        @media (max-width: 480px) {
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

          <button class="button" @click="${this.handleButtonClick}">Explore ></button>

      </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */


}


globalThis.customElements.define(DddCard.tag, DddCard);
