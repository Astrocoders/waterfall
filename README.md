# Waterfall

This function receives an array of promises and resolves all them one by one when the execution of this function finish all promises passed will be resolved. This is more performatic than Promise.all when you need to await a big array of promises.

# Install
````
yarn add @astrocoders/waterfall
````

# Usage
````
import waterfall from '@astrocoders/waterfall'

const result = await waterfall(
	list.map(item => async () => {
		return new Promise((resolve, reject) => resolve(item * 2))
	}
)
````
