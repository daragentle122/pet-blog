import Card from 'react-bootstrap/Card';
import dara from "../assets/dara.jpg"
import titya from "../assets/me.jpg"

export default function About() {
    return (
        <>
            <div className="about-page">
                <div className="background-about">
                    <div className="bg-text">
                        <h1 style={{ fontSize: '100px', textAlign: 'center' }}>EVERYTHING YOU <br /> NEED TO KNOW <br /> ABOUT US</h1>
                    </div>
                </div>
                <div class="d-flex mt-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div class="text-section-about">
                        <h1 class="title">ABOUT US</h1>
                        <p class="paragraph">In today's digital age, pet owners and enthusiasts seek reliable online platforms to gather
                            information about pet care. This project focuses on creating a pet's blog website dedicated to
                            providing comprehensive details about various dog and cat breeds, their nutritional needs, and
                            recommended diets. The use of React.js will allow for a modular and maintainable codebase, while
                            JavaScript will enable dynamic and interactive features.</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center mt-5">
                    <div class="col-sm-3 col-md-3 col-lg-3 col-xl-3"></div>
                    <div class="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={titya} />
                            <Card.Body style={{ height: '100px', paddingTop: '20px' }}>
                                <Card.Title style={{ textAlign: 'center', color: '#325d3f', fontSize: '30px' }}>Panha Viraktitya</Card.Title>
                                <Card.Text style={{ textAlign: 'center', marginTop: '14px' }}>
                                    UX/UI Designer
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={dara} />
                            <Card.Body style={{ height: '100px', paddingTop: '20px' }}>
                                <Card.Title style={{ textAlign: 'center', color: '#325d3f', fontSize: '30px' }}>Ly Dara</Card.Title>
                                <Card.Text style={{ textAlign: 'center', marginTop: '14px' }}>
                                    Web Developer
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>
                </div>
            </div>
        </>
    )
}