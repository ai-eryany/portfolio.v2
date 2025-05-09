function copy(obj: any) {
  if (!obj) return obj;
  return JSON.parse(JSON.stringify(obj));
}

function merge(args: any) {
  if (!args) return {};
  return { ...copy(args.obj1), ...copy(args.obj2) };
}

function insertToArr(args: any) {
  if (!args) return [];
  return [...copy(args.arr), copy(args.ele)];
}

function mergeArr(args: any) {
  if (!args) return [];
  return [...copy(args.arr1), ...copy(args.arr2)];
}

const Immutable = {
  copy,
  merge,
  insertToArr,
  mergeArr,
};

export default Immutable;
