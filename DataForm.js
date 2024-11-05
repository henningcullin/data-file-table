import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

class DataForm extends LitElement {
  static properties = {
    filter: { type: Array },
  };

  static styles = css`
    form {
      margin-bottom: 1em;
    }

    form > div {
      margin-bottom: 1em;
    }
  `;

  constructor() {
    super();
  }

  onSubmit(event) {
    event.preventDefault();

    const formValues = Object.fromEntries(new FormData(event.target));

    console.table([formValues]);
  }

  render() {
    return html`
      <div>
        <form @submit="${this.onSubmit}">
          <div>
            <label>Header</label>
            <select name="header">
              <option value="journal">Journal</option>
            </select>
          </div>

          <button type="submit">Set new data</button>
        </form>
      </div>
    `;
  }
}
// Register the component
customElements.define("data-form", DataForm);

export default DataForm;
