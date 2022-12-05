# Making your own map

The goal is to draw a map of Ithaca from scratch, without looking up a real map. Focus on places & roads that are memorable & important to you, don't worry about completeness. This should take you 10-20 minutes.

1. Create an account on [Felt.com](https://felt.com/signup).

![](https://user-images.githubusercontent.com/1711126/205537355-93fa013c-1fcc-4b32-a9c4-1ffa9743dad4.png)

2. Open the [My Ithaca Template](https://felt.com/map/My-Ithaca-Template-9ASKroZggSSmC2vXuXiRKKB)
3. Duplicate it to your account by clicking on the top left menu:

![](https://user-images.githubusercontent.com/1711126/205537618-3cde7b0e-98cd-4ae4-bb4a-b23fcfbe8225.png)

Then select **Duplicate to my maps**

### You are now ready to draw your map!

4. Use the pin tool to add landmarks 

![pin](https://user-images.githubusercontent.com/1711126/205539259-948496e6-50e9-4c0e-80f5-cf9ab742b25c.gif)

**Tip:** hold space at any time & click & drag with the mouse to pan the map

5. Draw roads with the marker tool

![roads](https://user-images.githubusercontent.com/1711126/205539242-ca42ca64-fe85-4541-b172-600159d3284e.gif)

6. When you're done, download your map by selecting **Felt > File > Download as GeojSON**

![](https://user-images.githubusercontent.com/1711126/205539371-323d5bc2-f818-428c-aa25-186c9ba6d47b.png)

7. Email your map to `omar.sameh.shehata@gmail.com`

## Post processing

To compare your map to the real map of Ithaca, you can show uncover the map underneath. 

Most hand drawn maps will need some re-scaling, which you can easily do with Felt to make it easier to compare.

1. Click the eye icon next to **Polygon** in the top right corner to show the basemap
2. Click on the map icon in the bottom right to toggle between satellite view and the vector map view
3. CTRL+A to select everything you've drawn, and then you can drag it/rescale it

![post_processing](https://user-images.githubusercontent.com/1711126/205542136-032c4dd3-7da1-4c2b-8c07-7a9065799078.gif)


## Mapping other cities

The only thing that needs to change when doing this for other cities is the initial Felt template that includes the big rectangle that covers up the city.

I created this rectangle using [https://geojson.io/](https://geojson.io/). Just navigate to your city, draw the rectangle, save it as a `*.geojson` file, then drag and drop it into Felt, and that's your base.
