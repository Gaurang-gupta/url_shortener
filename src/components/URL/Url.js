import { useState } from "react"
import "./Url.css"
function Url({ sendData }) {
    const [data, setData] = useState([0]);
    const [link, setLink] = useState("");
    const linkHandle = (text) => {
        console.log('text', text)
        setLink(text)
    }

    const shorten = async (e) => {
        if (link.length <= 0) return;
        e.preventDefault();
        const short = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        const json = await short.json();
        console.log(json)

        if (data.length === 0) {
            setData(() => {
                return [{
                    originalLink: json.result.original_link,
                    shortLink: json.result.full_short_link,
                }]
            })
        } else {
            setData(() => {
                return [...data, {
                    originalLink: json.result.original_link,
                    shortLink: json.result.full_short_link,
                }]
            })
        }
        sendData([...data]);
    }
    return (
        <div className="url__container">
            <div className="url">
                <div className="url__inputContainer">
                    <input className="url__input" type="text" placeholder="Shorten the link here..." value={link} onChange={(e) => linkHandle(e.target.value)} />
                    {link.length === 0 && <p className="url__inputError">Please add a link</p>}
                </div>
                <button onClick={(e) => shorten(e)} className={`url__button ${link.length === 0 && "url__buttonHelper"}`} >Shorten it!</button>
            </div>
        </div>
    )
}

export default Url