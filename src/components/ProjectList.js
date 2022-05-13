import React, { useState } from 'react'
// import photo from '../assets/img/marek-piwnicki-Vw608pbz7zs-unsplash.jpeg'
// import codeQuiz from '../assets/img/code-quiz.jpeg'

function ProjectList(props) {

    // pull props down from Portfolio
    const { projects } = props

    const [textVisibility, setTextVisibility] = useState(-1)

    // when the mouse is over any box
    // fire this event and set the state of 'textVisbility' to equal current index number
    function handleMouseEnter(index) {
        console.log("ENTERED", index)
        setTextVisibility(index)
        sayHello()
    }

    function sayHello() {
        console.log('HIYAAAA')
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
                        backgroundImage: `url(${project.imageUrl})`,
                        backgroundSize: '150%',
                        backgroundPosition: 'center'
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLave(index)}
                    // display={textVisibility === index ? 'none' : 'block'}
                    key={index}>
                    {/* <div>{project.image}</div> */}
                    <div
                        // compares the current box's index number to the 'textVisibility' state
                        // set by the 'handleMouseOver' function, if they're equal...display the text
                        className={`${textVisibility === index ? 'textOn' : 'textOff'}`}

                    >
                        <h3 style={{ padding: '1rem' }}>
                            <a href={project.appUrl} target="_blank">
                                {project.name}
                            </a>
                        </h3>
                        <a href={project.link} target="_blank" style={{ padding: '1rem' }}>
                            <i className="fa-brands fa-github" style={{
                                fontSize: "3rem"
                            }}>
                            </i>
                        </a>
                        <p style={{ padding: '1rem' }}>{project.description}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default ProjectList