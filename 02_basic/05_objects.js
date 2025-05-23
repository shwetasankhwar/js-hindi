//destructuring

const course ={
    courseName: "js in hindi",
    price:"999",
    courseInstructor:"shweta"

}

//console.log(course.courseInstructor)

const {courseInstructor :instructure} = course
console.log(instructure);

// const navbar = ({company}) => {

// }
// navbar(company ="shweta")

// {
//     "name ":"shweta",
//     "courseName": "js in hindi",
//     "price": "free"

// }

[
    {},
    {},
    {}
]