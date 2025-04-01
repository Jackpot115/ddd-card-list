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
          border: 1px solid var(--ddd-border-color, #ccc);
          border-radius: var(--ddd-border-radius, 8px);
          padding: var(--ddd-spacing-3);
          max-width: 300px;
          text-align: center;
          --component-color: var(
            --ddd-theme-primary,
            var(--ddd-theme-default-link)
          );
          --component-border-color: var(--component-color);
          --component-background-color: var(
            --lowContrast-override,
            var(
              --ddd-theme-accent,
              var(--ddd-theme-bgContrast, var(--ddd-theme-default-white))
            )
            transition: all 0.3s ease;
          );
        }
        


        h3 span {
          font-size: var(--ddd-card-label-font-size, var(--ddd-font-size-s));
        }

        .wrapper {
          width: var(--ddd-spacing-64);
          height: var(--ddd-spacing-64);
        }

        .image {
          width: auto;
          height: auto;
        
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

          .image img {
          width: 300px;
          height: 300px;
          border-radius: var(--ddd-border-radius, 8px);
          }

          .button {
            padding: 6px;
          }

          .title-bar {
          padding: var(--ddd-spacing-2);
          color: var(--component-color, var(--ddd-theme-default-link));
          border: var(--ddd-border-sm);
          border-color: var(
            --component-border-color,
            var(--ddd-theme-default-link)
          );
          font-weight: bold;
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
        <img src="${this.image}" alt="${this.title || "Card image"}" />
         <div>

         <div class="title-bar">${this.title}</div>

          <h3>${this.title}</h3>
          
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
