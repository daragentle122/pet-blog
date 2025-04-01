import Card from 'react-bootstrap/Card';
import dog1 from "../assets/dog1.jpg"
import dog5 from "../assets/dog5.jpg"
import dog4 from "../assets/dog4.jpg"
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className="home-page">
                <div className="background">
                    <div className="bg-text">
                        <h1>Discover pet blog to see your favorite pets</h1>
                        <p className="p-text">Choose your favorite pets to be your companion</p>
                        <Link to="/dogs"><button className="show-me">SHOW ME</button></Link>
                    </div>
                </div>
                <div className="companion">
                    <h1>BEST COMPANION OF THE YEAR 2025</h1>
                    <div className="d-flex justify-content-center mt-4 gap-5">
                        <Card className="bg-dark text-white" style={{ width: '24rem' }}>
                            <Card.Img src={dog1} alt="Card image" className="img-top" />
                            <Card.ImgOverlay style={{ marginTop: '15px' }}>
                                <Card.Title>Labrador Retriever</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="bg-dark" style={{ width: '24rem' }}>
                            <Card.Img src={dog4} alt="Card image" className="img-top" />
                            <Card.ImgOverlay style={{ marginTop: '2px' }}>
                                <Card.Title style={{color: 'hsl(61, 95.30%, 49.80%)'}}>Beagle</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="bg-dark text-white" style={{ width: '24rem' }}>
                            <Card.Img src={dog5} alt="Card image" className="img-top" />
                            <Card.ImgOverlay style={{ marginTop: '150px' }}>
                                <Card.Title style={{color: 'hsl(0, 0.00%, 5.90%)'}}>Poodle</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
