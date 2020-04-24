import Link from 'next/Link';
import Fade from 'react-reveal/Slide';

const DesignExamples = () => (
    <section className="text-center py-6">
        <div className="mb-5">
            <h1 className="font-secondary h2 text-gold mb-1">Contoh Desain</h1>
            <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        <div>
            <Fade bottom>
                <img src="/assets/images/design-examples.jpg" alt="Contoh Desain" className="img-fluid" style={{ width: 750 }} />
            </Fade>
        </div>
        <div className="mt-5">
            <Link href="/designs" >
                <a role="button" className="btn btn-outline-gold">
                    Lihat Contoh Desain
                </a>
            </Link>
        </div>
    </section>
);

export default DesignExamples;