export class Game {

    Players: User[] = [
        { Name: 'Mia Spiri', MyQuotes: [] },
        { Name: 'Donald Trump', MyQuotes: [] },
        { Name: 'Barak Obama', MyQuotes: [] },        
    ];
    Dealer: string = "Moshe Plotkin";
    Picture: string = 'https://media3.s-nbcnews.com/j/msnbc/components/video/201803/tdy_news_welker_trump_180315_1920x1080.nbcnews-ux-1080-600.jpg';
    PlayedQuotes: Quote[] = [
        { Text: "That's fake news", PlayerName: 'Donald Trump', Chosen: false }
    ];
}

export class User {
    Name: string;
    MyQuotes: string[];
}

export class Quote {
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;
}