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
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-flex;
          flex-wrap: wrap;
          gap: 16px;
          padding: var(--ddd-spacing-16);
          max-width: 300px;
          border: 4px solid white;
          flex-direction: inline-flex;
          transition: all 0.3s ease;
        }


        h3 span {
          font-size: var(--ddd-card-label-font-size, var(--ddd-font-size-s));
        }

        .image {
          width: 100%;
          height: auto;
          display: block;
          justify-content: center;
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
          
          .image img {
            width: 100%;
            height: auto;
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

          .image img {
            width: 100%;
            height: auto;
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
      <div class="wrapper">
        <div class="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJoR3uzS2GS_KVfRbu6xI4yrvqto2iivTNQ&s"
          />
          <h3>Abington</h3>
          <div>
            Close to Philadelphia, Penn State Abington's suburban campus offers
            bachelor's degrees, athletics, and a diverse student community.
  </div>
          <button class="button" @click="${this.handleButtonClick}"
            >Explore ></button
          >
        </div>
      </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */


}


globalThis.customElements.define(DddCard.tag, DddCard);
