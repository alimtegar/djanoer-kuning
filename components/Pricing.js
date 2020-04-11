const Pricing = () => {
    const pricing = [
        {
            id: Math.random(),
            title: 'Bronze',
            price: 100000,
            example_url: 'djanoerkuning.com/nama-unik',
            features: [
                'Desain Terbatas',
                'Galeri Foto (10 Foto)',
                'Galeri Video',
                'Alamat Lokasi',
                'Hitung Mundur',
                'Kolom Ucapan',
            ],
            non_features: [
                'Peta Lokasi',
                'Musik',
                'RSVP'
            ],
            order_url: '#',
        },
        {
            id: Math.random(),
            title: 'Silver',
            price: 200000,
            example_url: 'djanoerkuning.com/nama-unik',
            features: [
                'Desain Terbatas',
                'Galeri Foto (10 Foto)',
                'Galeri Video',
                'Alamat Lokasi',
                'Peta Lokasi',
                'Hitung Mundur',
                'Kolom Ucapan',
                'Musik',
            ],
            non_features: [
                'RSVP'
            ],
            order_url: '#',
        },
        {
            id: Math.random(),
            title: 'Gold',
            price: 400000,
            example_url: 'djanoerkuning.com/nama-unik',
            features: [
                'Desain Terbatas',
                'Galeri Foto (10 Foto)',
                'Galeri Video',
                'Alamat Lokasi',
                'Peta Lokasi',
                'Hitung Mundur',
                'Kolom Ucapan',
                'Musik',
                'RSVP'
            ],
            non_features: [],
            order_url: '#',
        },
    ];

    return (
        <section>
            <div className="pricing py-6 mask-gold">
                <div className="container">
                    <div className="pricing-body pb-3-1">
                        <div className="row my-min-2">
                            {pricing.map((pricingItem) => (
                                <div className="col-lg-4 py-2" key={pricingItem.id}>
                                    <div className="card text-center border-0 rounded-xl shadow-xl">
                                        <div className="card-header position-relative py-4 bg-transparent">
                                            <h2 className="font-secondary h2 text-gold mb-0">{pricingItem.title}</h2>
                                            <h3 className="h4 mb-3">
                                                <sup className="small text-muted mr-1">Rp</sup>
                                                <span className="font-weight-bold">{new Intl.NumberFormat('en-ID', { maximumSignificantDigits: 3 }).format(pricingItem.price)}</span>
                                                <sup className="small text-muted ml-1">,-</sup>
                                            </h3>
                                            <div className="pricing-example-link position-absolute left-50 bottom-0 x-min-50-y-50 bg-white text-muted py-1 px-4 w-fit-content border rounded-xxl">
                                                <div className="small y-min-1">
                                                    {pricingItem.example_url}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <ul className="nav flex-column mt-3">
                                                {pricingItem.features.map((pricingItemFeature) => (
                                                    <li className="nav-item py-1" key={Math.random()}>
                                                        <div className="d-inline-flex align-items-center small text-muted">
                                                            <i className="fa fa-xs fa-check text-gold mr-2" />
                                                            {pricingItemFeature}
                                                        </div>
                                                    </li>
                                                ))}
                                                {pricingItem.non_features.map((pricingItemNonFeature) => (
                                                    <li className="nav-item py-1" key={Math.random()}>
                                                        <div className="d-inline-flex align-items-center small text-gray">
                                                            <i className="fa fa-xs fa-times text-gray mr-2" />
                                                            {pricingItemNonFeature}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="card-footer bg-transparent mt-min-1 pb-5 pt-0 border-top-0">
                                            <button className="btn btn-outline-gold mt-2 shadow-sm">Pesan Disini</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="card mt-min-3-1 border-0 rounded-xl shadow-reverse">
                        <div className="card-body text-center text-lg-left p-5">
                            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
                                <div className="mb-5 mb-lg-0">
                                    <p className="small text-muted mb-1">Custom domain sendiri www.namakalian.com</p>
                                    <h3 className="h4 mb-0">
                                        <sup className="small text-muted mr-1">Rp</sup>
                                        <span className="font-weight-bold">800,000</span>
                                        <sup className="small text-muted ml-1">,-</sup>
                                    </h3>
                                </div>
                                <div className="d-flex flex-column flex-lg-row align-items-center">
                                    <button className="btn btn-outline-gold shadow-sm">
                                        Pesan Disini
                                </button>
                                    <span className="small text-muted mx-0 mx-lg-3 my-3 my-lg-0">atau</span>
                                    <button className="btn btn-outline-gray shadow-sm">
                                        Cek Domain
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;