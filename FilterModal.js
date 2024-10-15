import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

class FilterModal extends LitElement {
  static properties = {
    column: { type: String },
    filter: { type: Object },
  };

  constructor() {
    super();
  }

  open() {
    this?.shadowRoot?.querySelector("dialog")?.showModal();
  }

  render() {
    return html`
      <dialog>
        <h2>${this.column}</h2>
        <div>
          <div>
            <label></label>
            <select></select>
          </div>
        </div>
      </dialog>
    `;
  }
}

// Register the component
customElements.define("filter-modal", FilterModal);

export function useFilterModal() {
  const modalExist = document.querySelector("filter-modal");

  const modal = modalExist ?? document.createElement("filter-modal");

  if (!modalExist) {
    document.body.appendChild(modal);
  }

  return function (column) {
    modal.column = column;
    modal.open();
  };
}
