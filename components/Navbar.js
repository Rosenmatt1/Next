import Link from 'next/link';

//CSS is component based.  The styling of ul here will not effect ul's in other components.

const Navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
            <a class="navbar-brand" href="#">BitzPrice</a>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mr-4">
                        <Link href="/"> Home </Link>
                    </li>
                    <li class="nav-item">
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