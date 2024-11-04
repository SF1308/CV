/**
 * Filters out empty values from an object, handling both arrays and string values
 * @param obj - The object to filter
 * @returns An array of key-value pairs (entries) containing only non-empty values
 * 
 * Empty values are:
 * - For arrays: empty arrays (length = 0)
 * - For other values: empty strings or strings containing only whitespace
 * - TODO - Add support for other types of values (e.g., numbers, booleans)
 * - TODO - Add support for nested objects
 * - TODO - Add support for custom filtering logic  
 * - TODO - Add TEST
*/
export const filterNonEmptyValues = (obj: Record<string, any>) => {
  return Object.entries(obj).filter(([_, value]) => 
    Array.isArray(value) ? value.length > 0 : Boolean(value?.toString().trim())
  );
}; 