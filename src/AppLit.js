import { LitElement, html, css } from 'lit-element';
import './login-lit'

export class AppLit extends LitElement {
  static get properties() {
    return {
      success:{type: Boolean}
    };
  }

static get styles(){
  return css `
  login-lit{
    display:flex;
    position: absolute;
    right: 38%;
    top: 10%;
    }
  `;
  
}

  render() {
    return html`

    ${this.success ? html`<h1>Welcome !!</h1>` : html` <login-lit @sign="${this._hiddenLogin}" ></login-lit>`}
    
    `;
  }

  _hiddenLogin(){
    this.success = true;
  }
}
