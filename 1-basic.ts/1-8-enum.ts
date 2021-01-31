{
  // Enum
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUSEDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUSEDAY: 1, WEDNSEDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // 이게 더 바랍직하다고 봄
  type DaysOfWeek = 'Monday' | 'Tuseday' | 'Wednesday';

  enum Days {
    Monday = 1,
    Tuseday, //1
    Wednesday, //2
    Thursday, //3
    Friday,
    Saturday,
    Sunday,
  }
}
