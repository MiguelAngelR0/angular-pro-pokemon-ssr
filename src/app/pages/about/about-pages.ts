import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-pages',
  imports: [],
  templateUrl: './about-pages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPages implements OnInit {


  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
   this.title.setTitle('About Page');
   this.meta.updateTag({name: 'description', content: 'Este es mi about page'});
   this.meta.updateTag({name: 'og:title', content: 'About Page'});
   this.meta.updateTag({name: 'keywords', content: 'hola,bb,como,estas,esto,es,para,indexar'});
  }


}
