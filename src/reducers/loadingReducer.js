export default (state = false, action) => {
//   
  if (action.type.includes('REQUEST')) {
    return true;
  }
  return false;
};
