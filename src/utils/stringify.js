export function stringifyWithCustomConversion(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return JSON.stringify(obj);
    }
  
    if (Array.isArray(obj)) {
      return JSON.stringify(obj.map((item) => stringifyWithCustomConversion(item)));
    }
  
    const convertedObj = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        convertedObj[key] = stringifyWithCustomConversion(obj[key]);
      }
    }
  
    return JSON.stringify(convertedObj);
  }