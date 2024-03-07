export const orderByName = (dataArray: any) => {
  return dataArray.slice().sort((a: {name:{common:string}}, b: {name:{common:string}}) => {
    return a.name.common.localeCompare(b.name.common)
  })
}