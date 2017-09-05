//fittext.js
jQuery("#responsive_headline").fitText();
jQuery(".intro-text").fitText();
jQuery("#logo-title").fitText(1.2, { minFontSize: '10px', maxFontSize: '64px' });
jQuery("#logo").fitText(1.2, { minFontSize: '20px', maxFontSize: '64px' });

//data-toggle button click disables other button

$('#story-button').on('click',function(){
    document.getElementById("quotes").style.display="none";
});

$('#quotes-button').on('click',function(){
    document.getElementById("story").style.display="none";
});


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

//preloader

$(document).ready(function() {
    $("#preloader-index").introLoader({
        animation: {
            name: 'lettersLoader',
            options: {
                exitFx:"slideUp",
                ease: "linear",
                style: 'custom',
                delayBefore: 100,
                exitTime: 300,
                loaderText: 'Website is Ready!',
                lettersDelayTime: 0
            }
        },

        spinJs: {
            lines: 13, // The number of lines to draw
            length: 20, // The length of each line
            width: 10, // The line thickness
            radius: 30, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            color: '#fff', // #rgb or #rrggbb or array of colors
        }
    });
});
