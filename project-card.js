// import { LitElement, html, css } from "lit";
// import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class ProjectCard extends DDDSuper(LitElement) {

  constructor() {
    super();
    this.title = '';
    this.source = '';
    this.alt = '';
  }

  static get properties() {
    return {
        source: { type: String },
        title: { type: String },
        alt: { type: String},
    };
  }

  static get styles() {
    return [css`
    .card{
      background-color: var(--ddd-theme-default-skyLight);
      border-radius: var(--ddd-radius-lg);
      padding: 16px;
      margin: var(--ddd-spacing-2);
      border: var(--ddd-border-md);
      width: 240px;
      height: 340px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
    }
    .card:hover{
      background-color: var(--ddd-theme-default-accent);
    }
    img {
      width: 240px;
      height: 200px;
      display: block;
      border-radius: var(--ddd-radius-md);
      
    }

    .details{
      text-align: center;
      font-size: var(--ddd-font-size-l);
      font-family: 'Times New Roman', Times, serif;
    }
    .creator{
      font-size: var(--ddd-font-size-m);
      font-style: italic;
      color: var(--ddd-theme-default-coalyGray);
    }

    `];
  }
  

  render() {
    console.log('Rendering nasa-card with:', this.title, this.source);
    return html`
      <div class="card" @click="${this.newWindow}" tabindex="0" @keydown="${this.tabWindow}">
          <img src="${this.source}" alt="${this.alt}" />
          <div class="details">${this.title}</div>
          <div class="creator">Owner of media: ${this.secondary_creator}</div>
      </div>
    `;
  }

  newWindow(){
    window.open(this.source, '_blank');
  }

  tabWindow(e){
    if (e.key === 'Enter'){
      this.newWindow();
    }
  }


  static get tag() {
    return "project-card";
  }
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}x
customElements.define(ProjectCard.tag, ProjectCard);