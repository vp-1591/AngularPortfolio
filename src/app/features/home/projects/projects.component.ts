import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeadingComponent } from '../../../shared/ui/heading.component';
import { ProjectComponent } from './project.component';

@Component({
  selector: 'projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div class="center">
    <heading>Projects</heading>
    <div class="projects-content">
      <project
        imageUri="assets/projects/portfolio.png"
        title="Portfolio Website"
        description="Angular SPA. High-fidelity Figma UI. A performance-optimized, modern-looking project"
        [tags]="['Angular', 'TypeScript', 'Figma']"
        link="https://github.com/vp-1591/AngularPortfolio"
      />
      <project
        imageUri="assets/projects/wallet.png"
        title="Wallet App"
        description="Mobile-native DApp Wallet. Integrates WalletConnect/Wagmi for secure, testnet-chain Web3 transactions."
        [tags]="['React Native', 'Reanimated', 'Web3']"
        link="https://github.com/vp-1591/WalletApp"
      />
      <project
        imageUri="assets/projects/chat.png"
        title="Chat App"
        description="Real-time messaging platform. Dynamic Socket.io connection supports live status and instant chat."
        [tags]="['React', 'Socket.io']"
        link="https://github.com/vp-1591/chat-app"
      />
    </div>
  </div>`,
  styles: [
    `
      .center {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        gap: 50px;
      }
      .projects-content {
        gap: 32px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
      }
      project {
        width: 28%;
        display: flex;
        flex-direction: column;
      }
    `,
  ],
  imports: [HeadingComponent, ProjectComponent],
})
export class ProjectsComponent {}
