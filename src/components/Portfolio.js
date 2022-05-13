import ProjectList from "./ProjectList"

function Portfolio() {

    // pass props down to ProjectList
    const projects = [
        {
            name: 'Tech Blog',
            appUrl: 'https://whispering-depths-44425.herokuapp.com/',
            link: 'https://github.com/mrahma04/tech-blog-v2.0',
            description: 'Built using JS, Handlebars, CSS, HTML',
            imageUrl: '../../public/assets/img/tech-blog.jpeg'
        },
        {
            name: 'Password Generator',
            appUrl: 'https://mrahma04.github.io/password-generator-v2.0/',
            link: 'https://github.com/mrahma04/password-generator-v2.0',
            description: 'Built using JS, CSS, HTML',
            imageUrl: 'assets/img/password-generator.jpeg'
        },
        {
            name: 'Code Quiz',
            appUrl: 'https://mrahma04.github.io/code-quiz-v2.0/',
            link: 'https://github.com/mrahma04/code-quiz-v2.0',
            description: 'Built using JS, HTML',
            imageUrl: './public/assets/img/code-quiz.jpeg'
        },
        {
            name: 'Note Taker',
            appUrl: 'https://boiling-savannah-16450.herokuapp.com/',
            link: 'https://github.com/mrahma04/note-taker-v4.0',
            description: 'Built using JS, CSS, HTML',
            imageUrl: '/assets/img/note-taker.jpeg'
        },
        {
            name: 'E-commerce Backend',
            appUrl: 'https://drive.google.com/file/d/1cFxFRNQDKW85y766AKcPea557bqKd1hN/view',
            link: 'https://github.com/mrahma04/ecommerce-backend-v2.0',
            description: 'Built using JS',
            imageUrl: '/assets/img/ecommerce-backend.jpeg'
        },
        {
            name: 'Team Profile Generator',
            appUrl: 'https://watch.screencastify.com/v/JRof8Ubkxqj1d8BgtiwK',
            link: 'https://github.com/mrahma04/team-profile-generator-v2.0',
            description: 'Built using JS, HTML',
            imageUrl: '/assets/img/team-profile-generator.jpeg'
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