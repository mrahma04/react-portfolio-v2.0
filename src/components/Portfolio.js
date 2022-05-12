import ProjectList from "./ProjectList"

function Portfolio() {

    // pass props down to ProjectList
    const projects = [
        {
            name: 'Tech Blog',
            link: 'https://github.com/mrahma04/tech-blog-v2.0',
            description: 'JS, Handlebars, CSS, HTML',
            imageUrl: '/assets/img/tech-blog.jpeg'
        },
        {
            name: 'Password Generator',
            link: 'https://github.com/mrahma04/password-generator-v2.0',
            description: 'JS, CSS, HTML',
            imageUrl: '/assets/img/password-generator.jpeg'
        },
        {
            name: 'Code Quiz',
            link: 'https://github.com/mrahma04/code-quiz-v2.0',
            description: 'JS, HTML',
            imageUrl: '/assets/img/code-quiz.jpeg'
        },
        {
            name: 'Note Taker',
            link: 'https://github.com/mrahma04/note-taker-v4.0',
            description: 'JS, CSS, HTML',
            imageUrl: '/assets/img/note-taker.jpeg'
        },
        {
            name: 'E-commerce Backend',
            link: 'https://github.com/mrahma04/ecommerce-backend-v2.0',
            description: 'JS',
            imageUrl: '/assets/img/ecommerce-backend.jpeg'
        },
    ]

    return (
        <section>
            <ProjectList
                projects={projects}
            ></ProjectList>
        </section>
    )
}

export default Portfolio