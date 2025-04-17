# Strap plugin: oEmbed field

[Strapi v5](https://strapi.io) oEmbed field - allows videos, pictures and rich fields to be embedded from hundreds of third-parties in the admin interface.

![Example of the strapi-plugin-oembed-field plugin](demo.gif)

Read the article [Enhance your Strapi content with rich media using oEmbed](https://medium.com/@bashaus/enhance-your-strapi-content-with-rich-media-using-oembed-59d0f5047603)

## Use cases

- Video: YouTube, Vimeo, TikTok, Twitch, DailyMotion
- Photo: Imgur, Flickr, DeviantArt, Unsplash, Instagram
- Rich: Twitter, Pinterest, SlideShare, SoundCloud, CodePen, JSFiddle
- ... plus [hundreds more providers](https://oembed.com/providers.json).

## Installation

Install the package to your repository:

```bash
# npm
npm install --save strapi-plugin-oembed-field

# yarn
yarn add strapi-plugin-oembed-field
```

Enable the plugin:

`config/plugins.ts`:

```typescript
export default () => ({
  // ...
  'oembed-field': {
    enabled: true,
  },
});
```

## Usage

Edit the `content type` model and insert the `oembed` field to the`attributes` section.

`./src/api/[content-type]/content-types/[content-type]/schema.json`

```json
{
  "kind": "collectionType",
  "collectionName": "[content-type]",
  // ...
  "attributes": {
    // ...
    "oembed": {
      "type": "customField",
      "customField": "plugin::oembed-field.oembed"
    }
    // ...
  }
}
```

## Example response

Assuming the URL: `https://www.youtube.com/watch?v=aqz-KE-bpKQ` is used:

```json
{
  "url": "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
  "thumbnail": "data:image/jpeg;base64,...truncated...",
  "oembed": {
    "title": "Big Buck Bunny 60fps 4K - Official Blender Foundation Short Film",
    "author_name": "Blender",
    "author_url": "https://www.youtube.com/@BlenderOfficial",
    "type": "video",
    "height": 113,
    "width": 200,
    "version": "1.0",
    "provider_name": "YouTube",
    "provider_url": "https://www.youtube.com/",
    "thumbnail_height": 360,
    "thumbnail_width": 480,
    "thumbnail_url": "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
    "html": "<iframe width=\"200\" height=\"113\" src=\"https://www.youtube.com/embed/aqz-KE-bpKQ?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen title=\"Big Buck Bunny 60fps 4K - Official Blender Foundation Short Film\"></iframe>"
  }
}
```

- The `url` property is the value you typed.
- The `thumbnail` is a base64 encoded string of the thumbnail, if there is one
- The `oembed` contains the raw oembed data.

## Credits

This repository is originally based on the [strapi-plugin-oembed](https://market.strapi.io/plugins/strapi-plugin-oembed) plugin and the updates from [@7azin/strapi-plugin-oembed](https://www.npmjs.com/package/@7azin/strapi-plugin-oembed).
