function shortenDescription(description, wordsToShow) {
    const words = description.split(' ');
    const shortenedText = words.slice(0, wordsToShow).json(' ');
    return `${shortenedText}...`;
}

export default shortenDescription