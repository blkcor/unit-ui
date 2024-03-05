import { testFn, request } from './example'
import { expect, test, describe, vi, Mocked } from 'vitest'
import axios from 'axios'
//mock axios
vi.mock('axios')
const mockedAxios = axios as Mocked<typeof axios>

describe('basic test', () => {
  test('test common matcher', () => {
    const name = 'viking'
    expect(name).toBe('viking')
    expect(2 + 2).toBe(4)
    expect(2 + 2).not.toBe(5)
  })

  test('test true or false', () => {
    expect(1).toBeTruthy()
    expect(0).toBeFalsy()
  })

  test('test number', () => {
    expect(4).toBeGreaterThan(3)
    expect(3).toBeLessThan(4)
    expect(3).toBeGreaterThanOrEqual(3)
    expect(3).toBeLessThanOrEqual(3)
  })

  test('test object', () => {
    const obj = { name: 'viking', age: 18 }
    //toBe:strict equal, toEqual:deep equal(value equal)
    expect(obj).toEqual({ name: 'viking', age: 18 })
    expect(obj).toHaveProperty('name')
    expect(obj).toHaveProperty('age')
    expect(obj).toHaveProperty('age', 18)
  })
})

describe('test functions', () => {
  test('create a mock function', () => {
    const callback = vi.fn()
    testFn(11, callback)
    expect(callback).toBeCalled()
    expect(callback).toBeCalledWith(11)
  })

  test('spy on method', () => {
    const foo = {
      getName: () => 'viking'
    }
    const spy = vi.spyOn(foo, 'getName')
    expect(foo.getName()).toBe('viking')
    //these two are the same
    expect(spy).toBeCalled()
    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledTimes(1)
  })

  test('mock axios(third party module)', async () => {
    mockedAxios.get.mockImplementation(() => Promise.resolve({ data: 'fake data' }))
    const data = await request()
    expect(data).toBe('fake data')
  })
})
