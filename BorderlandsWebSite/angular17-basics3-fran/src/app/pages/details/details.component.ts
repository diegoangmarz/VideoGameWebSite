import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamingService } from '../../services/gaming.service';
import { Igame } from '../../interfaces/igame';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CardModule,],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  gamingService : GamingService = inject(GamingService)
  gameCard! : Igame | undefined

  constructor() {
    const gameId = Number(this.route.snapshot.params["id"])
    this.gameCard = this.gamingService.getGameById(gameId)
  }
}
