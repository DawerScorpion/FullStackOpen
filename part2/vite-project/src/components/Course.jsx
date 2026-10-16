const Course = ({course}) => {
    return (
        <div>
            <Header courseName={course.name}/>
            <Content parts={course.parts}/>
        </div>
    )
}

const Header = ({ courseName }) => {
    return <h2>{courseName}</h2>
}

const Content = ({ parts }) => {
    const total = parts.reduce((sum, part) => {
        // console.log('sum:', sum)
        // console.log('part:', part)
        // console.log('part.exercises:', part.exercises)
        return sum + part.exercises
    }, 0)

    return (
        <div>
            {parts.map(part => (
                <Part key={part.id} part={part} />
            ))}
            <p> Total of {total} exercises </p>


        </div>
    )
}

const Part = ( {part} ) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

export default Course