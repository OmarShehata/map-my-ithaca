# Post Processing App

This is a Mapbox app I used to create the stylized screenshots in this blog post:

https://omarshehata.me/notebook/mapping_my_ithaca

Run `npm install` and `npm run dev` to run the app. 

## How it works

Download your GeoJSON from Felt, and then place it in the `public/` folder.

You can load it in the app by replacing the path in this line in `src/index.js`:

```javascript
import geojsonData from '../public/My-Ithaca-Omar.geojson?raw';
```

You can toggle between showing the underlying map by setting the boolean: `const showCover = false;`

To create the red/green image that shows the "correct" path compared to the paths I drew, I copied my map in Felt, and then drew using the "route" tool in green the correct versions, and colored the original roads I drew in red. I then exported it, rendered it in this app, and took a screenshot.