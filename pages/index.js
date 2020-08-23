import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to BitzPrice</h1>
            <p>Check current Bitcoin rate</p>
            {/* {props.bpi.time.updated} */}
            <Prices bpi={props.bpi} />
        </div>
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await res.json();

    return {
        bpi: data.bpi
    }
}

// class Index extends React.Component {
//     state = {
//         data: []
//     }

//     componentDidMount() {
//         const res = fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//             .then(response => {
//                 this.setState({
//                     data: response.json()
//                   })
//             });   
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.data}
//             </div>
//         )
//     }
// }

export default Index;