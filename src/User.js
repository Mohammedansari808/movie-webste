export function User(props) {
    return (
        <section className='section-part'>
            <img src={props.link}></img>
            <h1 className='user-name'> Hello {props.name}</h1>
        </section>
    );
}
