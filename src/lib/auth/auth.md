# Auth Module

## Overview

Auth module provides authentication related components and directives. Please note that you will need to import reducer to combine reducer for authentication functionality.

## Implementation

Since auth module is using [JWT](https://jwt.io/), process of authentication starts from making a http request to server to retrieve unique token assigned to provided user credential. Once response returns token string, our TokenReducer will update state of the store. 

*Example root reducer*
```javascript
import { TokenReducer } from 'dhs-common-module/src/lib/auth';

export const RootReducer = combineReducers({
  token: TokenReducer
})
``` 

*Note*

Currently http request urls are listed insided of `src/lib/ajax/item/item.service.ts`. This works fine at the moment, but we might want to allow users to set those url on application level, rather than statically set inside library module. 


## API Reference

### Components

#### Login

You can place login form by using LoginComponent. When you provide value to `successRoute` property, login component will redirect you to that route when login was successful 

Selector: `dhs-login`

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| @Input() successRoute | string | Assign successRoute for after login |


