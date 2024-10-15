import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

/**
 * @typedef {function(string, string, boolean): boolean} filterPredicate
 * A function that takes two strings and a boolean, returning a boolean.
 */

/**
 * Build a condition.
 *
 * @param {Object} config - Configuration object.
 * @param {string} config.label - The label for the condition.
 * @param {function(string, string): boolean} config.string - Callback for string comparison.
 * @param {function(number, number): boolean} config.number - Callback for number comparison.
 * @param {function(Date, Date): boolean} config.date - Callback for date comparison.
 * @param {function(boolean, boolean): boolean} config.boolean - Callback for boolean comparison.
 * @returns {void}
 */
function condition({
  label,
  string: stringCallback,
  number: numberCallback,
  date: dateCallback,
  boolean: booleanCallback,
}) {
  return {
    label,
    string: stringCallback
      ? (tableData, filterData, isCaseSensitive) => {
          if (!isCaseSensitive) {
            tableData = tableData.toLowerCase();
            filterData = filterData.toLowerCase();
          }
          return stringCallback(tableData, filterData);
        }
      : null,
    number: numberCallback
      ? (tableData, filterData, isFloat) => {
          tableData = isFloat ? parseFloat(tableData) : parseInt(tableData);
          filterData = isFloat ? parseFloat(filterData) : parseInt(tableData);

          return numberCallback(tableData, filterData);
        }
      : null,
    date: dateCallback
      ? (tableData, filterData) => {
          tableData = new Date(tableData);
          filterData = new Date(filterData);

          return dateCallback(tableData, filterData);
        }
      : null,
    boolean: booleanCallback
      ? (tableData, filterData) => {
          tableData = Boolean(tableData);
          filterData = Boolean(filterData);

          return booleanCallback(tableData, filterData);
        }
      : null,
  };
}

/**
 * @type {{contains: filterPredicate}}
 * An object where the key is a string, and the value is a `filterPredicate`.
 */
const filters = {
  contains: condition({
    label: "Contains",
    string: (table, filter) => table.includes(filter),
  }),
  not_contains: condition({
    label: "Does Not Contain",
    string: (table, filter) => !table.includes(filter),
  }),
  equals: condition({
    label: "Equals",
    string: (table, filter) => table === filter,
    number: (table, filter) => table === filter,
    date: (table, filter) => table === filter,
    boolean: (table, filter) => table === filter,
  }),
  not_equals: condition({
    label: "Does Not Equals",
    string: (table, filter) => table !== filter,
    number: (table, filter) => table !== filter,
    date: (table, filter) => table !== filter,
    boolean: (table, filter) => table !== filter,
  }),
  begins_with: condition({
    label: "Begins With",
    string: (table, filter) => table.startsWith(filter),
  }),
  not_begins_with: condition({
    label: "Does Not Begin With",
    string: (table, filter) => !table.startsWith(filter),
  }),
  ends_with: condition({
    label: "Ends With",
    string: (table, filter) => table.endsWith(filter),
  }),
  not_ends_with: condition({
    label: "Does Not End With",
    string: (table, filter) => !table.endsWith(filter),
  }),
};

console.log(filters);

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
