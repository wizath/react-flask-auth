from unittest import TestCase

from app import create_app


class TestWrapper(TestCase):

    def setUp(self):
        self.app = create_app('testing').test_client()

    def tearDown(self):
        pass
