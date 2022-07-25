
const myFunctions = {
  hello: "./hello",
};

const loadMyFunctions = (funcsObj: { [key: string]: string }): void => {
  for (const name in funcsObj) {
    if ((!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === name) && Object.hasOwnProperty.call(funcsObj, name)) {
      exports[name] = require(funcsObj[name]);
    }
  }
};
loadMyFunctions(myFunctions);
