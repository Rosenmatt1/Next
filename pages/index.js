import Link from 'next/link';


const Index = () => (
    <div>
        <ul>
            <li> <Link href="/"> Home </Link> </li>
            <li> <Link href="/about"> About </Link> </li>
        </ul>
        <h1>Welcome to BitzPrice</h1>
    </div>

)

export default Index;