import Link from 'next/link';


const About = () => (
    <div>
        <ul>
            <li> <Link href="/"> Home </Link> </li>
            <li> <Link href="/about"> About </Link> </li>
        </ul>
        <h1>About BitzPrice</h1>
        <p>Application to view Bitcoin prices</p>
        About
    </div>
)

export default About;