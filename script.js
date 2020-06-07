let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"Engineers like to solve problems. If there are no problems handily available, they will create their own problems.” – Scott Adams', 
    '“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers',
    '“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown',
    '“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi',
    '“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs',
    '“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen',
    '“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino',
    '“Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.” – Mohnish Pabrai',
    '“We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou',
    '“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” – Johann Wolfgang Von Goethe',
    '“Math is my Passion. Engineering is my Profession.” – Wilfred James Dolor',
    '“The human foot is a masterpiece of engineering and a work of art.” – Leonardo da Vinci',
    '“The fewer moving parts, the better." "Exactly. No truer words were ever spoken in the context of engineering.” – Christian Cantrell',
    '“When you want to know how things really work, study them when they’re coming apart.” – William Gibson',
    '“A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.” – Douglas Adams',
    '“Strive for perfection in everything you do. Take the best that exists and make it better. When it does not exist, design it.” – Sir Henry Royce',
    '“Normal people believe that if it ain’t broke, don’t fix it. Engineers believe that if it ain’t broke, it doesn’t have enough features yet.” – Scott Adams',
    '“Engineering is not only study of 45 subjects but it is moral studies of intellectual life.” – Prakhar Srivastav',
    '“The trick to having good ideas is not to sit around in glorious isolation and try to think big thoughts. The trick is to get more parts on the table.” – Steven Johnson',
    '“I don’t spend my time pontificating about high-concept things; I spend my time solving engineering and manufacturing problems.” – Elon Musk',
    '“To the optimist, the glass is half full. To the pessimist, the glass is half empty. To the engineer, the glass is twice as big as it needs to be.” – Unknown',
    '“What we usually consider as impossible are simply engineering problems… there’s no law of physics preventing them.” –  Michio Kaku',
    '“The most important thing is to keep the most important thing the most important thing.” – Donald Coduto',
    '“An engineer is someone who is good with figures, but does not have the personality of an accountant.” – A Normal Graduate',

];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})