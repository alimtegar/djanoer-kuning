const Features = () => {
    const features = [
        {
            id: Math.random(),
            title: 'Peta Navigasi',
            description: 'Lorem ipsum dolor sit amet consectetur lorem ipsum.',
            image: '/images/feature-1.svg'
        },
        {
            id: Math.random(),
            title: 'Galeri Foto/Video',
            description: 'Lorem ipsum dolor sit amet consectetur lorem ipsum.',
            image: '/images/feature-2.svg'
        },
        {
            id: Math.random(),
            title: 'Musik',
            description: 'Lorem ipsum dolor sit amet consectetur lorem ipsum.',
            image: '/images/feature-3.svg'
        },
        {
            id: Math.random(),
            title: 'Hitung Mundur',
            description: 'Lorem ipsum dolor sit amet consectetur lorem ipsum.',
            image: '/images/feature-4.svg'
        },
        {
            id: Math.random(),
            title: 'Domain Kustom',
            description: 'Lorem ipsum dolor sit amet consectetur lorem ipsum.',
            image: '/images/feature-5.svg'
        },
        {
            id: Math.random(),
            title: 'Share Undangan',
            description: 'Lorem ipsum dolor sit amet consectetur lorem ipsum.',
            image: '/images/feature-6.svg'
        },
    ];

    return (
        <section className="features py-6">
            <div className="container">
                <div className="text-center">
                    <div className="mb-5">
                        <h1 className="font-secondary h2 text-gold mb-1">Fitus Undangan Kami</h1>
                        <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                    <div className="features-body">
                        <div className="row">
                            {features.map((feature) => (
                                <div className="col-lg-4 px-0" key={feature.id}>
                                    <div className="features-item position-relative p-5">
                                        <h2 className="h5 font-weight-bold mb-0">{feature.title}</h2>
                                        <img src={feature.image} alt={feature.title} className="my-4"/>
                                        <p className="small text-muted mb-0">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;