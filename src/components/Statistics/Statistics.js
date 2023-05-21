import Display from "../Display/Display"
import "./Statistics.css"
function Statistics({ urlData }) {
    const data = [
        {
            heading: "Brand Recognition",
            content: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
            img: "icon-brand-recognition.svg"
        },
        {
            heading: "Detailed Records",
            content: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
            img: "icon-detailed-records.svg",
            first: true,
        },
        {
            heading: "Fully Customizable",
            content: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
            img: "icon-fully-customizable.svg",
            second: true,
        }
    ]
    return (
        <>
            {urlData && <Display data={urlData} />}
            <main className="statistics">
                <h1 className="statistics__heading">Advanced Statistics</h1>
                <p className="statistics__para">Track how your links are performing across the web with our advanced statistics dashboard</p>
                <div className="statistics__grid">
                    {
                        data.map(dat => (
                            <div className={`${(dat?.first && "first") || (dat?.second && "second")} statistics__gridElement`}>
                                <div className="statistics__imageContainer">
                                    <div className="statistics__image">

                                        <img className="statistics__gridImage" src={dat.img} alt="icon" />
                                    </div>
                                </div>
                                <div className="statistics__gridContent">
                                    <h2 className="statistics__gridHeading">{dat.heading}</h2>
                                    <p className="statistics__gridPara">{dat.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </main>
        </>
    )
}

export default Statistics