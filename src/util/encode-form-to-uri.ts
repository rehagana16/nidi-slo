import { OrderFormData, OrderFormDataMessageKeyEnum } from "@/interface/order-form.interface";

export function encodeOrderFormDataToURI(data: OrderFormData, enumMapping: typeof OrderFormDataMessageKeyEnum): string {
  // Convert the object into an array of "enumKey: value" strings
  const keyValuePairs = (Object.keys(data) as Array<keyof OrderFormData>).map((key) => {
    const enumKey = enumMapping[key]; // Get the enum value for the key
    return `${enumKey}: ${data[key]}`; // Format as "enumKey: value"
  });

  // Join the array into a single string with line breaks or spaces
  const formattedString = keyValuePairs.join('\n'); // Use '\n' for line breaks or ' ' for spaces

  // URI-encode the formatted string
  return encodeURIComponent(formattedString);
}