import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

class MultiSelect extends LitElement {
  static properties = {
    options: { type: Array },
    selectedItems: { type: Array },
    inputValue: { type: String },
    onChange: { type: Function }, // New callback property
  };

  static styles = css`
    :host {
      display: block;
      width: 300px;
      font-family: Arial, sans-serif;
      position: relative;
    }

    .input-container {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 8px;
      cursor: text;
    }

    .selected-item {
      display: flex;
      align-items: center;
      background-color: #e0e0e0;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 14px;
    }

    .selected-item span {
      margin-right: 8px;
    }

    .selected-item button {
      border: none;
      background: transparent;
      cursor: pointer;
      font-weight: bold;
      font-size: 14px;
      color: #333;
    }

    .selected-item button:hover {
      color: red;
    }

    input {
      border: none;
      outline: none;
      flex: 1;
      min-width: 50px;
      font-size: 14px;
      padding: 4px;
    }

    .datalist {
      border: 1px solid #ccc;
      border-top: none;
      max-height: 150px;
      overflow-y: auto;
      position: absolute;
      width: 100%;
      background: white;
      z-index: 10;
    }

    .datalist-item {
      padding: 8px;
      cursor: pointer;
    }

    .datalist-item:hover {
      background-color: #f0f0f0;
    }
  `;

  constructor() {
    super();
    this.options = [];
    this.selectedItems = [];
    this.inputValue = "";
    this.onChange = () => {}; // Default no-op function
  }

  handleInput(e) {
    this.inputValue = e.target.value.toLowerCase();
  }

  handleSelect(option) {
    if (!this.selectedItems.includes(option)) {
      this.selectedItems = [...this.selectedItems, option];
      this.inputValue = ""; // Clear input after selection
      this.onChange(this.selectedItems); // Call the onChange callback
    }
  }

  handleRemove(item) {
    this.selectedItems = this.selectedItems.filter(
      (selected) => selected !== item
    );
    this.onChange(this.selectedItems); // Call the onChange callback
  }

  get filteredOptions() {
    return this.options.filter(
      (option) =>
        option.toLowerCase().includes(this.inputValue) &&
        !this.selectedItems.includes(option)
    );
  }

  render() {
    return html`
      <div
        class="input-container"
        @click=${() => this.shadowRoot.querySelector("input").focus()}
      >
        ${this.selectedItems.map(
          (item) => html`
            <div class="selected-item">
              <span>${item}</span>
              <button @click=${() => this.handleRemove(item)}>×</button>
            </div>
          `
        )}
        <input
          type="text"
          .value=${this.inputValue}
          @input=${this.handleInput}
          placeholder="Select..."
        />
      </div>
      <div class="datalist">
        ${this.filteredOptions.map(
          (option) => html`
            <div
              class="datalist-item"
              @click=${() => this.handleSelect(option)}
            >
              ${option}
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define("multi-select", MultiSelect);

export default MultiSelect;
