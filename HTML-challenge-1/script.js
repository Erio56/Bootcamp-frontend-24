class Card extends HTMLElement {
   constructor(){
      super()
      const shadowRoot = this.attachShadow({ mode: 'open' })
      const template = document.getElementById("card-template");
      const templateContent = template.content.cloneNode(true);
      shadowRoot.appendChild(templateContent)
   }
}

customElements.define('jala-card', Card);  





