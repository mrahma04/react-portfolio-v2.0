function Header(props) {

    const {
        pages = [],
        setCurrentPage
    } = props

    function clickHandler(name) {
        console.log(name)
    }

    return (
        <div>
            <header>
                <h1>Mohammad Rahman</h1>
                <nav>
                    <ul>
                        {pages.map((page, index) => {
                            return (
                                <li key={index}>
                                    <span onClick={() => {
                                        setCurrentPage(page.name)
                                    }}>
                                        {page.name}
                                    </span>
                                </li>
                            )
                        })}
                        {/* <li>
                            <a href="#">About Me</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Resume</a>
                        </li> */}
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header