import React, { Component } from 'react';
import Courseform from './components/CourseForm';
import CourseList from './components/CourseList';

class App extends Component {

  state = {
    course: [
      {name : 'HTML'},
      {name : 'JAVASCRIPT'},
      {name : 'PHP'}
    ],
    current : '',
    required : false
  }

  //Update course
  updateCourse = (e) =>{
     this.setState({
      current: e.target.value
     })
  }
  //Add course
  addCourse = (e) =>{
    e.preventDefault();
    let current = this.state.current;
    if (current === ''){
        this.setState({required : true})
    }else{
      let {course} = this.state;
      course.push({name : current});
      this.setState({
        course,
        current: ''
      });
      this.setState({required : false})
    }
 }
 //Delete course
 deleteCourse = (index) =>{
  let {course} = this.state;
  course.splice(index,1);
  this.setState({course});
 }

 //Edit Course
 editCourse = (index,value) =>{
    let course = this.state.course;
    let c = course[index];
    c['name'] = value;
    this.setState({
      course
    })

 }
  
 //form Control course input
  missingInput =  () => {
    let required = this.state.required;
    if (required){
      return (
        <div className="alert-danger">
          <p> Information is required </p>
        </div>
      )
    }    
  }

  render() {
    const {course} = this.state;
    const length = course.length;
    
    const courseList =  length ? (
      course.map((course,index) => {
        return (
             <CourseList details={course} key={index} deleteCourse={this.deleteCourse} index={index} editCourse={this.editCourse}/>
          )
        })
    ) :  (
      <p> There is no item to show </p>
    )

    



    return (
      <section className="App">
        <h2>ADD COURSE</h2>
        <Courseform updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current} />
        {this.missingInput()}
        <ul>
         {courseList}
        </ul>   
      </section>
    );
  }

}

export default App;
