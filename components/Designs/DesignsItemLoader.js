// Import Components
import { TextLoader, RectangleLoader, ButtonLoader } from '../Loaders';

const DesignsItemLoader = () => (
    <div className="col-lg-4 py-5 py-lg-0">
        <div className="text-center">
            <h1 className="h5 font-weight-bold mb-1">
                <TextLoader height={18} width={100} />
            </h1>
            <p className="small text-muted mb-0">
                ID: <TextLoader height={18} width={55} />
            </p>
            <div className="d-flex justify-content-center">
                <div style={{ padding: 32 }}>
                    <RectangleLoader height={337} width={166} />
                </div>
            </div>

            <span className="mx-1">
                <ButtonLoader width={143} height={50} />
            </span>
            <span className="mx-1">
                <ButtonLoader width={50} height={50} />
            </span>
        </div>
    </div>
);

export default DesignsItemLoader;