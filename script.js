$(document).ready(function () {
    
    // Setting all the required elements as variables
    const quoteBox = $("#quote-box");
    const quoteText = $("#text");
    const author = $("#author");
    const newQuote = $("#new-quote");
    const tweetQuote = $("#tweet-quote");
    const background = $('body');

    // Setting the beginning quote and corresponding author
    const startingIndex = generateIndex();
    quoteText.text(`" ${quotes[startingIndex].quote}"`);
    author.text(`- ${quotes[startingIndex].author}`);

    // Setting the quote box to fit everything correctly
    if(quotes[startingIndex].quote.length > 180) {
        quoteBox.css('height', '24rem');
    } else if (quotes[startingIndex].quote.length < 100) {
        quoteBox.css('height', '17rem');
    } else {
        quoteBox.css('height', '20rem');
    }

    // Setting the initial twitter link
    tweetQuote.attr('href', `https://twitter.com/intent/tweet?text=${quotes[startingIndex].quote}`);

    // Random color to start on
    const randomStartColor = generateColor();

    background.css('background-color', randomStartColor);
    quoteText.css('color', randomStartColor);
    author.css('color', randomStartColor);
    newQuote.css('background-color', randomStartColor);
    tweetQuote.css('color', randomStartColor);

    // Where the magic happens
    $('#new-quote').click(function() {
    
        /** GENERATING NEW QUOTES **/
        const newIndex = generateIndex();
        quoteText.text(`" ${quotes[newIndex].quote}"`);
        author.text(`- ${quotes[newIndex].author}`);

        /** SETTING THE TWEET LINK **/
        tweetQuote.attr('href', `https://twitter.com/intent/tweet?text=${quotes[newIndex].quote}`);

        // Setting the quote box to fit everything correctly
        if(quotes[newIndex].quote.length > 180) {
            quoteBox.css('height', '24rem');
        } else if (quotes[newIndex].quote.length < 100) {
            quoteBox.css('height', '17rem');
        } else {
            quoteBox.css('height', '20rem');
        }
        
        /** SETTING THE COLORS **/

        // Random color
        const newColor = generateColor();

        // Alllll the animations
        background.animate({
            backgroundColor: newColor
        }, 1000);

        newQuote.animate({
            backgroundColor: newColor
        }, 1000);

        quoteText.animate({
            color: newColor
        }, 1000);

        author.animate({
            color: newColor
        }, 1000);

        tweetQuote.animate({
            color: newColor
        }, 1000);
        
    });
});