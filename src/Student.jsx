// 3. Code the `<Student>` component as a function component that:
//     - Renders the student's `name` & `bio` properties
//     - Renders a `<Score>` component for each score object in the student's `scores` property.


const Student = (props) => {
  console.log(props.student)
  return ( 
    <div>
      <p>Name: {props.student.name}</p>
      <p>Bio: {props.student.bio}</p> 
      {props.student.scores.map((score, idx) => (
        <div key={idx}>
          <p>Date: {score.date} Score:{score.score} </p>
        </div>
      ))}
    </div>
  );
}

export default Student;