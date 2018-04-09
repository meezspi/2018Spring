import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Game, User, Quote } from '../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    Model = new Game();
    Me = new User();
    private _api = "http://localhost:8080/game";

  constructor(private http: Http) {
    this.Me.Name = "Mia Spiri"
    http.get(this._api + "/quotes").subscribe(data=> this.Me.MyQuotes = data.json())
    setInterval(()=> this.refresh(), 1000)
  }

  refresh(){
    this.http.get(this._api + "/state")
        .subscribe(data=> this.Model = data.json())
  }

  ngOnInit() {
  }

  submitQuote(e: MouseEvent, text: string){
    e.preventDefault();

    if(this.MyPlayedQuote()) return;

    this.Model.PlayedQuotes.push({ Text: text, PlayerName: this.Me.Name, Chosen: false });
    this.Me.MyQuotes.splice( this.Me.MyQuotes.indexOf(text), 1 );
  }

  MyPlayedQuote = () => this.Model.PlayedQuotes.find( x => x.PlayerName == this.Me.Name );
  ChosenQuote = () => this.Model.PlayedQuotes.find( x => x.Chosen );
  IsEveryoneDone = () => this.Model.PlayedQuotes.length == this.Model.Players.length - 1;
  IAmTheDealer = () => this.Me.Name == this.Model.Dealer;
}