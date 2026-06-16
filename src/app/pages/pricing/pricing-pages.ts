import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-pages',
  imports: [],
  templateUrl: './pricing-pages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPages implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    //Este codigo parece valido, pero da error document is not defined en el lado del servidor, en el lado del cliente si existe el objeto y si que funciona
    // document.title = 'Pricing Page'
    // console.log(this.platform);

    if(isPlatformBrowser(this.platform)){
      document.title = 'Pricing Page';
      console.log(this.platform);
    }

     this.title.setTitle('Pricing Page');
     this.meta.updateTag({name: 'description', content: 'Este es mi Pricing Page'});
     this.meta.updateTag({name: 'og:title', content: 'Pricing Page'});
     this.meta.updateTag({name: 'keywords', content: 'hola,bb,como,estas,esto,es,para,indexar'});
  }
}
