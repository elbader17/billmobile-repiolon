export const orderByName = (a, b) => {
  if (a.attributes.name > b.attributes.name) return 1
  if (a.attributes.name < b.attributes.name) return -1
  return 0
}