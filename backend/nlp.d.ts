declare module '../nlp' {
    /**
     * Parses a time string in the format "h:mm AM/PM" or "h AM/PM" and converts it to a 24-hour format time string.
     * @param timeString - The time string to parse.
     * @returns A string representing the time in 24-hour format (hh:mm:ss).
     */
    function parseTime(timeString: string): string;
  
    /**
     * Parses a natural language query and converts it to a SQL query.
     * This example handles queries with the phrase "online between" followed by time ranges.
     * @param query - The natural language query to parse.
     * @returns A SQL query string based on the parsed times from the input query.
     */
    function parseQuery(query: string): string;
}

export function parseTime(timeString: string): string;
export function parseQuery(query: string): string;
