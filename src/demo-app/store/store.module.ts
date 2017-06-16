import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';

import { RootReducer } from './root.reducer';

import { persistStore, autoRehydrate } from 'redux-persist';

interface IAppState {
  routes?: any;
}

@NgModule({
  imports: [
    NgReduxModule,
    NgReduxRouterModule
  ]
})

export class StoreModule {
  constructor (
    public store: NgRedux<IAppState>,
    devtools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter
  ) {
    store.configureStore(
      RootReducer,
      {},
      [],
      devtools.isEnabled() ? [autoRehydrate(), devtools.enhancer()] : [autoRehydrate()]
    );

    ngReduxRouter.initialize();
    persistStore(store, {blacklist: ['router']});
  }
}
