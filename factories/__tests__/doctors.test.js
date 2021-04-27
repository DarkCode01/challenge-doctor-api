const factory = require('../doctors');

describe('Doctor factory', () => {
  test('Generate a simple Doctor', () => {
    const doctor = factory.doctor([1, 2, 4, 5]);

    expect(doctor).toEqual({
      names: expect.any(String),
      years: expect.any(Number),
      location_id: expect.any(Number),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });

  test('Generate list odf Doctor', () => {
    const doctors = factory.generate([1, 2, 3, 4, 5], 3);

    expect(doctors).toHaveLength(3);
  });
});
