from ipywidgets import DOMWidget
from traitlets import Unicode

from ._frontend import module_name, module_version

# Source:
# - https://traitlets.readthedocs.io/en/stable/trait_types.html#traitlets.Unicode
# - https://github.com/jupyter-widgets/widget-cookiecutter/issues/90
# - https://github.com/jupyter-widgets/widget-ts-cookiecutter/issues/109


class ColorfulWidget(DOMWidget):
    _model_name = Unicode("ColorfulModel").tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)

    _view_name = Unicode("ColorfulView").tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    value = Unicode("#ffffff").tag(sync=True)
