import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { HeadingComponent } from '../../../shared/ui/heading.component';
import { ProjectComponent } from './project.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div class="center">
    <heading>Projects</heading>
    @if (isMobileLayout()) {
    <div class="scroll-wrapper">
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
        class="last-child"
        imageUri="assets/projects/chat.png"
        title="Chat Web App"
        description="Real-time messaging platform. Dynamic Socket.io connection supports live status and instant chat."
        [tags]="['React', 'Socket.io']"
        link="https://github.com/vp-1591/chat-app"
      />
    </div>

    } @else{
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
        title="Chat Web App"
        description="Real-time messaging platform. Dynamic Socket.io connection supports live status and instant chat."
        [tags]="['React', 'Socket.io']"
        link="https://github.com/vp-1591/chat-app"
      />
    </div>
    }
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
      .scroll-wrapper {
        overflow-x: auto;
        display: flex;
        flex-direction: row;
        width: 70vw;
        gap: 10vw;
        align-items: stretch;
        padding: 0 15vw;
        scroll-snap-type: x mandatory;
      }

      .scroll-wrapper::-webkit-scrollbar {
        display: none;
      }
    `,
  ],
  imports: [HeadingComponent, ProjectComponent],
})
export class ProjectsComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isMobileLayout = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      // Map the full state object to just the boolean 'matches' value
      .pipe(map((state) => state.matches)),
    // Now the initial value only needs to be the boolean type
    { initialValue: false }
  );
}
