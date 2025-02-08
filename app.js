// web components is a suite of technologies allowing you to create reusable custom elements

class BlogPost extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: "open",
      delegatesFocus: true,
    });

    this.shadowRoot.innerHTML = `
        <div class='blog-post'> 
        <h2>my post title</h2>
        <p>lorem ipsum dolar situm esum nsss </p>
        <a href="">learn more</a>
        </div>
    `;
  }
}

customElements.define("blog-post", BlogPost);
