import { TextLoader, MultiLineTextLoader, SquareLoader } from './Loaders';

const FeaturesItemLoader = () => (
    <div className="col-lg-4 px-lg-0">
        <div className="features-item position-relative p-5">
            <h2 className="h5 font-weight-bold mb-0">
                <TextLoader height={18} width={100} />
            </h2>
            <div className="my-4">
                <SquareLoader side={101.5} />
            </div>
            <p className="small text-muted mb-0">
                <MultiLineTextLoader lineTotal={2} lineHeight={5.25} height={16} width="100%" />
            </p>
        </div>
    </div>
);

export default FeaturesItemLoader;