# ipycolorful

A Jupyter widget for [react-colorful](https://www.npmjs.com/package/react-colorful).

## References

- [ipywidgets](https://ipywidgets.readthedocs.io/en/latest/index.html) documentation and [repo](https://github.com/jupyter-widgets/ipywidgets).
- [Building a Custom Widget - Email widget](https://ipywidgets.readthedocs.io/en/latest/examples/Widget%20Custom.html) tutorial.
- [Build a Jupyter Widget with React and TypeScript](https://blog.jupyter.org/build-a-jupyter-widget-with-react-and-typescript-d83e07340fa3) blog post by John Waidhofer.
- [jupyter-widget-react-cookiecutter](https://github.com/Waidhoferj/jupyter-widget-react-cookiecutter) template by John Waidhofer.
- [react-colorful](https://www.npmjs.com/package/react-colorful) package.
- [widget-cookiecutter](https://github.com/jupyter-widgets/widget-cookiecutter) template.
- [How To Add Custom Build Steps and Commands To setup.py](https://jichu4n.com/posts/how-to-add-custom-build-steps-and-commands-to-setuppy/) blog post by Chuan Ji.

## Development

- `mamba env create -f environment.yml` or `mamba create -n ipycolorful-dev -c conda-forge jupyterlab jupyter-packaging nodejs yarn python`.
- `conda activate ipycolorful-dev`.
- `pip install -e .` + `conda list`.
- JupyterLab ([source](https://github.com/jupyter-widgets/widget-cookiecutter#local-dev-installation-for-jupyterlab)): `jupyter labextension develop ipycolorful --overwrite`.
- Jupyter Notebook/classic notebook ([source](https://github.com/jupyter-widgets/widget-cookiecutter#local-dev-installation-for-classic-notebook)):
  - `jupyter nbextension install --py --symlink --sys-prefix ipycolorful`.
  - `jupyter nbextension enable --py --sys-prefix ipycolorful`.
- `jupyter lab`.

## Notes

- [mamba](https://github.com/mamba-org/mamba):
  - `mamba --version`.
  - [Documentation](https://mamba.readthedocs.io/en/latest/).
  - `conda` should be used for activation and deactivation.
  - [Reimplement: mamba env create -f env.yml](https://github.com/mamba-org/mamba/issues/633) (open) issue.
  - `mamba env remove -n ipycolorful-dev` ([source](https://www.imranabdullah.com/2021-08-21/Conda-and-Mamba-Commands-for-Managing-Virtual-Environments)).
- [conda-forge](https://anaconda.org/conda-forge).
- [conda-lock](https://github.com/conda-incubator/conda-lock).
- [ipycanvas](https://github.com/martinRenou/ipycanvas).
- [bqplot](https://github.com/bqplot/bqplot).
- [babel-loader](https://webpack.js.org/loaders/babel-loader/).
- [`.yarnrc` file](https://classic.yarnpkg.com/en/docs/yarnrc/).
- [Node.js releases](https://nodejs.org/en/about/releases/).
