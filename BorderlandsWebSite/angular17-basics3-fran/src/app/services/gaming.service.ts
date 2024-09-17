import { Injectable } from '@angular/core';
import { Igame } from '../interfaces/igame';

@Injectable({
  providedIn: 'root'
})
export class GamingService {
  protected gamesList : Igame[] = [
    {
      "id": 1,
      "title": "Borderlands",
      "description": "Kick off the saga on the lawless, desolate planet Pandora as one of four trigger-happy Vault Hunters. Blast your way through desert wastes crawling with killer bandits, ferocious beasts, and corporate mercenaries who all want you dead. Grab the loot, perfect your build, and devastate your foes with flaming revolvers, rocket-launching shotguns, and more! Experience the Mayhem solo or in up to four-player co-op!",
      "img": "../../assets/img/Borderlands1.avif",
      "category": "Shoot and Loot",
      "stock": 10,
      "price": 100
    },
    {
      "id": 2,
      "title": "Borderlands 2",
      "description": "Face off against the evil mastermind, Handsome Jack, as one of four new Vault Hunters. Make new friends, arm them, and take on endless hordes of bandits and soulless corporate goons in up to four-player co-op. This relentless quest for revenge and redemption takes you to never-before-seen regions of Pandora that lie far beyond its desert wastes, like arctic tundras, dangerous grasslands, mysterious caverns, and many more.",
      "img": "../../assets/img/Borderlands2.avif",
      "category": "Action, Rol, Shoot and Loot, Multiplayer",
      "stock": 10,
      "price": 100
    },
    {
      "id": 3,
      "title": "Borderlands PreSecuel",
      "description": "Witness the rise and fall of the infamous Handsome Jack in this looter-shooter that takes place before Borderlands 2. Blast off to Pandora's moon of Elpis for some low-gravity, high-stakes action. Float through the air and rain destruction down on your foes with an all-new set of Vault Hunters, all while learning more about the origins of Handsome Jack.",
      "img": "../../assets/img/BorderlandsPreSecuel.avif",
      "category": "Action, Rol, Shoot and Loot",
      "stock": 10,
      "price": 100
    },
    {
      "id": 4,
      "title": "Tales from the Borderlands",
      "description": "Explore the deadly planet of Pandora as Rhys, a company man who aspires to replace the infamous Handsome Jack as the head of the Hyperion corporation, and Fiona, a clever con artist who can talk her way out of almost anything. When a shady deal goes awry, Rhys and Fiona must begrudgingly team up to get their due, running into vicious gangsters, cannibalistic bandits, and terrifying wildlife along the way. How will you choose to guide their actions on this wild ride to Pandoran glory?",
      "img": "../../assets/img/TFB1.avif",
      "category": "Make your own history, Decisions matter",
      "stock": 10,
      "price": 100
    },
    {
      "id": 5,
      "title": "Borderlands 3",
      "description": "The Calypso Twins, Troy and Tyreen, are ruthless new media cult leaders who have convinced the bandit clans of the Borderlands that they are their Gods and Saviors. They consider the power of the Vaults to be their birthright and are leading their weaponized worshippers, The Children of the Vault, on a crusade to claim it. Only you have the arsenal and allies to take them down.",
      "img": "../../assets/img/Borderlands3.avif",
      "category": "FPS, RPG, SHLOOTER, Multiplayer",
      "stock": 10,
      "price": 100
    },
    {
      "id": 6,
      "title": "Tales From the Borderlands 2",
      "description": "Take a stand against ruthless corporate overlords in this narrative-driven adventure! Within the perpetually war-torn metropolis of Promethea, you'll control Anu, Octavio, and Fran on the worst day of their lives. Help these three lovable losers as they endeavor to change the world! Face down a planetary invasion, vicious vault monster, and cold-hearted capitalist in this cinematic thrill ride where what happens next is up to you! Meet a motley cast full of misfits, assassin bots, and talking guns in this race to the top! It's time to fight back against exploitation and corporate greed. It's time to make Mayhem your business.",
      "img": "../../assets/img/TFB2.avif",
      "category": "Make your own history, Decisions matter",
      "stock": 10,
      "price": 100
    }
  ]
  
  
  constructor() { }

  getAllGameList() {
    return this.gamesList
  }

  getGameById(id: number) {
    return this.gamesList.find(value => value.id === id)
  }

}
