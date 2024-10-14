import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

class FilterModal extends LitElement {
  static properties = {
    open: { type: Boolean },
  };

  constructor() {
    super();
    this.open = false;
  }

  render() {
    return html`
      <dialog .open=${this.open}>
        <h2>column</h2>
        <p>This is an important thing lmao.... HHAHAHAH</p>
      </dialog>
    `;
  }
}

// Register the component
customElements.define("filter-modal", FilterModal);

export function useFilterModal() {
  const modal = document.createElement("filter-modal");
  document.body.appendChild(modal);

  function showModal() {
    modal.showModal();
  }

  return { showModal };
}
