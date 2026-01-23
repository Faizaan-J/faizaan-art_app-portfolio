type SchoolYear = "Freshman" | "Sophomore" | "Junior" | "Senior" | "Graduate";

const referenceTable: SchoolYear[] = [
  "Graduate",
  "Senior",
  "Junior",
  "Sophomore",
  "Freshman"
]

const FIRST_SCHOOL_MONTH = 9; // school usually starts near the start of september
const LAST_SCHOOL_MONTH = 6;   // usually ends near end of june

const getCurrentYearFromGraduationYear = (graduationYear: number, date: Date = new Date()): SchoolYear => { // I just made some BULLLLLLSHITTTTT!!!!!!
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (
    year > graduationYear ||
    (year === graduationYear && month > LAST_SCHOOL_MONTH)
  ) {
    return "Graduate";
  }

  const academicYear =
    month >= FIRST_SCHOOL_MONTH ? year : year - 1;

  const yearsUntilGraduation = graduationYear - academicYear;

  const schoolYear = referenceTable[yearsUntilGraduation];
  return schoolYear || "Graduate";
}

export default getCurrentYearFromGraduationYear;