const factory = require('../locations');

describe('Location factory', () => {
  it('Generate a simple Location', () => {
    const location = factory.location([1, 2, 4, 5]);

    expect(location).toEqual({
      country: expect.any(String),
      state: expect.any(String),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });

  it('Generate list of Location', () => {
    const locations = factory.generate(3);

    expect(locations).toHaveLength(3);
  });
});
