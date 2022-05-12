import React, { useState } from 'react'
// import photo from '../assets/img/marek-piwnicki-Vw608pbz7zs-unsplash.jpeg'
// import codeQuiz from '../assets/img/code-quiz.jpeg'

function ProjectList(props) {

    // pull props down from Portfolio
    const { projects } = props

    const [textVisibility, setTextVisibility] = useState(-1)

    // console.log('FROM INSIDE PROJECTLIST', projects)

    function handleMouseEnter(index) {
        console.log("ENTERED", index)
        setTextVisibility(index)
    }

    console.log("TEXT VISIBILITY AFTER ENTERING ===", textVisibility)


    function handleMouseLave(index) {
        console.log("LEAVING", index)
        setTextVisibility(-1)
    }

    console.log("TEXT VISIBILITY AFTER LEAVING ===", textVisibility)

    return (
        <section className='portfolio'>
            {projects.map((project, index) => (
                <div
                    className={`project`}
                    style={{
                        backgroundImage: `url(${project.imageUrl})`
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLave(index)}
                    // display={textVisibility === index ? 'none' : 'block'}
                    key={index}>
                    {/* <div>{project.image}</div> */}
                    <div className={`${textVisibility === index ? 'textOn' : 'textOff'}`}>
                        <h3>{project.name}</h3>
                        <a href={project.link} target="_blank">
                            <i className="fa-brands fa-github" style={{
                                fontSize: "2rem"
                            }}>
                            </i>
                        </a>
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default ProjectList