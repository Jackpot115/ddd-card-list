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
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };

    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/ddd-card-list.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: {type: String},
      url: {type: String},
      button: {type: String},

    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
      display: inline-flex;
      color: var(--ddd-theme-primary-2);
      font-family: var('--ddd-font-primary', sans-serif);
      padding: var(--ddd-spacing-16);
      max-width: 250px;
      border: 4px solid white;
      }
      
      /** 
      .wrapper {
        margin: var(--ddd-spacing-8);
        padding: var(--ddd-spacing-8);
      }
        */
      
      
      h3 span {
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
      }

      .image{
      width: 100%;
      height: 100%;
      display: block;
      justify-content: center;
    }
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--ddd-theme-primary-2);
      color: white;
      padding: var(--ddd-spacing-8);
      border-radius: 4px;
      text-decoration: none;

    }



    `];
  }


  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
<div class="image"> <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJoR3uzS2GS_KVfRbu6xI4yrvqto2iivTNQ&s"/>
<slot>Testing testing testing Testing testing testing </slot>

<div class="button"></div>
</div>
</div>`
;
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