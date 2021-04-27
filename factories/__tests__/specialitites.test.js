const factory = require('../specialities');

describe('Speciality factory', () => {
  it('Generate a simple Speciality', () => {
    const speciality = factory.speciality([1, 2, 4, 5]);

    expect(speciality).toEqual({
      name: expect.any(String),
      doctor_id: expect.any(Number),
      date_init: expect.any(Date),
      date_finish: expect.any(Date),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });

  it('Generate list of Speciality', () => {
    const specialities = factory.generate([1, 2, 3, 4, 5], 3);

    expect(specialities).toHaveLength(3);
  });
});
