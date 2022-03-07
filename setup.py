from setuptools import setup

# Source:
# - https://github.com/jupyter-widgets/widget-cookiecutter/blob/master/%7B%7Bcookiecutter.github_project_name%7D%7D/setup.py
# - https://github.com/bqplot/bqplot/blob/master/setup.py
# - https://jupyter-notebook.readthedocs.io/en/stable/examples/Notebook/Distributing%20Jupyter%20Extensions%20as%20Python%20Packages.html
# - https://github.com/jupyter/jupyter-packaging/blob/main/jupyter_packaging/setupbase.py#L583
# - https://github.com/jupyter/jupyter-packaging

try:
    from jupyter_packaging import npm_builder, wrap_installers

    builder = npm_builder(npm="yarn", build_cmd="build")
    cmdclass = wrap_installers(pre_develop=builder, pre_dist=builder)
except ImportError:
    cmdclass = {}

setup(cmdclass=cmdclass)
