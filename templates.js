export const templates = {
  get blogPost() {
    const template = document.createElement("template");
    template.innerHTML = `
            <div class="blog-post">
                <div class="thumbnail">
                    <slot name="thumbnail"><img src="" alt="" /></slot>
                </div>
                <slot name="title"><h2>TITLE</h2></slot>
                <slot name="description"><p>DESC</p></slot>
                <slot name="link"><a href="">learn more</a></slot>
            </div>
    `;
    return template;
  },
};
