//don't need to import react with Next.js

class Prices extends React.Component {
    state = {
        currency: 'USD'
    }


    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <h1> Welcome to BitzPrice </h1>
                        Bitcoin rate for {this.props.bpi.USD.description}
                    : <span class="badge badge-primary"> {this.props.bpi.USD.code} </span> <strong> {this.props.bpi.USD.rate} </strong>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Prices