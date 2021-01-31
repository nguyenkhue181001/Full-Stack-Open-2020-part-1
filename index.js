import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.numberOfExercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name = {props.name1} numberOfExercises = {props.ex1} />
      <Part name = {props.name2} numberOfExercises = {props.ex2} />
      <Part name = {props.name3} numberOfExercises = {props.ex3} />
    </div>
  )
}

const Total = (exercises) => {
  return (
    <div>
      <p>
        Number of exercises {exercises.ex1 + exercises.ex2 + exercises.ex3}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content name1 = {part1} name2 = {part2} name3 = {part3} ex1 = {exercises1} ex2 = {exercises2} ex3 = {exercises3} />
      <Total ex1 = {exercises1} ex2 = {exercises2} ex3 = {exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))