import os
from os.path import join as pjoin

from jupyter_packaging import (
    combine_commands,
    create_cmdclass,
    ensure_targets,
    install_npm,
    skip_if_exists,
)
from setuptools import setup

# Source:
# - https://github.com/jupyter-widgets/widget-cookiecutter/blob/master/%7B%7Bcookiecutter.github_project_name%7D%7D/setup.py
# - https://github.com/bqplot/bqplot/blob/master/setup.py
# - https://jupyter-notebook.readthedocs.io/en/stable/examples/Notebook/Distributing%20Jupyter%20Extensions%20as%20Python%20Packages.html
# - https://github.com/jupyter/jupyter-packaging/blob/main/jupyter_packaging/setupbase.py#L583
# - https://github.com/jupyter/jupyter-packaging

HERE = os.path.dirname(os.path.abspath(__file__))
name = "ipycolorful"

jstargets = [
    pjoin(HERE, name, "nbextension", "index.js"),
    pjoin(HERE, name, "labextension", "package.json"),
]

package_data_spec = {name: ["nbextension/**js*", "labextension/**"]}


data_files_spec = [
    ("share/jupyter/nbextensions/ipycolorful", "ipycolorful/nbextension", "**"),
    ("share/jupyter/labextensions/ipycolorful", "ipycolorful/labextension", "**"),
    ("share/jupyter/labextensions/ipycolorful", ".", "install.json"),
    ("etc/jupyter/nbconfig/notebook.d", ".", "ipycolorful.json"),
]

cmdclass = create_cmdclass(
    "jsdeps", package_data_spec=package_data_spec, data_files_spec=data_files_spec
)

npm_install = combine_commands(
    install_npm(HERE, build_cmd="build"),
    ensure_targets(jstargets),
)

cmdclass["jsdeps"] = skip_if_exists(jstargets, npm_install)

if __name__ == "__main__":
    setup(cmdclass=cmdclass)
