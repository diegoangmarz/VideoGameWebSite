import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Igame } from '../../interfaces/igame';
import { GamingService } from '../../services/gaming.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  gameList: Igame[] = []
  gamingService : GamingService = inject(GamingService)

  constructor() {
    this.gameList = this.gamingService.getAllGameList()
  }
}
