import { useState } from "react"
import "./Display.css"

function Display({ data }) {
    const temp = [
        { originalLink: 'https://react-icons.github.io/', shortLink: 'https://shrtco.de/dvKhd', copied: false },
        { originalLink: 'https://react-icons.github.io/', shortLink: 'https://shrtco.de/BHbxre', copied: false },
        { originalLink: 'https://stackoverflow.com/', shortLink: 'https://shrtco.de/qMfHN', copied: false }
    ]
    const [isClicked, setIsClicked] = useState(() => data.map(
        subarr => ({ copied: false })
    ));
    const handleClick = (dat, i) => {
        navigator.clipboard.writeText(dat.shortLink)
        setIsClicked(isClicked.map((e, j) => j !== i ? e : ({
            ...e,
            copied: true
        })));
    }
    return (
        <div className="url__shortened">
            {data.map((dat, index) => (
                index > 0 &&
                <div className="url__shortenedItem" key={index}>
                    <p className="url__shortOriginal">{dat?.originalLink}</p>
                    <div className="url__shortRight">
                        <p className="url__short">{dat?.shortLink}</p>
                        <div onClick={() => handleClick(dat, index)} className={`url__copyButton url__shortButton ${isClicked[index]?.copied && "url__buttonCopy"}`}>{isClicked[index]?.copied ? "Copied" : "Copy"}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Display