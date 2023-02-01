import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from './../../routing/route-animations'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  animations: [routerTransition],
  host: { '[@routerTransition]': '' }
})
export class PageComponent {
  getState(outlet : RouterOutlet) {
    return outlet.activatedRouteData['state'];
  }
}
