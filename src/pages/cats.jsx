import Card from 'react-bootstrap/Card';
import home from "../assets/home.png"
import cat1 from "../assets/cat1.jpg"
import cat2 from "../assets/cat2.webp"
import cat3 from "../assets/cat3.jpg"
import cat4 from "../assets/cat4.webp"
import cat5 from "../assets/cat5.png"
import cat6 from "../assets/cat6.webp"
import cat7 from "../assets/cat7.jpg"
import cat8 from "../assets/cat8.jpg"
import cat9 from "../assets/cat9.avif"
import cat10 from "../assets/cat10.jpg"
import Gcat from "../assets/Gcat.png"

export default function Cats() {
    return (
        <>
            <div class="container">
                <div class="text-section" style={{ textAlign: 'center' }}>
                    <h1 class="title" style={{ fontSize: '48px' }}>
                        TOP 10 MOST FRIENDLIEST CAT BREEDS 2025 <br />(PERFECT COMPANION)
                    </h1>
                    <p class="author">Written By Titya</p>
                    <p class="date">1ST APRIL 2025</p>
                </div>
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={Gcat} alt="" />
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '100px' }}>
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={cat1} alt="Labrador" />
                    </div>
                </div>
                <div class="text-section">
                    <h1 class="title">MAINE COONS</h1>
                    <p class="paragraph">A large, fluffy, and friendly breed known as the "gentle giant" of cats. Maine Coons are intelligent, playful, and social, making them great companions. They love water and have a thick, weather-resistant coat.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>
                </div>
            </div>
            <div class="d-flex">
                <div class="text-section">
                    <h1 class="title">RAGDOLL</h1>
                    <p class="paragraph">A gentle, affectionate, and laid-back breed that loves being held—hence the name "Ragdoll." They have striking blue eyes and silky fur, and they often follow their owners around like a dog.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>
                </div>
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={cat2} alt="Golden" />
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={cat3} alt="cavalier" />
                    </div>
                </div>
                <div class="text-section">
                    <h1 class="title">BURMESE</h1>
                    <p class="paragraph">A playful, affectionate, and people-oriented breed with a sleek, muscular body. Burmese cats are highly social, intelligent, and love to be involved in family activities.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>
                </div>
            </div>
            <div class="d-flex">
                <div class="text-section">
                    <h1 class="title">SIAMESE</h1>
                    <p class="paragraph">A vocal, intelligent, and social breed with striking blue almond-shaped eyes and a sleek body. Siamese cats love attention, are highly interactive, and form strong bonds with their owners.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>

                </div>
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={cat4} alt="Beagle" />
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={cat5} alt="Poodle" />
                    </div>
                </div>
                <div class="text-section">
                    <h1 class="title">SCOTTISH FOLD</h1>
                    <p class="paragraph">Known for their adorable folded ears, these cats are calm, affectionate, and good-natured. They enjoy human company and have a soft, round face that makes them look like teddy bears.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>
                </div>
            </div>
            <div class="d-flex">
                <div class="text-section">
                    <h1 class="title">SPHYNX</h1>
                    <p class="paragraph">A hairless, affectionate, and energetic breed that loves human attention and warmth. Despite their lack of fur, Sphynx cats are highly social and enjoy cuddling to stay warm.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>
                </div>
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={cat6} alt="Irish" />
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={cat7} alt="Boston" />
                    </div>
                </div>
                <div class="text-section">
                    <h1 class="title">ABYSSINIAN</h1>
                    <p class="paragraph">A sleek, active, and intelligent breed with a short coat and a love for climbing. Abyssinians are curious and playful, making them one of the most adventurous and energetic cat breeds.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>
                </div>
            </div>
            <div class="d-flex">
                <div class="text-section">
                    <h1 class="title">BIRMAN</h1>
                    <p class="paragraph">A gentle, affectionate, and beautiful breed with blue eyes and silky fur. Birmans are friendly, loving, and enjoy human company, often compared to Ragdolls for their docile nature.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>
                </div>
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={cat8} alt="corgi" />
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={cat9} alt="boxer" />
                    </div>
                </div>
                <div class="text-section">
                    <h1 class="title">EXOTIC SHORTHAIR</h1>
                    <p class="paragraph">A calm, affectionate, and easygoing breed that looks like a Persian but with short fur. Exotic Shorthairs are low-maintenance, quiet, and love lounging, making them great indoor pets.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>
                </div>
            </div>
            <div class="d-flex">
                <div class="text-section">
                    <h1 class="title">PERSIAN</h1>
                    <p class="paragraph">A luxurious, quiet, and gentle breed known for its long, fluffy coat and flat face. Persians are affectionate but independent, preferring a relaxed and comfortable environment.</p>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, nisi nec vehicula facilisis, augue ligula facilisis nunc, euismod fringilla odio enim ut enim. Quisque ac nisi nec erat commodo sodales.</p>
                </div>
                <div class="image-section">
                    <div class="image-placeholder">
                        <img src={cat10} alt="bull" />
                    </div>
                </div>
            </div>

            <div class="text-center mt-4"><h1 class="title">YOU MAY ALSO LIKE</h1></div>
            <div class="d-flex justify-content-center mt-5">
                <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={home} />
                        <Card.Body style={{ height: '120px', paddingTop: '20px' }}>
                            <Card.Title style={{ textAlign: 'center', color: '#325d3f' }}>How to defrost raw dog and raw cat food</Card.Title>
                            <Card.Text style={{ textAlign: 'center', marginTop: '14px' }}>
                                4th January 2025
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={home} />
                        <Card.Body style={{ height: '120px', paddingTop: '20px' }}>
                            <Card.Title style={{ textAlign: 'center', color: '#325d3f' }}>How can I quickly defrost my frozen raw dog and cat food?</Card.Title>
                            <Card.Text style={{ textAlign: 'center', marginTop: '14px' }}>
                                4th January 2025
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={home} />
                        <Card.Body style={{ height: '120px', paddingTop: '20px' }}>
                            <Card.Title style={{ textAlign: 'center', color: '#325d3f' }}>Do I need separate utensils for serving the food? </Card.Title>
                            <Card.Text style={{ textAlign: 'center', marginTop: '14px' }}>
                                4th January 2025
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={home} />
                        <Card.Body style={{ height: '120px', paddingTop: '20px' }}>
                            <Card.Title style={{ textAlign: 'center', color: '#325d3f' }}>What is the best way to serve raw dog and cat food?</Card.Title>
                            <Card.Text style={{ textAlign: 'center', marginTop: '14px' }}>
                                4th January 2025
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}