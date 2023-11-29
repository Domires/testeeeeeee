import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// add ngx-mask
import { provideEnvironmentNgxMask, IConfig } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};




platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
