import { Seq } from 'immutable';

export default function printBestStudents(obj) {
  const lazySeq = Seq(obj)
    .filter((item) => item.score >= 70)
    .map((student) => {
      return {
        ...student,
        firstName:
          student.firstName.charAt(0).toUpperCase() +
          student.firstName.slice(1),
        lastName:
          student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
      };
    });

  console.log(lazySeq.toJS());
}
