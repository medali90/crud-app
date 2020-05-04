import React from 'react';

const Courseform = (props) => {
  const {updateCourse,addCourse,current} = props;

  return (
      <form onSubmit={addCourse}>
          <input type="text" value={current} onChange={updateCourse}/>
          <button type="submit">Add course</button>
      </form>
  )

}

export default Courseform;