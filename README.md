# React Context Component

This is a React component that let you add things in the context. This component replaces the need of creating many different "Providers" where each one does the same.

For instance, instead of doing this
```react

<Provider store={store}>
	<GridProvider grid={grid}>
		<WidthProvider width={width}>
	        // some components
        </WidthProvider>
    </GridProvider>
</Provider>
```

You can do this
```react
import Context from 'react-context-component'

<Context grid={grid} store={store} width={width}>
    // some components
</Context>
```


## Instalation

If you are using yarn:
`yarn add react-context-component`

If you are using npm:
`npm i react-context-component
