import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Contact implements OnInit {


  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
   this.title.setTitle('Contact Page');
   this.meta.updateTag({name: 'description', content: 'Este es mi Contact Page'});
   this.meta.updateTag({name: 'og:title', content: 'Contact Page'});
   this.meta.updateTag({name: 'keywords', content: 'hola,bb,como,estas,esto,es,para,indexar'});
  }


}
