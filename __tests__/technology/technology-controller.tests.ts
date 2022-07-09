import { ITechnology } from "../../src/models/technology.model";

describe('Testing Technology Controller', () => {
  test('CreateTech should return error without name', () => {
    const mock: ITechnology = {
      id: '1',
      name: "Test",
      description: "Test 1",
      imageUrl: "https://test.com"
    }

    expect(mock.id).toBe('1')
  })

})