from rest_framework.generics import ListAPIView, RetrieveAPIView

from articles.models import Article
from .serializers import Article_serializer


class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = Article_serializer


class ArticleDetialView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = Article_serializer
