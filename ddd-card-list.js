/** 
 * Copyright 2025 Matt C
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./ddd-card.js";

/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCardList extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-card-list";
  }

  constructor() {
    super();
    this.backgroundcolor = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
      url: { type: String },
      button: { type: String },
      backgroundcolor: { 
        type: String,
        relfect: true,
        DDDDataAttributes: "data-accent"

      },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          border-radius: var(--ddd-border-radius, 8px);
          padding: var(--ddd-spacing-3);
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }
    
        .title-bar {
          padding: var(--ddd-spacing-2);
          font-weight: var(--ddd-font-weight-bold);
        }
        div ::slotted(*) {
          display: inline-block;
        }
        h3 span {
          font-size: var(
            --ddd-card-list-label-font-size, var(--ddd-font-size-s)
          );
          border-bottom: var(--ddd-spacing-1) solid var(--ddd-theme-primary);
        }
        .ddd-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: var(--ddd-spacing-4); 
          justify-content: center; 
          padding: var(--ddd-spacing-2);
          background-color: var(--ddd-theme-accent);
        }

/* Ensures that exactly 3 cards are per row */
::slotted(*) {
  flex: 1 1 calc(33.333% - 16px);
  max-width: calc(33.333% - 16px);
  box-sizing: border-box; 
}

/* When the screen width is smaller, switch to 2 per row */
@media screen and (max-width: 900px) {
  ::slotted(*) {
    flex: 1 1 calc(50% - 16px);
    max-width: calc(50% - 16px);
  }
}

/* When the screen is very small, stack items in 1 column */
@media screen and (max-width: 600px) {
  ::slotted(*) {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
  `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="ddd-wrapper">
        <slot></slot>
      </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddCardList.tag, DddCardList);