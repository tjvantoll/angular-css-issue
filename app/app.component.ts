import {Component} from "angular2/core";

@Component({
  selector: "my-app",
  template: `
<StackLayout orientation="vertical">
    <Label [text]="message" class="title" (tap)="message = 'OHAI'"></Label>
</StackLayout>
`,
  styleUrls: ["one.css", "two.css"]
})
export class AppComponent {
  public message: string = "Hello, Angular!";
}