# cyberspace-invalidate-cache

This is a Sanity dashboard plugin, you need to have the @sanity/dashboard installed. See https://www.sanity.io/docs/dashboard for details.
You should now have a dashboard configuration file that points to a file like `dashboardConfig.js`

Sanity part name `part:@sanity/dashboard/widget/cyberspace-invalidate-cache`

For now you can clone this repo into `<your-sanity-project>/plugins/cyberspace-invalidate-cache`

To enable the plugin, add it to `widgets` in your project's dashboard configuration, and change the `base_url` option to your site's url:

```
export default {
  widgets: [
    {
      name: 'cyberspace-invalidate-cache',
      options: {
        base_url: 'https://example.com'
      }
    },
    {
      name: 'project-info'
    },
    {
      name: 'project-users'
    }
  ]
}
```
