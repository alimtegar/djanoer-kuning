const Map = () => {
    return (
        <section className="text-center pb-6">
            <div className="container">
                <div>
                    <h1 className="font-secondary text-gold mb-4">Peta Lokasi</h1>
                </div>
                <div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1908.8977102672936!2d106.99222002929874!3d-6.243717612214331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc112a0f2d986a5af!2sBaleroom%20Hotel!5e0!3m2!1sid!2sid!4v1574338660883!5m2!1sid!2sid"
                                width="100%"
                                height="360"
                                frameBorder="0"
                                style={{ border: 0, }}
                                allowFullScreen
                                title="Peta"
                                className="mb-min-2 p-2 border"
                            />
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <button className="btn btn-outline-gold">
                        Google Map <i className="fa fa-external-link-alt fa-sm ml-1 y-min-1" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Map;