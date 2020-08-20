import Link from 'next/link';

//CSS is component based.  The styling of ul here will not effect ul's in other components.

const Navbar = () => (
    <div>
        <ul>
            <li> <Link href="/"> Home </Link> </li>
            <li> <Link href="/about"> About </Link> </li>
        </ul>

        <style jsx>{`
            ul {
                background: #333;
                color: #fff;
                list-style: none;
                display: flex;
                
            }

            ul li {
                font-size: 18px;
                margin-right: 20px;
                color: !important #fff;
                text-decoration: none;
            }

        `}</style>
    </div>
);

export default Navbar