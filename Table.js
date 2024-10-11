import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

class DataTable extends LitElement {
  static properties = {
    header: { type: Array },
    data: { type: Array },
    filters: { type: Object },
    sortColumn: { type: String },
    sortDirection: { type: String },
    visibleColumns: { type: Array },
  };

  constructor() {
    super();
    this.header = [];
    this.data = [];
    this.filters = {};
    this.sortColumn = null;
    this.sortDirection = "asc";
    this.visibleColumns = [...this.header];
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

  // Handle column selection for visibility
  handleColumnVisibilityChange(e) {
    const { name, checked } = e.target;
    if (checked) {
      // Ensure reactivity by assigning a new array
      this.visibleColumns = [...this.visibleColumns, name];
    } else {
      this.visibleColumns = this.visibleColumns.filter((col) => col !== name);
    }
  }

  // Handle filter input change
  handleFilterChange(e, column) {
    this.filters = { ...this.filters, [column]: e.target.value };
  }

  // Sort the data by column
  handleSort(column) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortColumn = column;
      this.sortDirection = "asc";
    }
  }

  // Apply sorting and filtering to the data
  get processedData() {
    let filteredData = this.data.filter((row) => {
      return Object.keys(this.filters).every((column) => {
        if (!this.filters[column]) return true;
        const columnIndex = this.header.indexOf(column);
        return row[columnIndex]
          .toString()
          .toLowerCase()
          .includes(this.filters[column].toLowerCase());
      });
    });

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
      <!-- Column Visibility Checkboxes -->
      <div>
        ${this.header.map(
          (column) => html`
            <label>
              <input
                type="checkbox"
                name="${column}"
                .checked="${this.visibleColumns.includes(column)}"
                @change="${this.handleColumnVisibilityChange}"
              />
              ${column}
            </label>
          `
        )}
      </div>

      <!-- Filters -->
      <div>
        ${this.header.map((column) =>
          this.visibleColumns.includes(column)
            ? html`
                <label>
                  ${column}:
                  <input
                    type="text"
                    placeholder="Filter by ${column}"
                    @input="${(e) => this.handleFilterChange(e, column)}"
                  />
                </label>
              `
            : null
        )}
      </div>

      <!-- Table -->
      <table>
        <thead>
          <tr>
            ${this.header.map((column) =>
              this.visibleColumns.includes(column)
                ? html`
                    <th
                      class="${this.sortColumn === column
                        ? `sort-${this.sortDirection}`
                        : ""}"
                      @click="${() => this.handleSort(column)}"
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
