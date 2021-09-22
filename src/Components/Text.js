

export default function Text({ addEmoji, addBracket }) {
    const text = "i am javascript programming language ";
    return <div>{addEmoji ? (addBracket ? addBracket(addEmoji(text, 'emoji')) : addEmoji(text, 'emoji')) : text}</div>
}