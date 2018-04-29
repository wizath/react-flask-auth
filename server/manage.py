import unittest

from flask_script import Manager, Server, Shell

from app import create_app

app = create_app()
manager = Manager(app)


def make_shell_context():
    return dict(app=app)


@manager.command
def test():
    """Runs the unit tests without test coverage"""
    tests = unittest.TestLoader().discover('./tests', pattern='Test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        return 0
    return 1


manager.add_command('runserver', Server())
manager.add_command('shell', Shell(make_context=make_shell_context))

if __name__ == "__main__":
    manager.run()
