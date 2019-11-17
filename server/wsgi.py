import unittest
from app import create_app

app = create_app()


@app.shell_context_processor
def make_shell_context():
    return {}


@app.cli.command()
def test():
    """Runs the unit tests without test coverage"""
    tests = unittest.TestLoader().discover('./tests', pattern='Test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)

    if result.wasSuccessful():
        return 0

    return 1
