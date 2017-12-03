export default (classesObj: Object): Array<string> => {
  return Object.keys(classesObj).filter(key => classesObj[key]);
};
