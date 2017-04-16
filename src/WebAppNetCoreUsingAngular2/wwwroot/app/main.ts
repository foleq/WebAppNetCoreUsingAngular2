import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // library that will render the website and allow us to bootstrap, or launch, the app.
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule); //Render application using AppModule