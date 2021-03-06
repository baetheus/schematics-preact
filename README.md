### To Use

Install as schematics-preact a dev dependency and schematics-cli globally:

```bash
npm i -D @nll/schematics-preact
npm i -g @angular-devkit/schematics-cli
```

Run the commands manually (path defaults to /src/components):

```bash
schematics @nll/schematics-preact:stateless-component --name=MyNewStatelessComponent --path=/src/my/custom/components
```

```bash
schematics @nll/schematics-preact:component --name=MyNewComponent --path=/src/my/custom/components
```

Or add the following script to your package.json file:

```
"g:sc": "schematics @nll/schematics-preact:stateless-component",
"g:c": "schematics @nll/schematics-preact:component",
```

And then the commands becomes:

```bash
npm run g:c -- --name=MyNewComponent

npm run g:sc -- --name=MyNewStatelessComponent
```
