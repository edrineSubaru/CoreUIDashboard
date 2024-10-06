import { Component } from '@angular/core';
import {
  BorderDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardGroupComponent,
  CardHeaderComponent,
  CardImgDirective,
  CardLinkDirective,
  CardSubtitleDirective,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  GutterDirective,
  ListGroupDirective,
  ListGroupItemDirective,
  RowComponent,
  TabDirective,
  TabPanelComponent,
  TabsComponent,
  TabsContentComponent,
  TabsListComponent,
  TextColorDirective
} from '@coreui/angular';

@Component({
  selector: 'app-official-profile',
  standalone: true,
  templateUrl: './official-profile.component.html',
  styleUrl: './official-profile.component.scss',
  imports: [RowComponent, ColComponent, CardHeaderComponent, CardBodyComponent, CardComponent],

})
export class OfficialProfileComponent {

}
