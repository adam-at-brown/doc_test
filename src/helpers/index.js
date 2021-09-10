export function filterPaths(data, parent) {
  const split = data.map(path => path.split("/"))
  const filteredPaths = split.flatMap(path => path.some(el => el === parent) ? path[path.length -2] : []).filter(name => name !== parent);
  return filteredPaths;
}

export function kebabToTitleCase(string) {
  const splitWord = string.split("-").map(word => {
    return `${word[0].toUpperCase()}${word.slice(1)}`
  });
  return splitWord.join(" ");
}
