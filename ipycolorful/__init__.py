from ._version import __version__, version_info
from .widget import ColorfulWidget

# Source:
# - https://github.com/jupyter-widgets/widget-cookiecutter/blob/master/%7B%7Bcookiecutter.github_project_name%7D%7D/%7B%7Bcookiecutter.python_package_name%7D%7D/__init__.py
# - https://github.com/Waidhoferj/jupyter-widget-react-cookiecutter/blob/master/%7B%7Bcookiecutter.github_project_name%7D%7D/%7B%7Bcookiecutter.python_package_name%7D%7D/__init__.py
# - https://en.wikipedia.org/wiki/Asynchronous_module_definition


def _jupyter_labextension_paths():
    return [
        {
            "src": "labextension",
            "dest": "ipycolorful",
        }
    ]


def _jupyter_nbextension_paths():
    return [
        {
            "section": "notebook",
            "src": "nbextension",
            "dest": "ipycolorful",
            "require": "ipycolorful/extension",
        }
    ]
