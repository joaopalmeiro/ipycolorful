# ipycolorful

> [PyPI](https://pypi.org/project/ipycolorful/) + [npm](https://www.npmjs.com/package/ipycolorful)

A Jupyter widget for [react-colorful](https://www.npmjs.com/package/react-colorful).

## References

- [ipywidgets](https://ipywidgets.readthedocs.io/en/latest/index.html) documentation and [repo](https://github.com/jupyter-widgets/ipywidgets).
- [Building a Custom Widget - Email widget](https://ipywidgets.readthedocs.io/en/latest/examples/Widget%20Custom.html) tutorial.
- [Build a Jupyter Widget with React and TypeScript](https://blog.jupyter.org/build-a-jupyter-widget-with-react-and-typescript-d83e07340fa3) blog post by John Waidhofer.
- [jupyter-widget-react-cookiecutter](https://github.com/Waidhoferj/jupyter-widget-react-cookiecutter) template by John Waidhofer.
- [react-colorful](https://www.npmjs.com/package/react-colorful) package.
- [widget-cookiecutter](https://github.com/jupyter-widgets/widget-cookiecutter) template.
- [How To Add Custom Build Steps and Commands To setup.py](https://jichu4n.com/posts/how-to-add-custom-build-steps-and-commands-to-setuppy/) blog post by Chuan Ji.
- [Creating Reactive Jupyter Widgets With Svelte](https://cabreraalex.medium.com/creating-reactive-jupyter-widgets-with-svelte-ef2fb580c05) blog post by Alex Cabrera.
- [widget-svelte-cookiecutter](https://github.com/cabreraalex/widget-svelte-cookiecutter) template by Alex Cabrera.
- [How to delete a tag in Git](https://www.manikrathee.com/how-to-delete-a-tag-in-git.html) blog post by Manik Rathee.

## Development

- `mamba env create -f environment.yml` or `mamba create -n ipycolorful-dev -c conda-forge jupyterlab jupyter-packaging nodejs yarn python`.
- `conda activate ipycolorful-dev`.
- `pip install -e .` + `conda list`.
- JupyterLab ([source](https://github.com/jupyter-widgets/widget-ts-cookiecutter)): `jupyter labextension develop --overwrite .`.
- Jupyter Notebook/classic notebook ([source](https://github.com/jupyter-widgets/widget-ts-cookiecutter)):
  - `jupyter nbextension install --sys-prefix --symlink --overwrite --py ipycolorful`.
  - `jupyter nbextension enable --sys-prefix --py ipycolorful`.
- `yarn run clean` + `yarn run build`.
- `jupyter lab` or `jupyter notebook`.

## Deployment

- `conda activate ipycolorful-dev`.
- Update the version in the `package.json`, `ipycolorful/_version.py`, and/or `ipycolorful/_frontend.py` files.
- `npm pack --dry-run`.
- `yarn login`.
- `yarn publish`.
- `yarn run clean`.
- `python -m build --no-isolation .`.
- After removing the old files:
  - `twine check dist/ipycolorful*` (vs. `twine check dist/*`).
  - `twine upload dist/ipycolorful*` (vs. `twine upload dist/*`).
- `git tag 0.1.0` (update the version).
- `git tag`.
- GitHub Desktop + `git push --tags`.

## Notes

- [mamba](https://github.com/mamba-org/mamba):
  - `mamba --version`.
  - [Documentation](https://mamba.readthedocs.io/en/latest/).
  - `conda` should be used for activation and deactivation.
  - [Reimplement: mamba env create -f env.yml](https://github.com/mamba-org/mamba/issues/633) (open) issue.
  - `conda deactivate` + `mamba env remove -n ipycolorful-dev` ([source](https://www.imranabdullah.com/2021-08-21/Conda-and-Mamba-Commands-for-Managing-Virtual-Environments)).
- [conda-forge](https://anaconda.org/conda-forge).
- [conda-lock](https://github.com/conda-incubator/conda-lock).
- [ipycanvas](https://github.com/martinRenou/ipycanvas).
- [bqplot](https://github.com/bqplot/bqplot).
- [babel-loader](https://webpack.js.org/loaders/babel-loader/).
- [`.yarnrc` file](https://classic.yarnpkg.com/en/docs/yarnrc/).
- [Node.js releases](https://nodejs.org/en/about/releases/).
- [Collection of React Hooks](https://nikgraf.github.io/react-hooks/).
- [check-manifest](https://github.com/mgedmin/check-manifest):
  - `check-manifest --help`.
  - `check-manifest -v`.
  - `check-manifest -u -v`.
  - [`check-manifest` became super slow](https://github.com/mgedmin/check-manifest/issues/141) (open) issue.
  - Alternative: [manifix](https://github.com/vidartf/manifix).
- [setup-cfg-fmt](https://github.com/asottile/setup-cfg-fmt):
  - `setup-cfg-fmt setup.cfg`.
- [Taplo](https://taplo.tamasfe.dev/):
  - [VS Code extension](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml).
  - [Repo](https://github.com/tamasfe/taplo).
  - [Online editor](https://taplo.tamasfe.dev/editor/).
  - [Configuration](https://taplo.tamasfe.dev/configuration/#configuration-file).
  - [Validation schemas](https://taplo.tamasfe.dev/configuration/#schemas).
- [@jupyterlab/builder](https://github.com/jupyterlab/jupyterlab/tree/v3.2.5/builder) package:
  - Try to match the version with that of `jupyterlab` (Python).
  - [Configuration](https://github.com/jupyterlab/jupyterlab/blob/v3.2.5/builder/metadata_schema.json) (`package.json` file).
  - [CLI](https://github.com/jupyterlab/jupyterlab/blob/v3.2.5/builder/src/build-labextension.ts) (and [`generateConfig()`](https://github.com/jupyterlab/jupyterlab/blob/v3.2.5/builder/src/extensionConfig.ts)).
- [gitignore_parser](https://github.com/mherrmann/gitignore_parser) package.
- [Rendering Interactive Widgets on nbviewer](https://ipywidgets.readthedocs.io/en/latest/embedding.html#rendering-interactive-widgets-on-nbviewer).
