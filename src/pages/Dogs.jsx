import Card from 'react-bootstrap/Card';
import home from "../assets/home.png"
import dog1 from "../assets/dog1.jpg"
import dog2 from "../assets/dog2.jpg"
import dog3 from "../assets/dog3.jpg"
import dog4 from "../assets/dog4.jpg"
import dog5 from "../assets/dog5.jpg"
import dog6 from "../assets/dog6.jpg"
import dog7 from "../assets/dog7.jpg"
import dog8 from "../assets/dog8.jpg"
import dog9 from "../assets/dog9.jpg"
import dog10 from "../assets/dog10.jpg"

export default function Dogs() {
    return (
        <>
            <div class="container">
                <div class="text-section" style={{textAlign: 'center'}}>
                    <h1 class="title" style={{fontSize: '48px'}}>
                        TOP 10 MOST FRIENDLIEST DOG BREEDS 2025 <br />(PERFECT COMPANION)
                    </h1>
                    <p class="author">Written By Titya</p>
                    <p class="date">1ST APRIL 2025</p>
                </div>
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={home} alt="" />
                    </div>
                </div>
            </div>
            <div class="d-flex" style={{marginTop: '100px'}}>
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={dog1} alt="Labrador" />
                    </div>
                </div>
                <div class="text-section">
                    <h1 class="title">LABRADOR RETRIEVER</h1>
                    <p class="paragraph">Labrador Retrievers are one of the most popular dog breeds, known for their friendly, outgoing, and intelligent nature. They are highly social and affectionate, making them excellent family pets, therapy dogs, and working dogs (such as in search and rescue or guide dog services).</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>
                </div>
            </div>
            <div class="d-flex">
                <div class="text-section">
                    <h1 class="title">GOLDEN RETRIEVER</h1>
                    <p class="paragraph">Golden Retrievers are friendly, intelligent, and affectionate dogs, making them one of the most popular family pets worldwide. They are known for their gentle nature, loyalty, and eagerness to please, which makes them excellent therapy dogs, service dogs, and companions.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>
                </div>
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={dog2} alt="Golden" />
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={dog3} alt="cavalier" />
                    </div>
                </div>
                <div class="text-section">
                    <h1 class="title">CAVALIER KING CHARLES SPANIEL</h1>
                    <p class="paragraph">The Cavalier King Charles Spaniel is a small, affectionate, and elegant toy breed known for its friendly personality and love for companionship. They are gentle, adaptable, and great for families, seniors, and apartment living.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>
                </div>
            </div>
            <div class="d-flex">
                <div class="text-section">
                    <h1 class="title">REAGLE</h1>
                    <p class="paragraph">A small to medium-sized hound known for its curious, playful, and energetic nature. Beagles have a strong sense of smell and love to explore, making them great hunting and companion dogs.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>

                </div>
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={dog4} alt="Beagle" />
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={dog5} alt="Poodle" />
                    </div>
                </div>
                <div class="text-section">
                    <h1 class="title">POODLE</h1>
                    <p class="paragraph">An intelligent, trainable, and elegant breed with curly fur, making them hypoallergenic. Poodles are highly social and come in Toy, Miniature, and Standard sizes, excelling in obedience and agility.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>
                </div>
            </div>
            <div class="d-flex">
                <div class="text-section">
                    <h1 class="title">IRISH SETTER</h1>
                    <p class="paragraph">A graceful, affectionate, and energetic breed with a stunning red coat. Irish Setters are known for their playful and outgoing personality, requiring plenty of exercise and social interaction.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>
                </div>
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={dog6} alt="Irish" />
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={dog7} alt="Boston" />
                    </div>
                </div>
                <div class="text-section">
                    <h1 class="title">BOSTON TERRIER</h1>
                    <p class="paragraph">A small, intelligent, and friendly breed with a tuxedo-like coat. Known as the "American Gentleman," Boston Terriers are affectionate, playful, and great for families and city living.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>
                </div>
            </div>
            <div class="d-flex">
                <div class="text-section">
                    <h1 class="title">PEMBROKE WELSH CORGI</h1>
                    <p class="paragraph">A loyal, smart, and active breed with short legs and a fluffy coat. Corgis were bred for herding and are known for their bold and playful personality. They are excellent family pets with a strong sense of companionship.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>
                </div>
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={dog8} alt="corgi" />
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={dog9} alt="boxer" />
                    </div>
                </div>
                <div class="text-section">
                    <h1 class="title">BOXER</h1>
                    <p class="paragraph">A muscular, energetic, and loyal breed with a playful and protective nature. Boxers are great family dogs and need regular exercise, training, and socialization to thrive.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>
                </div>
            </div>
            <div class="d-flex">
                <div class="text-section">
                    <h1 class="title">STAFFORDSHIRE BULL TERRIER</h1>
                    <p class="paragraph">A strong, courageous, and affectionate breed known for its loyal and loving nature. Despite their tough appearance, they are gentle with family and need consistent training and socialization.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>
                </div>
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={dog10} alt="bull" />
                    </div>
                </div>
            </div>

            <div class="text-center mt-4"><h1 class="title">YOU MAY ALSO LIKE</h1></div>
        <div class="d-flex justify-content-center mt-5">
            <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={dog1} />
                    <Card.Body style={{ height: '120px' , paddingTop: '20px'}}>
                        <Card.Title style={{ textAlign: 'center' , color: '#325d3f'}}>How to defrost raw dog and raw cat food</Card.Title>
                        <Card.Text style={{ textAlign: 'center' , marginTop: '14px'}}>
                        4th January 2025
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={dog5} />
                    <Card.Body style={{ height: '120px' , paddingTop: '20px'}}>
                        <Card.Title style={{ textAlign: 'center' , color: '#325d3f' }}>How can I quickly defrost my frozen raw dog and cat food?</Card.Title>
                        <Card.Text style={{ textAlign: 'center' , marginTop: '14px'}}>
                        4th January 2025
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={dog10} />
                    <Card.Body style={{ height: '120px' , paddingTop: '20px'}}>
                        <Card.Title style={{ textAlign: 'center' , color: '#325d3f'}}>Do I need separate utensils for serving the food? </Card.Title>
                        <Card.Text style={{ textAlign: 'center' , marginTop: '14px'}}>
                        4th January 2025
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={dog7} />
                    <Card.Body style={{ height: '120px' , paddingTop: '20px'}}>
                        <Card.Title style={{ textAlign: 'center' , color: '#325d3f'}}>What is the best way to serve raw dog and cat food?</Card.Title>
                        <Card.Text style={{ textAlign: 'center' , marginTop: '14px'}}>
                        4th January 2025
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>

        </>
    );
}