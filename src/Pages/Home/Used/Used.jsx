import SectionTittle from "../../../Shared/SectionTittle";

const Used = () => {
    return (
        <div className="my-20">
            <SectionTittle subTittle={"Used"} tittle={"Who Use This App"}></SectionTittle>
            <div className="grid mt-10 items-center grid-cols-1 justify-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="mx-auto shadow-2xl p-5">
                    <img className="w-[200px] h-[200px]" src="https://i.ibb.co/CQ4rxbr/albert-dera-ILip77-Sbm-OE-unsplash.jpg" alt="" />
                    <div>
                        <h2 className="text-xl font-medium">Aren Yanger</h2>
                        <p className="text-sm font-bold">senior software developer</p>
                    </div>
                </div>
                <div className="mx-auto  shadow-2xl p-5">
                    <img className="w-[200px] h-[200px]" src="https://i.ibb.co/Wp6GLH1/bruce-mars-8-YG31-Xn4d-Sw-unsplash.jpg" alt="" />
                    <div>
                        <h2 className="text-xl font-medium">Captain Levi</h2>
                        <p className="text-sm font-bold">Content creator</p>
                    </div>
                </div>
                <div className="mx-auto shadow-2xl p-5">
                    <img className="w-[200px] h-[200px]" src="https://i.ibb.co/9yxnvmG/joshua-rawson-harris-P2x-O3-EIk15-E-unsplash.jpg" alt="" />
                    <div>
                        <h2 className="text-xl font-medium">Rose Nobara</h2>
                        <p className="text-sm font-bold">junior website developer</p>
                    </div>
                </div>
                <div className="mx-auto shadow-2xl p-5">
                    <img className="w-[200px] h-[200px]" src="https://i.ibb.co/d4xb471/images-2.jpg" alt="" />
                    <div>
                        <h2 className="text-xl font-medium">Asif Hassan</h2>
                        <p className="text-sm font-bold">Fashion Designer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Used;