// web components is a suite of technologies allowing you to create reusable custom elements
import { templates } from "./templates.js";

export class BlogPost extends HTMLElement {
  title = "";
  description = "";
  link = "";
  thumbnail = "";

  constructor() {
    super();

    console.log("render");

    this.attachShadow({
      mode: "open",
      delegatesFocus: true,
    });

    this.render();
  }

  static get observedAttributes() {
    return ["title", "description", "link"];
  }

  connectedCallback() {
    console.log("--mount");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "title":
        this.title = newValue || "";
        break;
      case "description":
        this.description = newValue || "";
        break;
      case "link":
        this.link = newValue || "";
        break;
      case "thumbnail":
        this.thumbnail = newValue || "";
        break;
    }

    this.render();
  }

  get template() {
    return `
        <div class='blog-post'> 
          <div class="thumbnail">
            ${
              this.thumbnail
                ? `<img src="${thumbnail}" alt="${this.title}" />`
                : ""
            }
          </div>
          <h2>${this.title}</h2>
          <p>${this.description}</p>
          <a href="${this.link}">learn more</a>
        </div>
      `;
  }

  render() {
    const template = templates.blogPost;
    console.log("template", template);
    this.shadowRoot.appendChild(template.content);
  }
}

customElements.define("blog-post", BlogPost);
