import axios from 'axios'
export const testFn = (num: number, fn: Function) => {
  if (num > 10) fn(num)
}

export const request = async () => {
  const { data } = await axios.get('fake.url')
  return data
}
