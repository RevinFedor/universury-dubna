import ImageName from '../assets/image.jpg';
import figma from '../assets/figma.jpeg';

export const AboutSelf = () => {
    return (
        <div className="section">
            <section className="flex flex-col text-center mb-[50px]">
                <h1>Веб технологии</h1>
                <h2 className="mt-10">Университет Дубна</h2>
            </section>
            <section className="flex justify-between  mb-[50px]">
                <img
                    className="object-cover w-[50%] h-full"
                    src={ImageName}
                    alt="ImageName"
                />
                <div className="flex flex-col text-center ml-[50px]">
                    <h2 className="mt-10">Смагина Елена Павловна</h2>
                    <span className="mt-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                    <span className="mt-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et veniam nulla, laudantium optio dolorem officia Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Et
                        veniam nulla, laudantium optio dolorem officia
                    </span>
                    <span className="mt-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et veniam nulla, laudantium optio dolorem officia
                    </span>
                </div>
            </section>
            <section className="flex flex-col text-center mb-[50px]">
                <h1>Что я умею</h1>
                <div className="flex flex-wrap justify-center gap-10 mt-10">
                    <div className="flex flex-col justify-center items-center max-w-[300px]">
                        <img className="w-[60px] mb-10" src={figma} alt="" />
                        <h6>Figma</h6>
                        <span className="mt-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Et veniam nulla, laudantium optio dolorem
                            officia
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center max-w-[300px]">
                        <img className="w-[60px] mb-10" src={figma} alt="" />
                        <h6>Figma</h6>
                        <span className="mt-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Et veniam nulla, laudantium optio dolorem
                            officia
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center max-w-[300px]">
                        <img className="w-[60px] mb-10" src={figma} alt="" />
                        <h6>Figma</h6>
                        <span className="mt-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Et veniam nulla, laudantium optio dolorem
                            officia
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center max-w-[300px]">
                        <img className="w-[60px] mb-10" src={figma} alt="" />
                        <h6>Figma</h6>
                        <span className="mt-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Et veniam nulla, laudantium optio dolorem
                            officia
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center max-w-[300px]">
                        <img className="w-[60px] mb-10" src={figma} alt="" />
                        <h6>Figma</h6>
                        <span className="mt-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Et veniam nulla, laudantium optio dolorem
                            officia
                        </span>
                    </div>
                </div>
            </section>
            <section className="flex justify-between">
                <div className="flex flex-col border-2 border-white"></div>
            </section>
        </div>
    );
};
