import React, { useState } from "react";

const InputForm = (props) => {
    const [count, setCount] = useState(0);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(count === 0 || count < 0) {
            return;
        }
        props.onGenerate(+count)
      };

    return( <section>
        <form className="lorem-form" onSubmit={onSubmitHandler}>
        <label htmlFor="amount">Paragraph:</label>
        <input
          id="amount"
          type="number"
          min="0"
          defaultValue={0}
          onChange={(e) => setCount(e.target.value)}
        />

        <button type="submit" className="btn">
          Generate
        </button>
      </form>
        

    </section>

    )
}

export default InputForm;