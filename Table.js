import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

import MultiSelect from "./MultiSelect.js";
import { useFilterModal } from "./FilterModal.js";
import { filters } from "./filter.js";

class DataTable extends LitElement {
  static properties = {
    header: { type: Array },
    data: { type: Array }, // Assuming this will be initialized with transformed data
    filter: { type: Object },
    sortColumn: { type: String },
    sortDirection: { type: String },
    visibleColumns: { type: Array },
  };

  constructor() {
    super();
    this.header = [];
    this.data = [];
    this.filter = {};
    this.sortColumn = null;
    this.sortDirection = "asc";
    this.visibleColumns = [...this.header]; // Initially show all columns
    this.filterColumn = useFilterModal();
  }

  // Transform raw data rows into objects with keys from header
  setData(rawData) {
    this.data = rawData.map((row) => {
      return this.header.reduce((obj, key, index) => {
        obj[key] = row[index];
        return obj;
      }, {});
    });
  }

  // Styles for the table
  static styles = css`
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th,
    td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: left;
    }
    th {
      cursor: pointer;
    }
    th.sort-asc::after {
      content: "▲";
    }
    th.sort-desc::after {
      content: "▼";
    }
    input {
      margin-bottom: 10px;
    }
  `;

  // Update visible columns when the selection changes
  updateVisibleColumns(selectedItems) {
    this.visibleColumns = selectedItems;
  }

  // Handle filter input change
  setColumnFilter(column, columnFilter) {
    this.filter[column] = columnFilter;
    this.filter = structuredClone(this.filter);

    console.log(this.filter);
  }

  handleColumnFilter(column) {
    const filter = this.filter[column] ?? [];
    this.filterColumn(filter, (columnFilter) =>
      this.setColumnFilter(column, columnFilter)
    );
  }

  // Apply sorting and filtering to the data
  get processedData() {
    let filteredData = this.data.filter((row) => {
      const filterKeys = Object.keys(this.filter);

      if (filterKeys.length) {
        return filterKeys.every((columnKey) => {
          const columnFilters = this.filter[columnKey];

          return columnFilters.every((condition) => {
            return filters[condition.filterMethod][condition.filterType](
              row[columnKey],
              condition.filterValue,
              condition.specialProperty
            );
          });
        });
      } else return true;
    });

    if (this.sortColumn) {
      filteredData.sort((a, b) => {
        const valueA = a[this.sortColumn];
        const valueB = b[this.sortColumn];
        if (valueA < valueB) return this.sortDirection === "asc" ? -1 : 1;
        if (valueA > valueB) return this.sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filteredData;
  }

  render() {
    return html`
      <h2>Columns</h2>
      <multi-select
        .options="${this.header}"
        .selectedItems="${this.visibleColumns}"
        .onChange="${(items) => this.updateVisibleColumns(items)}"
      ></multi-select>

      <!-- Table -->
      <table style="margin-top: 7em;">
        <thead>
          <tr>
            ${this.visibleColumns.map(
              (column) => html`
                <th
                  class="${this.sortColumn === column
                    ? `sort-${this.sortDirection}`
                    : ""}"
                  @click="${() => this.handleColumnFilter(column)}"
                >
                  ${column}
                </th>
              `
            )}
          </tr>
        </thead>
        <tbody>
          ${this.processedData.slice(0, 50).map(
            (row) => html`
              <tr>
                ${this.visibleColumns.map(
                  (column) => html`<td>${row[column]}</td>`
                )}
              </tr>
            `
          )}
        </tbody>
      </table>
    `;
  }
}

// Register the component
customElements.define("data-table", DataTable);

export default DataTable;
