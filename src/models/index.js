// read only properties. It will raise an error when writing
type House = {
  +url: string,
  +name: string,
  +region: string,
};

export default House;
