import { useState } from 'react';

function Radio() {

    const defaultRadio = [false, false, false, false, false, false];

    const [radio, setRadio] = useState([false, false, false, false, false, true]);

    const control = (e) => {
        const copyRadio = [...defaultRadio];
        const i = parseInt(e.target.value)
        copyRadio[i] = true;
        setRadio(copyRadio)
    }

    return (
        <div className="m-3">
            <input type="radio" name="hello" onChange={control} value="0" checked={radio[0]} />
            <input type="radio" name="hello" onChange={control} value="1" checked={radio[1]} />
            <input type="radio" name="hello" onChange={control} value="2" checked={radio[2]} />
            <input type="radio" name="hello" onChange={control} value="3" checked={radio[3]} />
            <input type="radio" name="hello" onChange={control} value="4" checked={radio[4]} />
            <input type="radio" name="hello" onChange={control} value="5" checked={radio[5]} />
        </div>
    )
}

export default Radio;