import React, {useState} from 'react'

const Box = () => {
    const [color, setColor] = useState("");
    const [amount, setAmount] = useState([]);
    const [height, setHeight] = useState(0);
    // const [colorError, setColorError] = useState("");
    // const [amountError, setAmountError] = useState("");

    const handleColor = (e) => {
        setColor(e.target.value);
        console.log(color);
        // if (e.target.value.length < 1){
        //     setColorError("Please select a color")
        // }
        // else {
        //     setColorError("");
        // }
    }

    const createBox = (e) => {

        e.preventDefault();

        const newBox = {color, height};
        console.log("You chose", newBox.color);
        setAmount([...amount, newBox]);
        setColor("");
        setHeight(0);
        console.log(amount);
    }

    return (
        <div>
            <form onSubmit={createBox}>
                <div>
                    <label>Color </label>
                    <input type="text" value={color} onChange={handleColor}/>
                </div>
                <div>
                    <label>Height/Width </label>
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)}/>
                </div>
                <input type="submit" value="Add"/>
            </form>
            <div>{
                amount.map((element, index) => (
                    <div key={index} style={{display: "inline-block", margin: "10px", height: `${element.height}px`, width: `${element.height}px`, backgroundColor: element.color}}></div>
                ))
                }
            </div>
        </div>
    )
}

export default Box