import React from "react";

export default class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
    render(overwrite) {
        let text = "i am the emoji Component"
        if (overwrite) text = overwrite;
        return <div>{text}</div>
    }
}