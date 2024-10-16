import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import { getFilterMap } from "./filter.js";

function getInputType(inputType) {
  switch (inputType) {
    case "string":
      return "text";
    case "number":
      return "number";
    case "date":
      return "date";
    case "boolean":
      return "checkbox";
    default:
      return "text";
  }
}

/**
 * @typedef {`${string}-${string}-${string}-${string}-${string}`} Uuid
 * @typedef {'string' | 'number' | 'date' | 'boolean'} FilterType
 */

/**
 * @type {{label: string, value: FilterType}[]}
 */
const filterTypes = [
  { label: "String", value: "string" },
  { label: "Number", value: "number" },
  { label: "Date", value: "date" },
  { label: "Boolean", value: "boolean" },
];

class FilterModal extends LitElement {
  static properties = {
    filter: { type: Array },
  };

  static styles = css`
    dialog {
      border: 1px solid red;
    }
  `;

  constructor() {
    super();
    this.filterMap = getFilterMap();
    this.setFilter = () => {};
    /**
     * @type {{id: Uuid, filterType: FilterType, filterMethod: string, filterValue: string}[]}
     */
    this.filter = [];
  }

  show(filter, setFilter) {
    this.filter = filter;
    this.setFilter = setFilter;
    this?.shadowRoot?.querySelector("dialog")?.showModal();
  }

  addCondition() {
    this.filter = [
      ...this.filter,
      {
        id: crypto.randomUUID(),
        filterType: "string",
        filterMethod: "contains",
        filterValue: "",
      },
    ];
  }

  /**
   *
   * @param {SubmitEvent} event
   */
  onSubmit(event) {
    event.preventDefault();
  }

  handleFilterTypeChanged(event, id) {
    this.filter = this.filter.reduce((acc, curr) => {
      if (curr.id === id) {
        curr.filterType = event.target.value;
        if (
          this?.filterMap[curr?.filterType]?.findIndex(
            (method) => method.value === curr.filterMethod
          ) === -1
        )
          curr.filterMethod = "";
      }
      acc.push(curr);
      return acc;
    }, []);
  }

  handleFilterMethodChanged(event, id) {
    this.filter = this.filter.reduce((acc, curr) => {
      if (curr.id === id) {
        curr.filterMethod = event.target.value;
      }
      acc.push(curr);
      return acc;
    }, []);
  }

  handleRemoveCondition(id) {
    this.filter = this.filter.reduce((acc, curr) => {
      if (curr.id !== id) {
        acc.push(curr);
      }
      return acc;
    }, []);
  }

  render() {
    return html`
      <dialog>
        <h2>${this.column}</h2>
        <form @submit="${this.onSubmit}">
          ${this.filter.map(
            (condition) => html`<div>
              <label>Type</label>
              <select
                @change="${(event) =>
                  this.handleFilterTypeChanged(event, condition.id)}"
              >
                ${filterTypes.map(
                  ({ label, value }) =>
                    html`<option value="${value}">${label}</option>`
                )}
              </select>

              <label>Method</label>
              <select>
                ${this.filterMap[condition.filterType]?.map(
                  ({ label, value }) =>
                    html`<option value="${value}">${label}</option>`
                )}
              </select>

              <input type="${getInputType(condition.filterType)}" />
              <button
                type="button"
                @click="${() => this.handleRemoveCondition(condition.id)}"
              >
                Remove Condition
              </button>
            </div>`
          )}
        </form>
        <button @click="${this.addCondition}">Add Condition</button>
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

  return function (filter, setFilter) {
    modal.show(filter, setFilter);
  };
}
