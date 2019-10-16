# sanity-plugins-cyberspace-invalidate-cache

This is a Sanity dashboard plugin, you need to have the @sanity/dashboard installed. See https://www.sanity.io/docs/dashboard for details.
You should now have a dashboard configuration file that points to a file like `dashboardConfig.js`

Sanity part name `part:@sanity/dashboard/widget/sanity-plugins-cyberspace-invalidate-cache`

For now you can add this repo as a git submodule `<your-sanity-project>/plugins/cyberspace-invalidate-cache`

You will need to add the plugin as `sanity-plugins-cyberspace-invalidate-cache` to the `plugins` list in your projects `sanity.json`

To enable the plugin, add it to `widgets` in your project's dashboard configuration, and change the `base_url` option to your site's url:

```
export default {
  widgets: [
    {
      name: 'sanity-plugins-cyberspace-invalidate-cache',
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
