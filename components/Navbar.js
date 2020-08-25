import Link from 'next/link';

//CSS is component based.  The styling of ul here will not effect ul's in other components.

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
            <a className="navbar-brand" href="#">BitzPrice</a>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-4">
                        <Link href="/"> Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about"> About </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    // <style jsx>{`
    //     ul {
    //         background: #333;
    //         color: #fff;
    //         list-style: none;
    //         display: flex;

    //     }

    //     ul li {
    //         font-size: 18px;
    //         margin-right: 20px;
    //         color: !important #fff;
    //         text-decoration: none;
    //     }
    // `}</style> 
)

export default Navbar