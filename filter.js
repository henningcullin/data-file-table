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

export const filters = {
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
  is_less_than: condition({
    label: "Is Less Than",
    number: (table, filter) => table < filter,
  }),
  is_greater_than: condition({
    label: "Is Greater Than",
    number: (table, filter) => table > filter,
  }),
};

/**
 * Build the available filter options for each column type
 *
 * @returns {{string: {label: string, value: string}[], number: {label: string, value: string}[], date: {label: string, value: string}[], boolean: {label: string, value: string}[]}}
 */
export function getFilterMap() {
  return Object.entries(filters).reduce(function (
    acc,
    [identifier, conditionObject]
  ) {
    Object.entries(conditionObject).forEach(function ([key, value]) {
      if (typeof value === "function") {
        if (typeof acc[key] !== "object" || !Array.isArray(acc[key])) {
          acc[key] = [];
        }

        acc[key].push({ label: conditionObject.label, value: identifier });
      }
    });

    return acc;
  },
  {});
}
