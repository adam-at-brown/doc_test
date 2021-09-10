export function filterPaths(data, parent) {
  const split = data.map(path => path.split("/"))
  const filteredPaths = split.flatMap(path => path.some(el => el === parent) ? path[path.length -2] : []).filter(name => name !== parent);
  return filteredPaths;
}
