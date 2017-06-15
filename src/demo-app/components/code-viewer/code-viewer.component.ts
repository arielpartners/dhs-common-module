import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {MarkdownService} from 'angular2-markdown';

@Component({
  selector: 'demo-code-viewer, code-viewer',
  template: `<div Markdown [path]="path" class="markdown-content"></div>`,
  styleUrls: ['./code-viewer.component.less'],
  encapsulation: ViewEncapsulation.None
})

export class CodeViewerComponent implements OnInit {
  public _path: string;
  @Input()
  get path() { return this._path }
  set path(filepath: string) {
    this._path = filepath;
  }

  constructor(private _markdown: MarkdownService) {}

  ngOnInit() {
    this._markdown.renderer.link = (href: string, title: string, text: string) => {

      function marddownUrlToRouteUrl(url: string){
        if (url.includes('/blob/master/src/lib/') || url.endsWith('.md')) {
          const pathArr = url.replace('/blob/master/src/lib/', '').split('/');
          pathArr.pop();
          return pathArr.join('/');
        }
        return url;
      }
      const repoURL = 'https://github.com/arielpartners/capdash2-common-module';
      const link = href.includes(repoURL)
        ?  marddownUrlToRouteUrl(href.replace(repoURL, '/'))
        : href;

      return `<a href="${link}" class="king-quote">${text}</a>`;
    }
  }
}
