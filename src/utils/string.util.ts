/**
 * CHANGE THE FIRST CHARACTER TO STRING
 * @param string
 * @returns
 */
export const FirstCharcterToUpper = (string: string) => {
  return string.charAt(0).toUpperCase() + string.substring(1);
};

export const FirstCharcterToLower = (string: string) => {
  return string.charAt(0).toLowerCase() + string.substring(1);
};


export const sanitize = (string:string) => {
return string.replace(String.fromCharCode(92), "\\").trim();
}