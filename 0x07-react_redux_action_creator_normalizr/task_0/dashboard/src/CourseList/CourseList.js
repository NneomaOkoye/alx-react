import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

const CourseList = ({ listCourses }) => {

  const styles = StyleSheet.create({
    table: {
      width: '100%',
      border: '1px solid #ccc'
  },
  thead: {
      textAlign: 'center'
    },
  
    th: {
      textAlign: 'center',
      borderBottom: '2px solid #ccc'
    }
   
  
  
  })
  return (
    <table id="CourseList" className={css(styles.table)}>
      <thead className={css(styles.th)}>
        <CourseListRow textFirstCell="Available courses" isHeader={true} className={css(styles.thead)}/>
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" isHeader={false} />
        ) : (
          listCourses.map(course => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isHeader={false}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
