import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import { headers } from "./header.js";

class DataForm extends LitElement {
  static properties = {
    setData: { type: Function },
    setHeader: { type: Function },
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

    const header = headers[formValues.header].header.split("|").slice(2, -3);

    const data = formValues.data
      .split("|$|\n") // split into rows
      .filter((row) => !row.includes("|$$|")) // filter out header
      .map((row) => row.split("|").slice(2, -1)) // split row strings to row array
      .slice(0, -1); // remove last undefined item

    this.setHeader(header);
    this.setData(data);
  }

  render() {
    return html`
      <div>
        <form @submit="${this.onSubmit}">
          <div>
            <label>Header</label>
            <select name="header">
              ${Object.keys(headers).map(
                (header) => html`<option value="${header}">${header}</option>`
              )}
            </select>
          </div>

          <div>
            <label>Data</label>
            <textarea name="data"></textarea>
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
