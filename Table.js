import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

import MultiSelect from "./MultiSelect.js";
import { useFilterModal } from "./FilterModal.js";

class DataTable extends LitElement {
  static properties = {
    header: { type: Array },
    data: { type: Array },
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
  setColumnFilter(columnFilter) {
    this.filter = { ...this.filter, columnFilter };
  }

  handleColumnFilter(column) {
    const filter = this.filter[column] ?? [];
    this.filterColumn(filter, (columnFilter) =>
      this.setColumnFilter(columnFilter)
    );
  }

  // Apply sorting and filtering to the data
  get processedData() {
    let filteredData = this.data.filter((row) =>
      Object.keys(this.filter).every((column) => {
        if (!this.filter[column]) return true;
        const columnIndex = this.header.indexOf(column);
        return row[columnIndex]
          .toString()
          .toLowerCase()
          .includes(this.filter[column].toLowerCase());
      })
    );

    if (this.sortColumn) {
      const columnIndex = this.header.indexOf(this.sortColumn);
      filteredData.sort((a, b) => {
        const valueA = a[columnIndex];
        const valueB = b[columnIndex];
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
            ${this.header.map((column) =>
              this.visibleColumns.includes(column)
                ? html`
                    <th
                      class="${this.sortColumn === column
                        ? `sort-${this.sortDirection}`
                        : ""}"
                      @click="${() => this.handleColumnFilter(column)}"
                    >
                      ${column}
                    </th>
                  `
                : null
            )}
          </tr>
        </thead>
        <tbody>
          ${this.processedData.slice(0, 50).map(
            (row) => html`
              <tr>
                ${row.map((cell, index) =>
                  this.visibleColumns.includes(this.header[index])
                    ? html`<td>${cell}</td>`
                    : null
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
