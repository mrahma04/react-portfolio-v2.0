function Contact() {
    return (
        <section>
            <div className="contact">
                <h2>Contact Me</h2>
                <form id="contact-form">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email"/>
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" cols="30" rows="5"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact