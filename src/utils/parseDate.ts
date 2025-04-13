export function parseDate(input: string): string {
    // Handle YYYYMMDD
    if (/^\d{8}$/.test(input)) {
      const year = input.slice(0, 4);
      const month = input.slice(4, 6);
      const day = input.slice(6, 8);
      return `${year}-${month}-${day}`;
    }
  
    // Handle DD/MM/YYYY or MM/DD/YYYY (we assume DD/MM/YYYY here)
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(input)) {
      const [day, month, year] = input.split('/');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
  
    // Try default parser as fallback
    const date = new Date(input);
    if (!isNaN(date.getTime())) {
      return date.toISOString().split('T')[0];
    }
  
    throw new Error(`Invalid date format: ${input}`);
  }