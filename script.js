class Card extends HTMLElement {
   constructor(){
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const template = document.getElementById("card-template");
      const templateContent = template.content.cloneNode(true);
      const style = document.createElement('style');
      style.textContent = `
         .card-wrapper {
            display:flex;
            flex-direction: column;
            align-content: center;
            flex-wrap: wrap;
            max-width: 450px;
            max-height: auto;
            background-color: #242424;
            align-items: center;
            border: solid black;
         }
         .logo-container {
            padding-top: 20px;
            display:flex;
            width: 100%;
            background-color: white;
            justify-content: center;
         }
         .image-container {
            margin: 20px;
            display: flex;
            border-radius: 50px;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 50%;
            height: auto;
            overflow: hidden;
         }
         .image-container img {
            max-width: 120%;
         }
         .card-title {
            font-family: Verdana, sans-serif;
            text-align: center;
            width: 100%;
            color: white;
            font-size: 50px;
            font-family: 'roboto'
            background-color: #242424;
         }
         .card-job {
            display:flex;
            justify-content: center;
            text-align: center;
            align-items: center;
            font-family: Verdana, sans-serif;
            font-size: 50px;
            width: 100%;
            height: 100px;
            color: white;
            background-color: #ee283f;
            
         }
      `;
      shadowRoot.appendChild(style);
      shadowRoot.appendChild(templateContent);
   }
}

customElements.define('jala-card', Card);  
