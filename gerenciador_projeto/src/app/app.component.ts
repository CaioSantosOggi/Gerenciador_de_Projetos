import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';
import { ProAppConfigService } from '@totvs/protheus-lib-core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {

  constructor(
    private proAppConfigService: ProAppConfigService,
    private router: Router // Injeção combinada no mesmo construtor
  ) {
    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.loadAppConfig();
    }
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home',
      shortLabel: 'Home',
      icon: 'an an-house-line',
      action: () => this.router.navigate([''])
    },

    {
      label: 'Projetos',
      shortLabel: 'Projetos',
      icon: 'an an-projector-screen',
      action: () => this.router.navigate(['projeto'])  // Navegação para a rota de projeto
    },

    { label: 'Equipe',
      shortLabel: 'Equipe',
      icon: 'an an-identification-badge',
      action: this.onClick.bind(this)
    },

    { label: 'Tarefas',
      shortLabel: 'Tarefas',
      icon: 'an an-list-checks',
      action: this.onClick.bind(this),
    },

    {
      label: 'Sair',
      shortLabel: 'Sair',
      icon: 'an an-x',
      action: this.closeApp.bind(this),
    },
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

  private closeApp() {
    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.callAppClose();
    } else {
      alert('O App não está sendo executado dentro do Protheus.');
    }
  }

  goProjetos() {
    this.router.navigate(['projeto']);
  }

}
