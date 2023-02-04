import React, { useState, useEffect } from "react";

const TypingEffect = () => {
    const [text, setText] = useState("");
    const message = "Привет, я печатаю текст!";

    useEffect(() => {
        let index = 0;
        const typing = setInterval(() => {
            setText(message.slice(0, index));
            index++;
            if (index > message.length) {
                clearInterval(typing);
            }
        }, 100);

        return () => {
            clearInterval(typing);
        };
    }, []);

    return <p>{text}</p>;
};

export default TypingEffect;